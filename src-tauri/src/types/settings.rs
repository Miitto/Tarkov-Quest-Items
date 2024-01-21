use super::Error;
use ini::Ini;
use winreg::enums::*;
use winreg::RegKey;

pub struct Settings {
    pub install_location: String,
}

impl Settings {
    pub fn default() -> Self {
        Settings {
            install_location: "".to_string(),
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

        for (sec, prop) in i.iter() {
            println!("Section: {:?}", sec);
            for (k, v) in prop.iter() {
                println!("{}:{}", k, v);
            }
        }

        let install_location = Settings::find_tarkov().unwrap_or("".to_string());
        Settings { install_location }
    }

    pub fn find_tarkov() -> Result<String, Error> {
        if !cfg!(windows) {
            return Err(Error::Other {
                message: "Only Windows is supported".to_string(),
            });
        }

        let hklm = RegKey::predef(HKEY_LOCAL_MACHINE);
        let cur_version = hklm.open_subkey("SOFTWARE\\Microsoft\\Windows\\CurrentVersion")?;
        let uninstall = cur_version.open_subkey("Uninstall")?;
        let eft = uninstall.open_subkey("EscapeFromTarkov")?;

        let install_location: String = eft.get_value("InstallLocation")?;

        Ok(install_location)
    }
}
