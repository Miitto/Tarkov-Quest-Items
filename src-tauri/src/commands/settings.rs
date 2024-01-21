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
