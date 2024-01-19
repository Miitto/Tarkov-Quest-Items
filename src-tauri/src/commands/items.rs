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

#[tauri::command]
pub async fn collect_item(
    id: String,
    fir: bool,
    quantity: Option<i64>,
    db_lock: State<'_, Arc<Mutex<Connection>>>,
    wipe_state: State<'_, Mutex<Option<i64>>>,
) -> Result<i64, Error> {
    let wipe_id = *wipe_state.lock().unwrap();
    if wipe_id.is_none() {
        return Err(Error::Other {
            message: "No wipe selected".to_string(),
        });
    }
    if let Some(q) = quantity {
        Item::collect(id, fir, q, db_lock.inner().clone(), wipe_id.unwrap()).await
    } else {
        Item::collect(id, fir, 1, db_lock.inner().clone(), wipe_id.unwrap()).await
    }
}

#[tauri::command]
pub async fn remove_item(
    id: String,
    fir: bool,
    quantity: Option<i64>,
    wipe_state: State<'_, Mutex<Option<i64>>>,
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<i64, Error> {
    let wipe_id = *wipe_state.lock().unwrap();
    if wipe_id.is_none() {
        return Err(Error::Other {
            message: "No wipe selected".to_string(),
        });
    }
    if let Some(q) = quantity {
        Item::remove(id, fir, q, db_lock.inner().clone(), wipe_id.unwrap()).await
    } else {
        Item::remove(id, fir, 1, db_lock.inner().clone(), wipe_id.unwrap()).await
    }
}

#[tauri::command]
pub async fn get_item_quantity(
    id: String,
    fir: bool,
    wipe_state: State<'_, Mutex<Option<i64>>>,
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<i64, Error> {
    let wipe_id = *wipe_state.lock().unwrap();
    if wipe_id.is_none() {
        return Err(Error::Other {
            message: "No wipe selected".to_string(),
        });
    }

    Item::get_quantity(id, fir, db_lock.inner().clone(), wipe_id.unwrap()).await
}
