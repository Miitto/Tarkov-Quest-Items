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
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<Task, Error> {
    Task::get(task_id, db_lock.inner().clone()).await
}

#[tauri::command]
pub async fn update_task(
    id: String,
    name: Option<String>,
    vendor: Option<String>,
    min_level: Option<i64>,
    wipe: Option<i64>,
    image: Option<String>,
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<Task, Error> {
    Task::update(
        id,
        name,
        vendor,
        min_level,
        wipe,
        image,
        db_lock.inner().clone(),
    )
    .await
}

#[tauri::command]
pub async fn get_all_tasks(db_lock: State<'_, Arc<Mutex<Connection>>>) -> Result<Vec<Task>, Error> {
    let wipes = Task::all(db_lock.inner().clone()).await;
    Ok(wipes)
}
