use crate::getDb;
use crate::types::{item::Item, Error};
use rusqlite::Connection;

#[tauri::command]
pub fn create_items(items: Vec<Item>) -> Result<(), Error> {
    let db = getDb!();

    let mut stmt = db.prepare("INSERT INTO items (id, name, image) VALUES (?, ?, ?)")?;

    for item in items {
        stmt.execute([item.id, item.name, item.image]).unwrap();
    }

    Ok(())
}
