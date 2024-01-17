use crate::getDb;
use rusqlite::Connection;

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]

pub struct Objective {
    pub id: String,
    pub description: String,
    pub optional: bool,
    pub count: i64,
    pub found_in_raid: bool,
    #[serde(skip_serializing_if = "Option::is_none", default)]
    pub item: Option<String>,
    pub task: String,
}

impl Objective {
    pub fn all() -> Vec<Self> {
        let db = getDb!();

        let mut all: Vec<Self> = db
            .prepare("SELECT id, description, optional, count, found_in_raid, item, task FROM objectives")
            .unwrap()
            .query_map([], |row| {
                Ok(Objective {
                    id: row.get(0)?,
                    description: row.get(1)?,
                    optional: row.get(2)?,
                    count: row.get(3)?,
                    found_in_raid: row.get(4)?,
                    item: row.get(5)?,
                    task: row.get(6)?,
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
        description: String,
        optional: bool,
        count: i64,
        found_in_raid: bool,
        item: Option<String>,
        task_id: String,
    ) -> Self {
        let id2 = id.clone();
        let description2 = description.clone();
        let item2 = item.clone();
        let task_id2 = task_id.clone();

        tokio::spawn(async move {
            let db = getDb!();
            let mut stmt = db
                .prepare(
                    "INSERT INTO objectives id, description, optional, count, found_in_raid, item, task) VALUES (?, ?, ?, ?, ?)",
                )
                .unwrap();
            let item_text = if let Some(value) = item {
                value.to_string()
            } else {
                "".to_string()
            };

            let res = stmt.execute([
                &id.to_string(),
                &description.to_string(),
                &optional.to_string(),
                &count.to_string(),
                &found_in_raid.to_string(),
                &item_text,
                &task_id.to_string(),
            ]);

            if res.is_err() {
                println!(
                    "Error inserting objective: {:?} | {}",
                    res.unwrap_err(),
                    description
                );
            }
        });

        Objective {
            id: id2,
            description: description2,
            optional,
            count,
            found_in_raid,
            item: item2,
            task: task_id2,
        }
    }

    pub fn delete(objective_id: String) {
        let db = getDb!();

        let mut stmt = db.prepare("DELETE FROM objectives WHERE id = ?").unwrap();
        stmt.execute([&objective_id]).unwrap();
    }
}
