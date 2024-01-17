use crate::types::{objective::Objective, Error};

#[tauri::command]
pub fn create_objectives(objectives: Vec<Objective>) -> Result<(), Error> {
    for obj in objectives {
        Objective::create(
            obj.id,
            obj.description,
            obj.optional,
            obj.count,
            obj.found_in_raid,
            obj.item,
            obj.task,
        );
    }

    Ok(())
}
