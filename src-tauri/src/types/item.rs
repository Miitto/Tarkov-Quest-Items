use rusqlite::Connection;
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use std::sync::Mutex;
use tauri::State;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Item {
    pub id: String,
    pub name: String,
    pub image: String,
}

impl Item {
    pub async fn all(db_lock: Arc<Mutex<Connection>>) -> Vec<Self> {
        let db = db_lock.lock().unwrap();

        let mut all: Vec<Self> = db
            .prepare("SELECT id, name, image FROM items")
            .unwrap()
            .query_map([], |row| {
                Ok(Item {
                    id: row.get(0)?,
                    name: row.get(1)?,
                    image: row.get(2)?,
                })
            })
            .unwrap()
            .map(|x| x.unwrap())
            .collect();
        all.reverse();
        all
    }

    pub fn create(
        id: String,
        name: String,
        image: String,
        db_lock: Arc<Mutex<Connection>>,
    ) -> Self {
        let id2 = id.clone();
        let name2 = name.clone();
        let image2 = image.clone();

        tokio::spawn(async move {
            let db = db_lock.lock().unwrap();
            let mut stmt = db
                .prepare("INSERT OR IGNORE INTO items (id, name, image) VALUES (?, ?, ?)")
                .unwrap();
            let res = stmt.execute([&id.to_string(), &name.to_string(), &image.to_string()]);

            if res.is_err() {
                println!("Error inserting item: {:?} | {}", res.unwrap_err(), name);
            }
        });

        Item {
            id: id2,
            name: name2,
            image: image2,
        }
    }

    pub async fn delete(item_id: String, db_lock: Arc<Mutex<Connection>>) {
        let db = db_lock.lock().unwrap();

        let mut stmt = db.prepare("DELETE FROM items WHERE id = ?").unwrap();
        stmt.execute([&item_id]).unwrap();
    }
}
