use std::sync::Arc;

use std::sync::Mutex;

use rusqlite::Connection;

use super::Objective;

impl Objective {
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
                "SELECT id, description, optional, count, found_in_raid, item, task, completed, wipe, collected, dogtag_level, min_durability, max_durability FROM objectives WHERE task = ? AND wipe = ?",
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
                collected: row.get(9)?,
                dogtag_level: row.get(10)?,
                min_durability: row.get(11)?,
                max_durability: row.get(12)?,
            })
        });
        if query.is_err() {
            println!("Error querying objectives");
        }
        let all: Vec<Self> = query.unwrap().map(|x| x.unwrap()).collect();
        all
    }
}
