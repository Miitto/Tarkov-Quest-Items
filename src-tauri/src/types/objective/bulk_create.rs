use super::Objective;

use std::sync::Arc;

use std::sync::Mutex;

use rusqlite::Connection;

use rusqlite::ToSql;

impl Objective {
    pub fn bulk_create(objectives: Vec<Objective>, db_lock: Arc<Mutex<Connection>>) {
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
        println!("Created {} objectives", objectives.len());
    }
}
