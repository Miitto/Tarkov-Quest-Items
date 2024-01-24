mod items;
mod objectives;
mod settings;
mod tasks;
mod wipe;

pub use items::*;
pub use objectives::*;
pub use settings::*;
pub use tasks::*;
use tauri::Manager;
pub use wipe::*;

#[tauri::command]
pub fn expand_scope(
    app_handle: tauri::AppHandle,
    folder_path: std::path::PathBuf,
) -> Result<(), String> {
    // If possible, verify your path if it comes from your frontend.

    // true means that we want inner directories allowed too
    app_handle
        .fs_scope()
        .allow_directory(folder_path, true)
        .map_err(|err| err.to_string())
}
