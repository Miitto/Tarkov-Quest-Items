use rusqlite::{types::Null, Connection, ToSql};
use std::sync::Arc;
use std::sync::Mutex;

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

pub struct ObjectiveParams {
    pub id: String,
    pub description: String,
    pub optional: bool,
    pub count: i64,
    pub found_in_raid: bool,
    pub item: Option<String>,
    pub task_id: String,
    pub db_lock: Arc<Mutex<Connection>>,
}

impl Objective {
    pub async fn all(db_lock: Arc<Mutex<Connection>>) -> Vec<Self> {
        let db = db_lock.lock().unwrap();

        let prep = db.prepare(
            "SELECT id, description, optional, count, found_in_raid, item, task FROM objectives",
        );
        if prep.is_err() {
            println!("Error preparing statement: {:?}", prep.unwrap_err());
            return vec![];
        }
        let mut p = prep.unwrap();

        let query = p.query_map([], |row| {
            Ok(Objective {
                id: row.get(0)?,
                description: row.get(1)?,
                optional: row.get(2)?,
                count: row.get(3)?,
                found_in_raid: row.get(4)?,
                item: row.get(5)?,
                task: row.get(6)?,
            })
        });
        if query.is_err() {
            println!("Error querying objectives");
        }
        let mut all: Vec<Self> = query.unwrap().map(|x| x.unwrap()).collect();
        all.reverse();
        all
    }

    pub fn create(params: ObjectiveParams) -> Self {
        let ObjectiveParams {
            id,
            description,
            optional,
            count,
            found_in_raid,
            item,
            task_id,
            db_lock,
        } = params;

        let id2 = id.clone();
        let description2 = description.clone();
        let item2 = item.clone();
        let task_id2 = task_id.clone();

        tokio::spawn(async move {
            println!(
                "Creating objective {}, {}, {}, {}, {}, {}, {}",
                id,
                description,
                optional,
                count,
                found_in_raid,
                item.clone().unwrap_or("None".to_string()),
                task_id,
            );
            let db = db_lock.lock().unwrap();
            let prep = db
            .prepare(
                "INSERT INTO objectives (id, description, optional, count, found_in_raid, item, task) VALUES (?, ?, ?, ?, ?, ?, ?)",
            );
            if prep.is_err() {
                println!("Error preparing statement: {:?}", prep.unwrap_err());
                return;
            }
            let mut stmt = prep.unwrap();
            let item_text = if let Some(value) = item {
                value.to_string()
            } else {
                "NULL".to_string()
            };

            let optional_text = if optional { "1" } else { "0" };
            let fir_text = if found_in_raid { "1" } else { "0" };

            let res = stmt.execute([
                &id.to_string(),
                &description.to_string(),
                &optional_text.to_string(),
                &count.to_string(),
                &fir_text.to_string(),
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

    pub fn bulk_create(objectives: Vec<Objective>, db_lock: Arc<Mutex<Connection>>) {
        //tokio::spawn(async move {
        let db = db_lock.lock().unwrap();
        let mut text = String::new();
        for _ in 0..objectives.len() {
            text += "(?, ?, ?, ?, ?, ?, ?),";
        }
        let prep = db.prepare(
            format!(
                "INSERT OR IGNORE INTO objectives (id, description, optional, count, found_in_raid, item, task) VALUES {}",
                text.trim_end_matches(',')
            )
            .to_string()
            .as_str(),
        );
        if prep.is_err() {
            println!("Error preparing statement: {:?}", prep.unwrap_err());
            return;
        }

        let mut vars: Vec<Box<dyn ToSql>> = Vec::new();

        for objective in objectives.clone() {
            let optional_text = if objective.optional { "1" } else { "0" };
            let fir_text = if objective.found_in_raid { "1" } else { "0" };
            let mut items: Vec<Box<dyn ToSql>> = vec![
                Box::new(objective.id),
                Box::new(objective.description),
                Box::new(optional_text),
                Box::new(objective.count.to_string()),
                Box::new(fir_text),
                Box::new(objective.item),
                Box::new(objective.task),
            ];
            vars.append(&mut items);
        }
        let mut stmt = prep.unwrap();
        let x = vars.iter().map(|x| &**x).collect::<Vec<_>>();
        let res = stmt.execute(&*x);
        if res.is_err() {
            println!("Error inserting objective: {:?}", res.unwrap_err());
            return;
        }
        //});
        println!("Created {} objectives", objectives.len());
    }

    pub async fn delete(objective_id: String, db_lock: Arc<Mutex<Connection>>) {
        let db = db_lock.lock().unwrap();

        let prep = db.prepare("DELETE FROM objectives WHERE id = ?");
        if prep.is_err() {
            println!("Error preparing statement: {:?}", prep.unwrap_err());
            return;
        }
        let mut stmt = prep.unwrap();
        let exec = stmt.execute([&objective_id]);
        if exec.is_err() {
            println!("Error deleting objective: {:?}", exec.unwrap_err());
        }
    }
}
