use std::sync::Arc;

use std::sync::Mutex;

use rusqlite::Connection;

use crate::types::Error;

use rusqlite::ToSql;

use super::Objective;

pub struct UpdateObjective {
    pub id: String,
    pub wipe: i64,
    pub description: Option<String>,
    pub optional: Option<bool>,
    pub count: Option<i64>,
    pub collected: Option<i64>,
    pub found_in_raid: Option<bool>,
    pub item: Option<String>,
    pub task: Option<String>,
    pub completed: Option<bool>,
    pub dogtag_level: Option<i64>,
    pub min_durability: Option<i64>,
    pub max_durability: Option<i64>,
}

impl Default for UpdateObjective {
    fn default() -> Self {
        Self {
            id: "".to_string(),
            wipe: 0,
            description: None,
            optional: None,
            count: None,
            collected: None,
            found_in_raid: None,
            item: None,
            task: None,
            completed: None,
            dogtag_level: None,
            min_durability: None,
            max_durability: None,
        }
    }
}

impl Objective {
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
    pub fn update(obj: UpdateObjective, db_lock: Arc<Mutex<Connection>>) -> Result<Self, Error> {
        let UpdateObjective {
            id,
            wipe,
            description,
            optional,
            count,
            collected,
            found_in_raid,
            item,
            task,
            completed,
            dogtag_level,
            min_durability,
            max_durability,
        } = obj;
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
        if let Some(value) = collected {
            text += "collected = ?, ";
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
        if let Some(value) = dogtag_level {
            text += "dogtag_level = ?, ";
            vars.push(Box::new(value));
        }
        if let Some(value) = min_durability {
            text += "min_durability = ?, ";
            vars.push(Box::new(value));
        }
        if let Some(value) = max_durability {
            text += "max_durability = ?, ";
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
                "SELECT id, description, optional, count, found_in_raid, item, task, completed, wipe, collected, dogtag_level, min_durability, max_durability FROM objectives WHERE id = ? AND wipe = ?",
            );
        if prep.is_err() {
            println!("Error preparing statement: {:?}", prep.unwrap_err());
            return Err(Error::Other {
                message: "Error preparing statement".to_string(),
            });
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
            collected: row.get(9).unwrap(),
            dogtag_level: row.get(10).unwrap(),
            min_durability: row.get(11).unwrap(),
            max_durability: row.get(12).unwrap(),
        };
        Ok(obj)
    }
}
