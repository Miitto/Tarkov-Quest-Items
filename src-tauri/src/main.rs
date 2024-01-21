// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use rusqlite::Connection;

mod commands;
use commands::items::*;
use commands::objectives::*;
use commands::settings::*;
use commands::tasks::*;
use commands::wipe::*;
use tauri::Manager;
use types::settings::Settings;
mod types;

use std::sync::{Arc, Mutex};
use types::Error;

#[tokio::main]
async fn main() -> Result<(), Error> {
    let db = Connection::open("tarkov.sqlite")?;

    db.execute(
        "CREATE TABLE IF NOT EXISTS items (
            id text primary key,
            name text not null unique,
            image text
        )",
        (),
    )?;

    db.execute(
        "CREATE TABLE IF NOT EXISTS wipes (
        id integer primary key,
        name text not null unique
    )",
        (),
    )?;

    db.execute(
        "CREATE TABLE IF NOT EXISTS tasks (
            id text,
            name text not null,
            vendor text not null,
            min_level integer,
            wipe integer not null references wipes(id) on delete cascade,
            image text,
            PRIMARY KEY (id, wipe)
        )",
        (),
    )?;

    db.execute(
        "CREATE TABLE IF NOT EXISTS objectives (
            id text,
            item text references items(id) on delete cascade,
            task text not null,
            wipe integer not null,
            count integer not null,
            collected integer not null,
            found_in_raid integer not null,
            optional integer not null,
            description text not null,
            completed integer not null default 0,
            dogtag_level integer not null default 0,
            min_durability integer not null default 0,
            max_durability integer not null default 100,
            PRIMARY KEY (id, wipe),
            FOREIGN KEY (task, wipe) REFERENCES tasks(id, wipe) on delete cascade
        )",
        (),
    )?;

    db.execute(
        "CREATE TABLE IF NOT EXISTS found_items (
        quantity integer not null,
        item integer not null references items(id) on delete cascade,
        wipe integer not null references wipes(id) on delete cascade,
        found_in_raid integer not null,
        dogtag_level integer not null default 0,
        min_durability integer not null default 0,
        max_durability integer not null default 100,
        PRIMARY KEY (item, wipe)
    )",
        (),
    )?;

    tauri::Builder::default()
        .setup(|app| {
            app.manage(Mutex::new(Settings::new(app.app_handle())));
            Ok(())
        })
        .manage(Arc::new(Mutex::new(db)))
        .manage(Mutex::new(None as Option<i64>))
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
            find_tarkov
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

    Ok(())
}
