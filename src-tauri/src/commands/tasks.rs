use crate::types::{task::Task, Error};
use rusqlite::Connection;
use std::sync::Arc;
use std::sync::Mutex;
use tauri::State;

#[tauri::command]
pub fn create_tasks(tasks: Vec<Task>, db_lock: State<Arc<Mutex<Connection>>>) -> Result<(), Error> {
    Task::bulk_create(tasks, db_lock.inner().clone());

    Ok(())
}

#[tauri::command]
pub async fn get_task(
    task_id: String,
    wipe_state: State<'_, Mutex<Option<i64>>>,
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<Task, Error> {
    let wipe_id = *wipe_state.lock().unwrap();
    if wipe_id.is_none() {
        return Err(Error::NoWipeSelected);
    }

    let wipe = wipe_id.unwrap();
    Task::get(task_id, wipe, db_lock.inner().clone()).await
}

#[tauri::command]
pub async fn update_task(
    id: String,
    name: Option<String>,
    vendor: Option<String>,
    min_level: Option<i64>,
    image: Option<String>,
    wipe_state: State<'_, Mutex<Option<i64>>>,
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<Task, Error> {
    let wipe_id = *wipe_state.lock().unwrap();
    if wipe_id.is_none() {
        return Err(Error::NoWipeSelected);
    }

    let wipe = wipe_id.unwrap_or(wipe_id.unwrap());
    Task::update(
        id,
        wipe,
        name,
        vendor,
        min_level,
        image,
        db_lock.inner().clone(),
    )
    .await
}

#[tauri::command]
pub async fn get_all_tasks(
    wipe_state: State<'_, Mutex<Option<i64>>>,
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<Vec<Task>, Error> {
    let wipe_id = *wipe_state.lock().unwrap();
    if wipe_id.is_none() {
        return Err(Error::NoWipeSelected);
    }
    let wipe = wipe_id.unwrap();

    let wipes = Task::all(wipe, db_lock.inner().clone()).await;
    Ok(wipes)
}
