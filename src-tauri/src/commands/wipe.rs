use crate::types::{wipe::Wipe, Error};

#[tauri::command]
pub fn get_all_wipes() -> Result<Vec<Wipe>, Error> {
    let wipes = Wipe::all();
    Ok(wipes)
}

#[tauri::command]
pub fn create_wipe(name: String) -> Result<Wipe, Error> {
    let wipe = Wipe::create(name);
    Ok(wipe)
}

#[tauri::command]
pub fn delete_wipe(wipe_id: i64) -> Result<(), Error> {
    Wipe::delete(wipe_id);
    Ok(())
}
