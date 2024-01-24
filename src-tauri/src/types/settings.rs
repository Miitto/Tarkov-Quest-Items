use ini::Ini;
use std::fs;
use std::path::PathBuf;
use std::sync::Arc;
use std::sync::Mutex;
use tauri::Manager;
use winreg::enums::*;
use winreg::RegKey;

use serde::{Deserialize, Serialize};

use super::Error;

use crate::log_watcher::LogWatcher;

#[derive(Clone, Debug, Serialize, Deserialize)]

pub struct SendableSettings {
    // Tarkov Settings
    pub install_location: String,

    pub install_location_valid: bool,

    // Application Settings
    pub close_to_tray: bool,

    // Logs
    pub watch_logs: bool,
}

pub struct Settings {
    pub sendable: SendableSettings,
    pub log_watcher: LogWatcher,
}

#[derive(Clone, serde::Serialize)]
struct Payload {
    message: String,
    path: String,
}

impl Settings {
    pub fn default() -> Self {
        let install_location = Settings::find_tarkov();

        let valid = Settings::validate_location(install_location.clone());

        let watch_logs = valid;

        let sendable = SendableSettings {
            install_location,
            install_location_valid: valid,
            watch_logs,
            close_to_tray: true,
        };

        Settings {
            sendable,
            log_watcher: LogWatcher::new(None),
        }
    }

    pub fn new(app: tauri::AppHandle) -> Self {
        let dir = app.path_resolver().app_config_dir().unwrap();

        let settings = dir.join("settings.ini");

        let i_res = Ini::load_from_file(settings);
        if i_res.is_err() {
            return Settings::default();
        }

        let i = i_res.unwrap();
        let install_location: String;
        let watch_logs: bool;

        let tarkov_settings_opt = i.section(Some("Tarkov"));

        if let Some(tarkov_settings) = tarkov_settings_opt {
            install_location = tarkov_settings.get("tarkov_path").unwrap_or("").to_string();
            watch_logs = tarkov_settings.get("watch_logs").unwrap_or("") == "true";
        } else {
            install_location = Settings::find_tarkov();
            watch_logs = !install_location.is_empty();
        }

        let app_settings_opt = i.section(Some("Application"));

        let close_to_tray: bool;

        if let Some(app_settings) = app_settings_opt {
            close_to_tray = app_settings.get("close_to_tray").unwrap_or("") == "true";
        } else {
            close_to_tray = true;
        }

        let found = Settings::validate_location(install_location.clone());

        if !found && !install_location.is_empty() {
            let reg_loc = Settings::find_tarkov();

            let reg_found = Settings::validate_location(reg_loc.clone());

            if !reg_found {
                tauri::api::dialog::MessageDialogBuilder::new("Invalid Tarkov Install Location", "The Tarkov install location you have set is not valid. Please update it in the settings.")
                .buttons(tauri::api::dialog::MessageDialogButtons::Ok)
                .kind(tauri::api::dialog::MessageDialogKind::Error)
                .show(|_| {});
            }

            let app_arc = Arc::new(app);
            let path = reg_loc.clone();

            tauri::api::dialog::MessageDialogBuilder::new("Invalid Tarkov Install Location", format!("The Tarkov install location you have set is not valid. We have found a suitable location at: {}. Would you like to set the path?", reg_loc))
                .buttons(tauri::api::dialog::MessageDialogButtons::OkCancelWithLabels("Set Path".to_string(), "Cancel".to_string()))
                .kind(tauri::api::dialog::MessageDialogKind::Error)
                .show(|set_path| {
                    if set_path {
                        std::thread::spawn(move || {
                            let settings_mutex = (*app_arc).state::<Mutex<Settings>>();
                            let mut settings = settings_mutex.lock().unwrap();
                            settings.sendable.install_location = path.clone();
                            let _ = settings.save(app_arc.app_handle());
                        });
                    }
                });
        }

        let sendable = SendableSettings {
            install_location: install_location.clone(),
            install_location_valid: found,
            watch_logs,
            close_to_tray,
        };

        Settings {
            sendable,
            log_watcher: LogWatcher::new(if found {
                Some(PathBuf::from(install_location))
            } else {
                None
            }),
        }
    }

    pub fn find_tarkov() -> String {
        if !cfg!(windows) {
            return String::new();
        }

        println!("Finding Tarkov Install Location");

        let hklm = RegKey::predef(HKEY_LOCAL_MACHINE);
        let reg: RegKey;

        let x64 = hklm.open_subkey(
            "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\EscapeFromTarkov",
        );

        if let Ok(key) = x64 {
            reg = key;
        } else {
            let x32 = hklm.open_subkey("SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\EscapeFromTarkov");
            if x32.is_err() {
                println!("Reg Error: {}", x32.unwrap_err());
                return String::new();
            }
            reg = x32.unwrap();
        }

        let install_location_res = reg.get_value("InstallLocation");

        if install_location_res.is_err() {
            println!(
                "Install Location Error: {}",
                install_location_res.unwrap_err()
            );
            return String::new();
        }

        let install_location = install_location_res.unwrap();

        println!("Install Location: {}", install_location);

        install_location
    }

    pub fn validate_location(loc: String) -> bool {
        if loc.is_empty() {
            return false;
        }

        let path = std::path::Path::new(&loc);

        if !path.exists() {
            return false;
        }

        let path = path.join("EscapeFromTarkov.exe");

        if !path.exists() {
            return false;
        }

        true
    }

    pub fn save(&self, app: tauri::AppHandle) -> Result<(), Error> {
        let sendable = self.sendable.clone();

        let dir = app.path_resolver().app_config_dir().unwrap();

        let settings = dir.join("settings.ini");

        println!("Path: {:?}", settings);

        let p_res = fs::create_dir_all(dir);

        if p_res.is_err() {
            println!("Error: {}", p_res.unwrap_err());
        }

        let mut i = Ini::new();
        i.set_to(
            Some("Tarkov"),
            "tarkov_path".to_string(),
            sendable.install_location,
        );
        i.set_to(
            Some("Tarkov"),
            "watch_logs".to_string(),
            sendable.watch_logs.to_string(),
        );

        i.set_to(
            Some("Application"),
            "close_to_tray".to_string(),
            sendable.close_to_tray.to_string(),
        );

        i.write_to_file(settings)?;
        Ok(())
    }
}
