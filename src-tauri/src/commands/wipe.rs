use super::super::types::{Error, Wipe};

#[tauri::command]
pub fn get_all_wipes() -> Result<Vec<Wipe>, Error> {
    println!("get_all_wipes");
    let wipes = Wipe::all();
    println!("wipes: {:?}", wipes);
    Ok(wipes)
}

#[tauri::command]
pub fn create_wipe(name: String) -> Result<Wipe, Error> {
    println!("create_wipe");
    let wipe = Wipe::create(name);
    println!("wipe: {:?}", wipe);
    Ok(wipe)
}
