use std::sync::Arc;

use crate::types::{item::Item, Error};

use rusqlite::Connection;
use std::sync::Mutex;
use tauri::State;

#[tauri::command]
pub fn create_items(items: Vec<Item>, db_lock: State<Arc<Mutex<Connection>>>) -> Result<(), Error> {
    Item::bulk_create(items, db_lock.inner().clone());

    Ok(())
}

#[tauri::command]
pub async fn get_all_items(
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<Vec<Item>, String> {
    let items = Item::all(db_lock.inner().clone()).await;
    Ok(items)
}
