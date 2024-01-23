use tauri::Manager;

use crate::types::Error;

use crate::types::SendableSettings;
use crate::types::Settings;

use std::sync::Mutex;
use tauri::State;

#[tauri::command]
pub async fn open_settings(app: tauri::AppHandle) -> Result<bool, Error> {
    let settings_window_opt = app.get_window("settings");

    if settings_window_opt.is_none() {
        let settings_window = tauri::WindowBuilder::new(
            &app,
            "settings",
            tauri::WindowUrl::App("settings.html".into()),
        )
        .build()?;

        settings_window.set_title("Settings")?;

        return Ok(true);
    }

    let settings_window = settings_window_opt.unwrap();

    settings_window.set_focus()?;

    Ok(true)
}

#[tauri::command]
pub async fn find_tarkov() -> Result<String, Error> {
    let loc = Settings::find_tarkov();
    if Settings::validate_location(loc.clone()) {
        return Ok(loc);
    }
    Err(Error::Other {
        message: "Cannot find Tarkov".to_string(),
    })
}

#[tauri::command]
pub fn get_settings(settings: State<Mutex<Settings>>) -> SendableSettings {
    settings.lock().unwrap().sendable.clone()
}

#[tauri::command]
pub fn save_settings(settings: State<Mutex<Settings>>, app: tauri::AppHandle) -> Result<(), Error> {
    let set = settings.lock().unwrap();
    set.save(app.app_handle())?;
    Ok(())
}

#[tauri::command]
pub fn set_settings(
    install_location: Option<String>,
    watch_logs: Option<bool>,
    close_to_tray: Option<bool>,
    settings: State<Mutex<Settings>>,
) -> Result<SendableSettings, Error> {
    let mut set = settings.lock().unwrap();

    if let Some(loc) = install_location {
        if !Settings::validate_location(loc.clone()) {
            return Err(Error::Other {
                message: format!("Invalid Install Location: {}", loc),
            });
        }
        set.sendable.install_location = loc.clone();
        set.log_watcher.set_path(loc)?;
    }

    if let Some(watch) = watch_logs {
        set.sendable.watch_logs = watch;
    }

    if let Some(close) = close_to_tray {
        set.sendable.close_to_tray = close;
    }

    Ok(set.sendable.clone())
}

#[tauri::command]
pub fn validate_location(location: Option<String>, settings: State<Mutex<Settings>>) -> bool {
    if let Some(loc) = location {
        if !Settings::validate_location(loc.clone()) {
            return false;
        }
        return true;
    }

    let set = settings.lock().unwrap();

    if !Settings::validate_location(set.sendable.install_location.clone()) {
        return false;
    }

    true
}
