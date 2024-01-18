use crate::types::{objective::Objective, Error};
use rusqlite::Connection;
use std::sync::Arc;
use std::sync::Mutex;
use tauri::State;

#[tauri::command]
pub fn create_objectives(
    objectives: Vec<Objective>,
    db_lock: State<Arc<Mutex<Connection>>>,
) -> Result<(), Error> {
    for obj in objectives {
        Objective::create(
            obj.id,
            obj.description,
            obj.optional,
            obj.count,
            obj.found_in_raid,
            obj.item,
            obj.task,
            db_lock.inner().clone(),
        );
    }

    Ok(())
}
