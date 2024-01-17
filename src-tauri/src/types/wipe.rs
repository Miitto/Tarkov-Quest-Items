use crate::getDb;
use rusqlite::Connection;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Wipe {
    pub id: i64,
    pub name: String,
}

impl Wipe {
    pub fn all() -> Vec<Self> {
        let db = getDb!();

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

    pub fn create(name: String) -> Self {
        let db = getDb!();

        let mut stmt = db.prepare("INSERT INTO wipes (name) VALUES (?)").unwrap();
        stmt.execute([&name]).unwrap();

        let id = db.last_insert_rowid();
        Wipe { id, name }
    }

    pub fn delete(wipe_id: i64) {
        let db = getDb!();

        let mut stmt = db.prepare("DELETE FROM wipes WHERE id = ?").unwrap();
        stmt.execute([&wipe_id]).unwrap();
    }
}
