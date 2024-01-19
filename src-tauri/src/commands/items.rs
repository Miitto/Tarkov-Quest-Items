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
#[allow(clippy::too_many_arguments)]
pub async fn collect(
    id: String,
    fir: bool,
    dogtag_level: Option<i64>,
    min_durability: Option<i64>,
    max_durability: Option<i64>,
    quantity: Option<i64>,
    db_lock: State<'_, Arc<Mutex<Connection>>>,
    wipe_state: State<'_, Mutex<Option<i64>>>,
) -> Result<i64, Error> {
    let wipe_id = *wipe_state.lock().unwrap();
    if wipe_id.is_none() {
        return Err(Error::NoWipeSelected);
    }

    let dt_lvl = dogtag_level.unwrap_or(0);
    let min_dur = min_durability.unwrap_or(0);
    let max_dur = max_durability.unwrap_or(100);

    if let Some(q) = quantity {
        Item::collect(
            id,
            fir,
            dt_lvl,
            min_dur,
            max_dur,
            q,
            db_lock.inner().clone(),
            wipe_id.unwrap(),
        )
    } else {
        Item::collect(
            id,
            fir,
            dt_lvl,
            min_dur,
            max_dur,
            1,
            db_lock.inner().clone(),
            wipe_id.unwrap(),
        )
    }
}

#[tauri::command]
#[allow(clippy::too_many_arguments)]
pub fn uncollect(
    id: String,
    fir: bool,
    dogtag_level: Option<i64>,
    min_durability: Option<i64>,
    max_durability: Option<i64>,
    quantity: Option<i64>,
    wipe_state: State<'_, Mutex<Option<i64>>>,
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<i64, Error> {
    let wipe_id = *wipe_state.lock().unwrap();
    if wipe_id.is_none() {
        return Err(Error::NoWipeSelected);
    }

    let dt_lvl = dogtag_level.unwrap_or(0);
    let min_dur = min_durability.unwrap_or(0);
    let max_dur = max_durability.unwrap_or(100);

    if let Some(q) = quantity {
        Item::uncollect(
            id,
            fir,
            dt_lvl,
            min_dur,
            max_dur,
            q,
            db_lock.inner().clone(),
            wipe_id.unwrap(),
        )
    } else {
        Item::uncollect(
            id,
            fir,
            dt_lvl,
            min_dur,
            max_dur,
            1,
            db_lock.inner().clone(),
            wipe_id.unwrap(),
        )
    }
}

#[tauri::command]
pub fn get_collected_quantity(
    id: String,
    fir: bool,
    dogtag_level: Option<i64>,
    min_durability: Option<i64>,
    max_durability: Option<i64>,
    wipe_state: State<'_, Mutex<Option<i64>>>,
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<i64, Error> {
    let wipe_id = *wipe_state.lock().unwrap();
    if wipe_id.is_none() {
        return Err(Error::NoWipeSelected);
    }

    let dt_lvl = dogtag_level.unwrap_or(0);
    let min_dur = min_durability.unwrap_or(0);
    let max_dur = max_durability.unwrap_or(100);

    Item::get_quantity(
        id,
        fir,
        dt_lvl,
        min_dur,
        max_dur,
        db_lock.inner().clone(),
        wipe_id.unwrap(),
    )
}

#[tauri::command]
pub async fn get_item_image(
    id: String,
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<String, Error> {
    Item::get_image(id, db_lock.inner().clone()).await
}
