use crate::types::{objective::Objective, objective::ObjectiveParams, Error};
use rusqlite::Connection;
use std::sync::Arc;
use std::sync::Mutex;
use tauri::State;

#[tauri::command]
pub fn create_objectives(
    objectives: Vec<Objective>,
    db_lock: State<Arc<Mutex<Connection>>>,
) -> Result<(), Error> {
    Objective::bulk_create(objectives, db_lock.inner().clone());

    Ok(())
}

#[tauri::command]
pub async fn get_all_objectives(
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<Vec<Objective>, String> {
    let obj = Objective::all(db_lock.inner().clone()).await;
    Ok(obj)
}
