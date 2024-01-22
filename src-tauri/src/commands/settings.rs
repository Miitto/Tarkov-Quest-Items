use tauri::Manager;

use crate::types::Error;

use crate::types::settings::Settings;

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
    Ok(Settings::find_tarkov())
}

#[tauri::command]
pub fn get_settings(settings: State<Mutex<Settings>>) -> Settings {
    (*settings.lock().unwrap()).clone()
}

#[tauri::command]
pub fn save_settings(settings: State<Mutex<Settings>>, app: tauri::AppHandle) -> Result<(), Error> {
    let set = settings.lock().unwrap().clone();
    set.save(app.app_handle())
}

#[tauri::command]
pub fn set_settings(
    install_location: Option<String>,
    watch_logs: Option<bool>,
    settings: State<Mutex<Settings>>,
) -> Result<(), Error> {
    let mut set = settings.lock().unwrap();

    if let Some(loc) = install_location {
        set.install_location = loc;
    }

    if let Some(watch) = watch_logs {
        set.watch_logs = watch;
    }

    Ok(())
}
