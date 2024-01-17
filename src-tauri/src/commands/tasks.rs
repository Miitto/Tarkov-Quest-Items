use crate::types::{task::Task, Error};

#[tauri::command]
pub fn create_tasks(tasks: Vec<Task>) -> Result<(), Error> {
    for task in tasks {
        Task::create(task.id, task.name, task.vendor, task.min_level, task.wipe);
    }

    Ok(())
}
