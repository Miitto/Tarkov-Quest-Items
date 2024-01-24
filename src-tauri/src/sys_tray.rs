use tauri::{AppHandle, Manager, SystemTrayEvent};

use crate::window::create_main_window;

pub fn on_sys_tray_event(app: &AppHandle, event: SystemTrayEvent) {
    match event {
        tauri::SystemTrayEvent::LeftClick { .. } => {
            let main_window_opt = app.get_window("main");
            if let Some(main_window) = main_window_opt {
                let res = main_window.show();
                if res.is_err() {
                    println!("Error showing main window");
                }
                let _ = main_window.unminimize();
                let _ = main_window.set_focus();
            } else {
                let res = create_main_window(app);
                if res.is_err() {
                    println!("Error creating main window");
                    app.exit(1);
                }
            }
        }

        tauri::SystemTrayEvent::MenuItemClick { id, .. } => {
            let item_handle = app.tray_handle().get_item(&id);
            if id == "quit" {
                app.exit(0);
            } else if id == "hide" {
                let main_window_opt = app.get_window("main");
                if let Some(main_window) = main_window_opt {
                    if main_window.is_visible().unwrap_or(false) {
                        let res = main_window.hide();
                        if res.is_err() {
                            println!("Error hiding main window");
                            return;
                        }
                        let settings_window_opt = app.get_window("settings");
                        if let Some(settings_window) = settings_window_opt {
                            let res = settings_window.close();
                            if res.is_err() {
                                println!("Error closing settings window");
                            }
                        }
                        let _ = item_handle.set_title("Show");
                    } else {
                        let res = main_window.show();
                        if res.is_err() {
                            println!("Error showing main window");
                            return;
                        }
                        let _ = item_handle.set_title("Hide");
                    }
                } else {
                    println!("Error getting main window");
                    let res = create_main_window(app);
                    if res.is_err() {
                        println!("Error creating main window");
                        return;
                    }
                }
            }
        }
        _ => {}
    }
}
