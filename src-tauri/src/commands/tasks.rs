use crate::types::{task::Task, Error};
use rusqlite::Connection;
use std::sync::Arc;
use std::sync::Mutex;
use tauri::State;

#[tauri::command]
pub fn create_tasks(tasks: Vec<Task>, db_lock: State<Arc<Mutex<Connection>>>) -> Result<(), Error> {
    for task in tasks {
        Task::create(
            task.id,
            task.name,
            task.vendor,
            task.min_level,
            task.wipe,
            db_lock.inner().clone(),
        );
    }

    Ok(())
}
