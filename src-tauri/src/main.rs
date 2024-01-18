// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use rusqlite::Connection;

mod commands;
use commands::items::*;
use commands::objectives::create_objectives;
use commands::tasks::create_tasks;
use commands::wipe::{create_wipe, delete_wipe, get_all_wipes};
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
            id text primary key,
            name text not null unique,
            vendor text not null,
            min_level integer,
            wipe integer not null references wipes(id) on delete cascade
        )",
        (),
    )?;

    db.execute(
        "CREATE TABLE IF NOT EXISTS objectives (
            id integer primary key,
            item text not null references items(id) on delete cascade,
            task text not null references task(id) on delete cascade,
            count integer not null,
            found_in_raid integer not null,
            optional integer not null,
            description text not null
        )",
        (),
    )?;

    db.execute(
        "CREATE TABLE IF NOT EXISTS found_items (
        quantity integer not null,
        item integer not null references items(id) on delete cascade,
        wipe integer not null references wipes(id) on delete cascade,
        PRIMARY KEY (item, wipe)
    )",
        (),
    )?;

    tauri::Builder::default()
        .manage(Arc::new(Mutex::new(db)))
        .invoke_handler(tauri::generate_handler![
            get_all_wipes,
            create_wipe,
            create_tasks,
            create_items,
            create_objectives,
            delete_wipe,
            get_all_items
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

    Ok(())
}
