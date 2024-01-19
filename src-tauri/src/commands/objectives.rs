use crate::types::{objective::update::UpdateObjective, objective::Objective, Error};
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
    wipe_state: State<'_, Mutex<Option<i64>>>,
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<Vec<Objective>, Error> {
    let wipe_id = *wipe_state.lock().unwrap();
    if wipe_id.is_none() {
        return Err(Error::Other {
            message: "No wipe selected".to_string(),
        });
    }

    let obj = Objective::all(wipe_id.unwrap(), db_lock.inner().clone()).await;
    Ok(obj)
}

#[tauri::command]
pub async fn get_task_objectives(
    id: String,
    wipe_state: State<'_, Mutex<Option<i64>>>,
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<Vec<Objective>, Error> {
    let wipe_id = *wipe_state.lock().unwrap();
    if wipe_id.is_none() {
        return Err(Error::Other {
            message: "No wipe selected".to_string(),
        });
    }

    let objs = Objective::task_get(id, wipe_id.unwrap(), db_lock.inner().clone()).await;
    Ok(objs)
}

#[tauri::command]
#[allow(clippy::too_many_arguments)]
pub fn update_objective(
    id: String,
    description: Option<String>,
    optional: Option<bool>,
    count: Option<i64>,
    found_in_raid: Option<bool>,
    item: Option<String>,
    task: Option<String>,
    completed: Option<bool>,
    wipe_state: State<'_, Mutex<Option<i64>>>,
    db_lock: State<'_, Arc<Mutex<Connection>>>,
) -> Result<Objective, Error> {
    let wipe_id = *wipe_state.lock().unwrap();
    if wipe_id.is_none() {
        return Err(Error::Other {
            message: "No wipe selected".to_string(),
        });
    }

    Objective::update(
        UpdateObjective {
            id,
            wipe: wipe_id.unwrap(),
            description,
            optional,
            count,
            found_in_raid,
            item,
            task,
            completed,
        },
        db_lock.inner().clone(),
    )
}
