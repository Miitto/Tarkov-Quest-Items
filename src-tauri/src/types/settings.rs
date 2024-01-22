use ini::Ini;
use std::fs;
use winreg::enums::*;
use winreg::RegKey;

use serde::{Deserialize, Serialize};

use super::Error;

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Settings {
    pub install_location: String,
    pub watch_logs: bool,
}

impl Settings {
    pub fn default() -> Self {
        let install_location = Settings::find_tarkov();

        let watch_logs = !install_location.is_empty();
        Settings {
            install_location,
            watch_logs,
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

        Settings {
            install_location,
            watch_logs,
        }
    }

    pub fn find_tarkov() -> String {
        if !cfg!(windows) {
            return String::new();
        }

        println!("Finding Tarkov Install Location");

        let hklm = RegKey::predef(HKEY_LOCAL_MACHINE);
        let cur_version_res =
            hklm.open_subkey("SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall");

        if cur_version_res.is_err() {
            return String::new();
        }

        let cur_version = cur_version_res.unwrap();
        let eft_res = cur_version.open_subkey("EscapeFromTarkov");

        if eft_res.is_err() {
            return String::new();
        }

        let eft = eft_res.unwrap();

        let install_location_res = eft.get_value("InstallLocation");

        if install_location_res.is_err() {
            return String::new();
        }

        let install_location = install_location_res.unwrap();

        println!("Install Location: {}", install_location);

        install_location
    }

    pub fn save(self, app: tauri::AppHandle) -> Result<(), Error> {
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
            self.install_location,
        );
        i.set_to(
            Some("Tarkov"),
            "watch_logs".to_string(),
            self.watch_logs.to_string(),
        );
        i.write_to_file(settings)?;
        Ok(())
    }
}
