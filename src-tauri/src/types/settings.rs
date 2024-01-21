use ini::Ini;
use winreg::enums::*;
use winreg::RegKey;

use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Settings {
    pub install_location: String,
    pub watch_logs: bool,
}

impl Settings {
    pub fn default() -> Self {
        let install_location = Settings::find_tarkov();

        let watch_logs = if install_location.is_empty() {
            false
        } else {
            true
        };
        Settings {
            install_location,
            watch_logs,
        }
    }

    pub fn new(app: tauri::AppHandle) -> Self {
        println!("Loading settings");
        let dir = app.path_resolver().app_config_dir().unwrap();

        let settings = dir.join("settings.ini");

        let i_res = Ini::load_from_file(settings);
        if i_res.is_err() {
            return Settings::default();
        }

        let i = i_res.unwrap();

        for (sec, prop) in i.iter() {
            println!("Section: {:?}", sec);
            for (k, v) in prop.iter() {
                println!("{}:{}", k, v);
            }
        }

        Settings::default()
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
}
