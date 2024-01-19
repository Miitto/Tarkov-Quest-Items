use rusqlite::Connection;
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use std::sync::Mutex;
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Wipe {
    pub id: i64,
    pub name: String,
}

impl Wipe {
    pub async fn all(db_lock: Arc<Mutex<Connection>>) -> Vec<Self> {
        let db = db_lock.lock().unwrap();
        let mut all: Vec<Self> = db
            .prepare("SELECT id, name FROM wipes")
            .unwrap()
            .query_map([], |row| {
                Ok(Wipe {
                    id: row.get(0)?,
                    name: row.get(1)?,
                })
            })
            .unwrap()
            .map(|x| x.unwrap())
            .collect();
        all.reverse();
        all
    }

    pub async fn create(name: String, db_lock: Arc<Mutex<Connection>>) -> Self {
        let db = db_lock.lock().unwrap();

        let mut stmt = db.prepare("INSERT INTO wipes (name) VALUES (?)").unwrap();
        stmt.execute([&name]).unwrap();

        let id = db.last_insert_rowid();
        Wipe { id, name }
    }

    pub fn delete(wipe_id: i64, db_lock: Arc<Mutex<Connection>>) {
        tokio::spawn(async move {
            let db = db_lock.lock().unwrap();

            let mut stmt = db.prepare("DELETE FROM wipes WHERE id = ?").unwrap();
            stmt.execute([&wipe_id]).unwrap();
        });
    }
}
