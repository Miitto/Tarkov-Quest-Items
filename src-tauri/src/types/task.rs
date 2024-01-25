use crate::types::Error;
use crate::types::Objective;
use crate::types::UpdateObjective;
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
    pub async fn all(wipe_id: i64, db_lock: Arc<Mutex<Connection>>) -> Vec<Self> {
        let db = db_lock.lock().unwrap();

        let prep =
            db.prepare("SELECT id, name, vendor, min_level, wipe, image FROM tasks WHERE wipe = ?");
        if prep.is_err() {
            println!("Error preparing statement: {:?}", prep.unwrap_err());
            return vec![];
        }
        let mut p = prep.unwrap();
        let query = p.query_map([wipe_id], |row| {
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

    pub async fn get(
        task_id: String,
        wipe_id: i64,
        db_lock: Arc<Mutex<Connection>>,
    ) -> Result<Self, Error> {
        let db = db_lock.lock().unwrap();

        let mut stmt = db.prepare(
            "SELECT id, name, vendor, min_level, wipe, image FROM tasks WHERE id = ? AND wipe = ?",
        )?;
        let mut rows = stmt.query([&task_id, &wipe_id.to_string()])?;

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
        wipe: i64,
        name: Option<String>,
        vendor: Option<String>,
        min_level: Option<i64>,
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
        if image.is_some() {
            text += "image = ?, ";
        }
        text = text.trim_end_matches(", ").to_string();
        text += " WHERE id = ? AND wipe = ?";
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
        if image.is_some() {
            vars.push(Box::new(image.unwrap()));
        }
        let id2 = id.clone();
        vars.push(Box::new(id));
        vars.push(Box::new(wipe));

        let params = vars.iter().map(|x| &**x).collect::<Vec<_>>();

        let res = stmt.execute(&*params);
        if res.is_err() {
            println!("Error updating task: {:?}", res.unwrap_err());
            return Err(Error::NotFound {
                message: "Task not found".to_string(),
            });
        }
        let mut stmt = db.prepare(
            "SELECT id, name, vendor, min_level, wipe, image FROM tasks WHERE id = ? AND wipe = ?",
        )?;
        let mut rows = stmt.query([&id2, &wipe.to_string()])?;

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

    pub async fn complete(
        id: String,
        wipe_id: i64,
        db_lock: Arc<Mutex<Connection>>,
    ) -> Result<(), Error> {
        #[derive(Debug, Clone, Serialize, Deserialize)]
        struct ObjectivePart {
            id: String,
            count: i64,
            collected: i64,
            item: Option<String>,
        }

        let rows: Vec<ObjectivePart>;

        {
            let db = db_lock.lock().unwrap();
            let mut stmt = db
                .prepare(
                    "SELECT id, count, collected, item FROM objectives WHERE task = ? AND wipe = ?",
                )
                .unwrap();
            rows = stmt
                .query_map([&id, &wipe_id.to_string()], |r| {
                    Ok(ObjectivePart {
                        id: r.get(0).unwrap(),
                        count: r.get(1).unwrap(),
                        collected: r.get(2).unwrap(),
                        item: r.get(3).unwrap(),
                    })
                })
                .unwrap()
                .map(|x| x.unwrap())
                .collect();
        }

        println!("Rows: {:?}", rows);

        for row in rows {
            if row.item.is_none() {
                let res = Objective::update(
                    UpdateObjective {
                        id: row.id,
                        wipe: wipe_id,
                        completed: Some(true),
                        ..Default::default()
                    },
                    db_lock.clone(),
                );
                if res.is_err() {
                    println!("Error completing objective: {:?}", res.unwrap_err()); // TODO ask if to force complete, or just return error
                    return Err(Error::Other {
                        message: "Cannot Complete Objective".to_string(),
                    });
                }
                continue;
            }
            let res = Objective::assign_quantity(
                row.id,
                wipe_id,
                row.count - row.collected,
                db_lock.clone(),
            );

            if res.is_err() {
                println!("Error assigning quantity: {:?}", res.unwrap_err()); // TODO ask if to force complete, or just return error
                return Err(Error::Other {
                    message: "Cannot Complete Objective".to_string(),
                });
            }
        }

        Ok(())
    }
}
