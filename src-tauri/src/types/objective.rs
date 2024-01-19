use rusqlite::{Connection, ToSql};
use std::sync::Arc;
use std::sync::Mutex;

use serde::{Deserialize, Serialize};

use crate::commands::wipe;
use crate::types::Error;

#[derive(Debug, Clone, Serialize, Deserialize)]

/// An objective for a task.
pub struct Objective {
    pub id: String,
    pub description: String,
    pub optional: bool,
    pub count: i64,
    pub found_in_raid: bool,
    #[serde(skip_serializing_if = "Option::is_none", default)]
    pub item: Option<String>,
    pub task: String,
    pub completed: bool,
    pub wipe: i64,
}

/// Parameters for creating an objective.
pub struct ObjectiveParams {
    pub id: String,
    pub description: String,
    pub optional: bool,
    pub count: i64,
    pub found_in_raid: bool,
    pub item: Option<String>,
    pub task_id: String,
    pub completed: bool,
    pub wipe: i64,
    pub db_lock: Arc<Mutex<Connection>>,
}

impl Objective {
    /// Retrieve all objectives from the database.
    ///
    /// # Arguments
    ///
    /// * `wipe_id` - The id of the wipe to get the objectives from.
    /// * `db_lock` - The database connection wrapped in an `Arc<Mutex<Connection>>`.
    ///
    /// # Returns
    ///
    /// A vector of `Objective` instances.
    pub async fn all(wipe_id: i64, db_lock: Arc<Mutex<Connection>>) -> Vec<Self> {
        let db = db_lock.lock().unwrap();

        let prep = db.prepare(
            "SELECT id, description, optional, count, found_in_raid, item, task, completed, wipe FROM objectives WHERE wipe = ?",
        );
        if prep.is_err() {
            println!("Error preparing statement: {:?}", prep.unwrap_err());
            return vec![];
        }
        let mut p = prep.unwrap();

        let query = p.query_map([wipe_id], |row| {
            Ok(Objective {
                id: row.get(0)?,
                description: row.get(1)?,
                optional: row.get(2)?,
                count: row.get(3)?,
                found_in_raid: row.get(4)?,
                item: row.get(5)?,
                task: row.get(6)?,
                completed: row.get(7)?,
                wipe: row.get(8)?,
            })
        });
        if query.is_err() {
            println!("Error querying objectives");
        }
        let all: Vec<Self> = query.unwrap().map(|x| x.unwrap()).collect();
        all
    }

    /// Retrieve objectives associated with a specific task from the database.
    ///
    /// # Arguments
    ///
    /// * `id` - The id of the task.
    /// * `wipe_id` - The id of the wipe to get the objectives from.
    /// * `db_lock` - The database connection wrapped in an `Arc<Mutex<Connection>>`.
    ///
    /// # Returns
    ///
    /// A vector of `Objective` instances.
    pub async fn task_get(id: String, wipe_id: i64, db_lock: Arc<Mutex<Connection>>) -> Vec<Self> {
        let db = db_lock.lock().unwrap();

        let prep = db.prepare(
            "SELECT id, description, optional, count, found_in_raid, item, task, completed, wipe FROM objectives WHERE task = ? AND wipe = ?",
        );
        if prep.is_err() {
            println!("Error preparing statement: {:?}", prep.unwrap_err());
            return vec![];
        }
        let mut p = prep.unwrap();

        let query = p.query_map([id, wipe_id.to_string()], |row| {
            Ok(Objective {
                id: row.get(0)?,
                description: row.get(1)?,
                optional: row.get(2)?,
                count: row.get(3)?,
                found_in_raid: row.get(4)?,
                item: row.get(5)?,
                task: row.get(6)?,
                completed: row.get(7)?,
                wipe: row.get(8)?,
            })
        });
        if query.is_err() {
            println!("Error querying objectives");
        }
        let all: Vec<Self> = query.unwrap().map(|x| x.unwrap()).collect();
        all
    }

    /// Get an objective by id
    ///
    /// # Arguments
    ///
    /// * `id` - The id of the objective to get
    /// * `wipe` - The id of the wipe to get the objective from
    /// * `db_lock` - The database connection
    ///
    /// # Returns
    ///
    /// * `Option<Self>` - The objective if it exists
    ///
    /// # Examples
    ///
    /// ```
    /// let obj = Objective::get("test".to_string(), 1, db.clone()).await;
    ///
    /// assert!(obj.is_none());
    /// ```
    pub async fn get(id: String, wipe: i64, db_lock: Arc<Mutex<Connection>>) -> Option<Self> {
        let db = db_lock.lock().unwrap();

        let prep = db.prepare(
            "SELECT id, description, optional, count, found_in_raid, item, task, completed, wipe FROM objectives WHERE id = ? AND wipe = ?",
        );

        if prep.is_err() {
            println!("Error preparing statement: {:?}", prep.unwrap_err());
            return None;
        }

        let mut p = prep.unwrap();

        let query = p.query([id, wipe.to_string()]);
        if query.is_err() {
            println!("Error querying objectives");
        }
        let mut q = query.unwrap();
        let row_res = q.next();
        if row_res.is_err() {
            println!("Error getting row: {:?}", row_res.unwrap_err());
            return None;
        }
        let row_opt = row_res.unwrap();
        if row_opt.is_none() {
            return None;
        }
        let row = row_opt.unwrap();
        let obj = Objective {
            id: row.get(0).unwrap(),
            description: row.get(1).unwrap(),
            optional: row.get(2).unwrap(),
            count: row.get(3).unwrap(),
            found_in_raid: row.get(4).unwrap(),
            item: row.get(5).unwrap(),
            task: row.get(6).unwrap(),
            completed: row.get(7).unwrap(),
            wipe: row.get(8).unwrap(),
        };
        return Some(obj);
    }

    pub fn bulk_create(objectives: Vec<Objective>, db_lock: Arc<Mutex<Connection>>) {
        //tokio::spawn(async move {
        let db = db_lock.lock().unwrap();

        let check_item_prep = db.prepare("SELECT id, name FROM items WHERE id = ?");
        if check_item_prep.is_err() {
            println!(
                "Error preparing statement: {:?}",
                check_item_prep.unwrap_err()
            );
            return;
        }
        let mut check_item_stmt = check_item_prep.unwrap();
        for objective in objectives.clone() {
            if let Some(item) = objective.item {
                let check_res =
                    check_item_stmt.query_row([&item], |row| Ok((row.get(0)?, row.get(1)?)));
                if check_res.is_err() {
                    println!("Error checking item: {:?}", check_res.unwrap_err());
                    return;
                }
                let (id, name): (String, String) = check_res.unwrap();
                if id != item {
                    println!(
                        "Item {} does not exist in the database. Please add it first.",
                        name
                    );
                    return;
                }
            }
        }

        println!("All Items exist in the database");
        let check_task_prep = db.prepare("SELECT id, name FROM tasks WHERE id = ?");
        if check_task_prep.is_err() {
            println!(
                "Error preparing statement: {:?}",
                check_task_prep.unwrap_err()
            );
            return;
        }
        let mut check_task_stmt = check_task_prep.unwrap();
        for objective in objectives.clone() {
            let check_res =
                check_task_stmt.query_row([&objective.task], |row| Ok((row.get(0)?, row.get(1)?)));
            if check_res.is_err() {
                println!(
                    "Error checking task: {:?} | {}",
                    check_res.unwrap_err(),
                    &objective.task
                );
                return;
            }
            let (id, name): (String, String) = check_res.unwrap();
            if id != objective.task {
                println!(
                    "Task {} does not exist in the database. Please add it first.",
                    name
                );
                return;
            }
        }

        let mut text = String::new();
        for _ in 0..objectives.len() {
            text += "(?, ?, ?, ?, ?, ?, ?, ?, ?),";
        }
        let prep = db.prepare(
            format!(
                "INSERT OR IGNORE INTO objectives (id, description, optional, count, found_in_raid, item, task, completed, wipe) VALUES {}",
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
            let completed_text = if objective.completed { "1" } else { "0" };

            if objective.wipe != 1 {
                println!(
                    "Wipe {} does not exist in the database. Please add it first.",
                    objective.wipe
                );
            }

            let mut items: Vec<Box<dyn ToSql>> = vec![
                Box::new(objective.id),
                Box::new(objective.description),
                Box::new(optional_text),
                Box::new(objective.count.to_string()),
                Box::new(fir_text),
                Box::new(objective.item),
                Box::new(objective.task),
                Box::new(completed_text),
                Box::new(objective.wipe.to_string()),
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

    /// Update an objective in the database.
    ///
    /// # Arguments
    ///
    /// * `id` - The id of the objective to update.
    /// * `wipe` - The id of the wipe to update the objective in.
    /// * `description` - The new description of the objective (optional).
    /// * `optional` - The new optional status of the objective (optional).
    /// * `count` - The new count of the objective (optional).
    /// * `found_in_raid` - The new found_in_raid status of the objective (optional).
    /// * `item` - The new item of the objective (optional).
    /// * `task` - The new task of the objective (optional).
    /// * `completed` - The new completed status of the objective (optional).
    /// * `db_lock` - The database connection wrapped in an `Arc<Mutex<Connection>>`.
    ///
    /// # Returns
    ///
    /// A `Result` containing the updated `Objective` if successful, or an `Error` if an error occurred.
    pub async fn update(
        id: String,
        wipe: i64,
        description: Option<String>,
        optional: Option<bool>,
        count: Option<i64>,
        found_in_raid: Option<bool>,
        item: Option<String>,
        task: Option<String>,
        completed: Option<bool>,
        db_lock: Arc<Mutex<Connection>>,
    ) -> Result<Self, Error> {
        let db = db_lock.lock().unwrap();

        let mut text = String::new();
        let mut vars: Vec<Box<dyn ToSql>> = Vec::new();

        if let Some(value) = description {
            text += "description = ?, ";
            vars.push(Box::new(value));
        }
        if let Some(value) = optional {
            text += "optional = ?, ";
            vars.push(Box::new(value));
        }
        if let Some(value) = count {
            text += "count = ?, ";
            vars.push(Box::new(value));
        }
        if let Some(value) = found_in_raid {
            text += "found_in_raid = ?, ";
            vars.push(Box::new(value));
        }
        if let Some(value) = item {
            text += "item = ?, ";
            vars.push(Box::new(value));
        }
        if let Some(value) = task {
            text += "task = ?, ";
            vars.push(Box::new(value));
        }
        if let Some(value) = completed {
            text += "completed = ?, ";
            vars.push(Box::new(value));
        }

        let prep = db.prepare(
            format!(
                "UPDATE objectives SET {} WHERE id = ? AND wipe = ?",
                text.trim_end_matches(", ")
            )
            .to_string()
            .as_str(),
        );
        if prep.is_err() {
            println!("Error preparing statement: {:?}", prep.unwrap_err());
            return Err(Error::Other {
                message: "Error preparing statement".to_string(),
            });
        }
        let mut stmt = prep.unwrap();
        vars.push(Box::new(id.clone()));
        vars.push(Box::new(wipe));
        let x = vars.iter().map(|x| &**x).collect::<Vec<_>>();
        let res = stmt.execute(&*x);
        if res.is_err() {
            println!("Error updating objective: {:?}", res.unwrap_err());
            return Err(Error::Other {
                message: "Error updating objective".to_string(),
            });
        }

        let prep = db.prepare(
            "SELECT id, description, optional, count, found_in_raid, item, task, completed, wipe FROM objectives WHERE id = ?",
        );
        if prep.is_err() {
            println!("Error preparing statement: {:?}", prep.unwrap_err());
            return Err(Error::Other {
                message: "Error preparing statement".to_string(),
            });
        }
        let mut p = prep.unwrap();

        let query = p.query([id]);
        if query.is_err() {
            println!("Error querying objectives");
        }
        let mut q = query.unwrap();
        let row_res = q.next();
        if row_res.is_err() {
            println!("Error getting row: {:?}", row_res.unwrap_err());
            return Err(Error::Other {
                message: "Error getting row".to_string(),
            });
        }
        let row_opt = row_res.unwrap();
        if row_opt.is_none() {
            return Err(Error::Other {
                message: "Error getting row".to_string(),
            });
        }
        let row = row_opt.unwrap();
        let obj = Objective {
            id: row.get(0).unwrap(),
            description: row.get(1).unwrap(),
            optional: row.get(2).unwrap(),
            count: row.get(3).unwrap(),
            found_in_raid: row.get(4).unwrap(),
            item: row.get(5).unwrap(),
            task: row.get(6).unwrap(),
            completed: row.get(7).unwrap(),
            wipe: row.get(8).unwrap(),
        };
        Ok(obj)
    }
}
