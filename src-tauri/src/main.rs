// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;
mod db;
mod log_watcher;
mod sys_tray;
mod types;
mod window;

use commands::*;
use rusqlite::Connection;
use std::sync::{Arc, Mutex};
use tauri::State;
use tauri::{CustomMenuItem, Manager, SystemTray, SystemTrayMenu, SystemTrayMenuItem};
use types::Error;
use types::Settings;

#[tokio::main]
async fn main() -> Result<(), Error> {
    let db = Connection::open("tarkov.sqlite")?;

    let hide = CustomMenuItem::new("hide".to_string(), "Hide");
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");

    let tray_menu = SystemTrayMenu::new()
        .add_item(hide)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(quit);
    let sys_tray = SystemTray::new().with_menu(tray_menu);

    tauri::Builder::default()
        .setup(|app| {
            let db = Connection::open("tarkov.sqlite")?;
            let mig_res = db::migrate(&db, app.app_handle());
            if mig_res.is_err() {
                println!("Error migrating database: {:?}", mig_res);
            }
            let settings = Settings::new(app.app_handle());

            let main_window_opt = app.get_window("main");

            let app_arc = Arc::new(app.app_handle());
            if let Some(main_window) = main_window_opt {
                main_window.on_window_event(move |event| {
                    if let tauri::WindowEvent::CloseRequested { .. } = event {
                        let app = app_arc.clone();
                        let settings_window_opt = app.get_window("settings");
                        if let Some(settings_window) = settings_window_opt {
                            let res = settings_window.close();
                            if res.is_err() {
                                println!("Error closing settings window");
                            }
                        }
                    }
                });
                println!("Listener Added");
            }

            app.manage(Mutex::new(settings));
            Ok(())
        })
        .manage(Arc::new(Mutex::new(db)))
        .manage(Mutex::new(None as Option<i64>))
        .system_tray(sys_tray)
        .on_system_tray_event(sys_tray::on_sys_tray_event)
        .invoke_handler(tauri::generate_handler![
            get_all_wipes,
            create_wipe,
            create_tasks,
            create_items,
            create_objectives,
            delete_wipe,
            get_all_items,
            get_all_objectives,
            get_task,
            get_task_objectives,
            update_task,
            get_all_tasks,
            update_objective,
            collect,
            uncollect,
            pick_wipe,
            get_current_wipe,
            get_collected_quantity,
            assign,
            assign_quantity,
            unassign,
            unassign_quantity,
            get_item_image,
            open_settings,
            find_tarkov,
            get_settings,
            save_settings,
            set_settings,
            validate_location,
        ])
        .build(tauri::generate_context!())
        .expect("error while running tauri application")
        .run(|app_handle, event| {
            if let tauri::RunEvent::ExitRequested { api, .. } = event {
                let settings: State<Mutex<Settings>> = app_handle.state::<Mutex<Settings>>();
                let set = settings.lock().unwrap();
                if set.sendable.close_to_tray {
                    println!("Preventing Exit");
                    api.prevent_exit();
                    let _ = app_handle.tray_handle().get_item("hide").set_title("Show");
                } else {
                    println!("Allowing Exit");
                }
            }
        });

    Ok(())
}
