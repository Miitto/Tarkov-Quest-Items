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
    pub image: String,
}

impl Task {
    pub async fn all(db_lock: Arc<Mutex<Connection>>) -> Vec<Self> {
        let db = db_lock.lock().unwrap();

        let prep = db.prepare("SELECT id, name, vendor, min_level, wipe, image FROM tasks");
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
                image: row.get(5)?,
            })
        });
        if query.is_err() {
            println!("Error querying tasks");
        }
        let all: Vec<Self> = query.unwrap().map(|x| x.unwrap()).collect();
        all
    }

    pub async fn get(task_id: String, db_lock: Arc<Mutex<Connection>>) -> Result<Self, Error> {
        let db = db_lock.lock().unwrap();

        let mut stmt =
            db.prepare("SELECT id, name, vendor, min_level, wipe, image FROM tasks WHERE id = ?")?;
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
            image: row.get(5).unwrap(),
        })
    }

    pub fn bulk_create(tasks: Vec<Task>, db_lock: Arc<Mutex<Connection>>) {
        //tokio::spawn(async move {
        let db = db_lock.lock().unwrap();
        let mut text = String::new();
        for _ in 0..tasks.len() {
            text += "(?, ?, ?, ?, ?, ?),";
        }
        let prep = db.prepare(
            format!(
                "INSERT OR IGNORE INTO tasks (id, name, vendor, min_level, wipe, image) VALUES {}",
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
                Box::new(task.image.to_string()),
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

    pub async fn update(
        id: String,
        name: Option<String>,
        vendor: Option<String>,
        min_level: Option<i64>,
        wipe: Option<i64>,
        image: Option<String>,
        db_lock: Arc<Mutex<Connection>>,
    ) -> Result<Self, Error> {
        let db = db_lock.lock().unwrap();

        let mut text = String::from("UPDATE tasks SET ");
        if name.is_some() {
            text += "name = ?, ";
        }
        if vendor.is_some() {
            text += "vendor = ?, ";
        }
        if min_level.is_some() {
            text += "min_level = ?, ";
        }
        if wipe.is_some() {
            text += "wipe = ?, ";
        }
        if image.is_some() {
            text += "image = ?, ";
        }
        text = text.trim_end_matches(", ").to_string();
        text += " WHERE id = ?";
        let mut stmt = db.prepare(text.as_str()).unwrap();
        let mut vars: Vec<Box<dyn ToSql>> = Vec::new();
        if name.is_some() {
            vars.push(Box::new(name.unwrap()));
        }
        if vendor.is_some() {
            vars.push(Box::new(vendor.unwrap()));
        }
        if min_level.is_some() {
            vars.push(Box::new(min_level.unwrap()));
        }
        if wipe.is_some() {
            vars.push(Box::new(wipe.unwrap()));
        }
        if image.is_some() {
            vars.push(Box::new(image.unwrap()));
        }
        let id2 = id.clone();
        vars.push(Box::new(id));

        let params = vars.iter().map(|x| &**x).collect::<Vec<_>>();

        let res = stmt.execute(&*params);
        if res.is_err() {
            println!("Error updating task: {:?}", res.unwrap_err());
            return Err(Error::NotFound {
                message: "Task not found".to_string(),
            });
        }
        let mut stmt =
            db.prepare("SELECT id, name, vendor, min_level, wipe, image FROM tasks WHERE id = ?")?;
        let mut rows = stmt.query([&id2])?;

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
            image: row.get(5).unwrap(),
        })
    }
}
