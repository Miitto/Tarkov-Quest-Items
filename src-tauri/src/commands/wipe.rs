use crate::types::{wipe::Wipe, Error};
use rusqlite::Connection;
use std::sync::Arc;
use std::sync::Mutex;
use tauri::State;

#[tauri::command]
pub async fn get_all_wipes(db_lock: State<'_, Arc<Mutex<Connection>>>) -> Result<Vec<Wipe>, Error> {
    let wipes = Wipe::all(db_lock.inner().clone()).await;
    Ok(wipes)
}

#[tauri::command]
pub async fn create_wipe(
    name: String,
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<Wipe, Error> {
    let wipe = Wipe::create(name, db_lock.inner().clone()).await;
    Ok(wipe)
}

#[tauri::command]
pub async fn delete_wipe(
    wipe_id: i64,
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<(), Error> {
    Wipe::delete(wipe_id, db_lock.inner().clone());
    Ok(())
}
