use std::sync::Arc;

use crate::types::Error;
use tauri::{AppHandle, Manager};

pub fn create_main_window(app: &AppHandle) -> Result<(), Error> {
    let main_window_res =
        tauri::WindowBuilder::new(app, "main", tauri::WindowUrl::App("index.html".into())).build();

    let app_arc = Arc::new(app.app_handle());
    if let Ok(main_window) = main_window_res {
        let _ = main_window.set_title("Tarkov Wipe Tracker");
        main_window.on_window_event(move |event| {
            let app = app_arc.clone();
            if let tauri::WindowEvent::CloseRequested { .. } = event {
                let settings_window_opt = app.get_window("settings");
                if let Some(settings_window) = settings_window_opt {
                    let res = settings_window.close();
                    if res.is_err() {
                        println!("Error closing settings window");
                    }
                }
            }
        });
    } else {
        println!("Error creating main window");
    }
    Ok(())
}
