use crate::types::Error;
use rusqlite::{Connection, ToSql};
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use std::sync::Mutex;
#[derive(Debug, Clone, Serialize, Deserialize)]

pub struct Task {
    pub id: String,
    pub name: String,
    pub vendor: String,
    pub min_level: i64,
    pub wipe: i64,
}

impl Task {
    pub async fn all(db_lock: Arc<Mutex<Connection>>) -> Vec<Self> {
        let db = db_lock.lock().unwrap();

        let prep = db.prepare("SELECT id, name, vendor, min_level, wipe FROM tasks");
        if prep.is_err() {
            println!("Error preparing statement: {:?}", prep.unwrap_err());
            return vec![];
        }
        let mut p = prep.unwrap();
        let query = p.query_map([], |row| {
            Ok(Task {
                id: row.get(0)?,
                name: row.get(1)?,
                vendor: row.get(2)?,
                min_level: row.get(3)?,
                wipe: row.get(4)?,
            })
        });
        if query.is_err() {
            println!("Error querying tasks");
        }
        let mut all: Vec<Self> = query.unwrap().map(|x| x.unwrap()).collect();
        all.reverse();
        all
    }

    pub async fn get(task_id: String, db_lock: Arc<Mutex<Connection>>) -> Result<Self, Error> {
        let db = db_lock.lock().unwrap();

        let mut stmt =
            db.prepare("SELECT id, name, vendor, min_level, wipe FROM tasks WHERE id = ?")?;
        let mut rows = stmt.query([&task_id])?;

        let row_opt = rows.next()?;
        if row_opt.is_none() {
            return Err(Error::NotFound {
                message: "Task not found".to_string(),
            });
        }
        let row = row_opt.unwrap();

        Ok(Task {
            id: row.get(0).unwrap(),
            name: row.get(1).unwrap(),
            vendor: row.get(2).unwrap(),
            min_level: row.get(3).unwrap(),
            wipe: row.get(4).unwrap(),
        })
    }

    pub fn create(
        id: String,
        name: String,
        vendor: String,
        min_level: i64,
        wipe_id: i64,
        db_lock: Arc<Mutex<Connection>>,
    ) -> Self {
        let id2 = id.clone();
        let name2 = name.clone();
        let vendor2 = vendor.clone();

        tokio::spawn(async move {
            let db = db_lock.lock().unwrap();
            let prep = db
            .prepare(
                "INSERT OR IGNORE INTO tasks (id, name, vendor, min_level, wipe) VALUES (?, ?, ?, ?, ?)",
            );
            if prep.is_err() {
                println!("Error preparing statement: {:?}", prep.unwrap_err());
                return;
            }
            let mut stmt = prep.unwrap();
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

    pub fn bulk_create(tasks: Vec<Task>, db_lock: Arc<Mutex<Connection>>) {
        //tokio::spawn(async move {
        let db = db_lock.lock().unwrap();
        let mut text = String::new();
        for _ in 0..tasks.len() {
            text += "(?, ?, ?, ?, ?),";
        }
        let prep = db.prepare(
            format!(
                "INSERT OR IGNORE INTO tasks (id, name, vendor, min_level, wipe) VALUES {}",
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

        for task in tasks.clone() {
            let mut items: Vec<Box<dyn ToSql>> = vec![
                Box::new(task.id),
                Box::new(task.name.to_string()),
                Box::new(task.vendor.to_string()),
                Box::new(task.min_level.to_string()),
                Box::new(task.wipe.to_string()),
            ];
            vars.append(&mut items);
        }
        let mut stmt = prep.unwrap();
        let x = vars.iter().map(|x| &**x).collect::<Vec<_>>();
        let res = stmt.execute(&*x);
        if res.is_err() {
            println!("Error inserting task: {:?}", res.unwrap_err());
            return;
        }
        //});
        println!("Created {} tasks", tasks.len());
    }

    pub fn delete(task_id: String, db_lock: Arc<Mutex<Connection>>) {
        tokio::spawn(async move {
            let db = db_lock.lock().unwrap();

            let prep = db.prepare("DELETE FROM tasks WHERE id = ?");
            if prep.is_err() {
                println!("Error preparing statement: {:?}", prep.unwrap_err());
                return;
            }
            let mut stmt = prep.unwrap();
            let exec = stmt.execute([&task_id]);
            if exec.is_err() {
                println!("Error deleting task: {:?}", exec.unwrap_err());
            }
        });
    }
}
