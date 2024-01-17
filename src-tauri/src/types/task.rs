use crate::getDb;
use rusqlite::Connection;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]

pub struct Task {
    pub id: String,
    pub name: String,
    pub vendor: String,
    pub min_level: i64,
    pub wipe: i64,
}

impl Task {
    pub fn all() -> Vec<Self> {
        let db = getDb!();

        let mut all: Vec<Self> = db
            .prepare("SELECT id, name, vendor, min_level, wipe FROM tasks")
            .unwrap()
            .query_map([], |row| {
                Ok(Task {
                    id: row.get(0)?,
                    name: row.get(1)?,
                    vendor: row.get(2)?,
                    min_level: row.get(3)?,
                    wipe: row.get(4)?,
                })
            })
            .unwrap()
            .map(|x| x.unwrap())
            .collect();
        all.reverse();
        all
    }

    pub fn create(id: String, name: String, vendor: String, min_level: i64, wipe_id: i64) -> Self {
        let id2 = id.clone();
        let name2 = name.clone();
        let vendor2 = vendor.clone();

        tokio::spawn(async move {
            let db = getDb!();
            let mut stmt = db
                .prepare(
                    "INSERT INTO tasks (id, name, vendor, min_level, wipe) VALUES (?, ?, ?, ?, ?)",
                )
                .unwrap();
            let res = stmt.execute([
                &id.to_string(),
                &name.to_string(),
                &vendor.to_string(),
                &min_level.to_string(),
                &wipe_id.to_string(),
            ]);

            if res.is_err() {
                println!("Error inserting task: {:?} | {}", res.unwrap_err(), name);
            }
        });

        Task {
            id: id2,
            name: name2,
            vendor: vendor2,
            min_level,
            wipe: wipe_id,
        }
    }

    pub fn delete(task_id: String) {
        let db = getDb!();

        let mut stmt = db.prepare("DELETE FROM tasks WHERE id = ?").unwrap();
        stmt.execute([&task_id]).unwrap();
    }
}
