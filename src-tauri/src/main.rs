// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use rusqlite::Connection;

mod commands;
use commands::wipe::{create_wipe, get_all_wipes};
mod types;
mod util;
mod wipe;

use types::Error;

fn main() -> Result<(), Error> {
    let db = Connection::open("tarkov.sqlite")?;

    db.execute(
        "CREATE TABLE IF NOT EXISTS items (
            id integer primary key,
            name text not null unique,
            image text,
            needed integer
        )",
        (),
    )?;

    db.execute(
        "CREATE TABLE IF NOT EXISTS wipe (
        id integer primary key,
        name text not null unique
    )",
        (),
    )?;

    db.execute(
        "CREATE TABLE IF NOT EXISTS wipeItem (
        id integer primary key,
        quantity integer not null,
        item integer not null references items(id) on delete cascade,
        wipe integer not null references wipe(id) on delete cascade
    )",
        (),
    )?;

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_all_wipes, create_wipe])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

    Ok(())
}
