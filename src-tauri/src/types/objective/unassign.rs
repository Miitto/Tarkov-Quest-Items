use rusqlite::Connection;

use super::Objective;

use std::sync::{Arc, Mutex};

use crate::types::{item::Item, Error};

impl Objective {
    pub fn unassign(
        id: String,
        wipe_id: i64,
        db_lock: Arc<Mutex<Connection>>,
    ) -> Result<Self, Error> {
        let item_id: String;
        let fir: bool;
        let dt_lvl: i64;
        let min_dur: i64;
        let max_dur: i64;
        {
            let db = db_lock.lock().unwrap();

            let mut obj_stmt = db.prepare(
                "SELECT item, found_in_raid, dogtag_level, min_durability, max_durability FROM objectives WHERE id = ?1 AND wipe = ?2 AND collected > 0",
            )?;

            let mut obj_rows = obj_stmt.query([&id, &wipe_id.to_string()])?;

            let obj_opt = obj_rows.next()?;

            if obj_opt.is_none() {
                return Err(Error::Other {
                    message: "No Objective Found".to_string(),
                });
            }

            let obj = obj_opt.unwrap();

            item_id = obj.get::<usize, String>(0)?;
            fir = obj.get::<usize, bool>(1)?;
            dt_lvl = obj.get::<usize, i64>(2)?;
            min_dur = obj.get::<usize, i64>(3)?;
            max_dur = obj.get::<usize, i64>(4)?;
        }

        let collected = Item::collect(
            item_id,
            fir,
            dt_lvl,
            min_dur,
            max_dur,
            1,
            db_lock.clone(),
            wipe_id,
        );

        if collected.is_err() {
            println!("Error uncollecting item: {:?}", collected);
            return Err(Error::Other {
                message: "Error Uncollecting Item".to_string(),
            });
        }

        let db = db_lock.lock().unwrap();

        let assign_stmt_res =
            db.prepare("UPDATE objectives SET collected = collected - 1, completed = collected - 1 >= count WHERE id = ? AND wipe = ?");

        if assign_stmt_res.is_err() {
            println!(
                "Error preparing statement: {:?}",
                assign_stmt_res.unwrap_err()
            );
            return Err(Error::Other {
                message: "Error Preparing Statement".to_string(),
            });
        }

        let assign_res = assign_stmt_res
            .unwrap()
            .execute([&id, &wipe_id.to_string()]);

        if assign_res.is_err() {
            println!("Error assigning item: {:?}", assign_res.unwrap_err());
            return Err(Error::Other {
                message: "Error Assigning Item".to_string(),
            });
        }

        let obj_stmt_res = db.prepare("SELECT id, description, optional, count, collected, found_in_raid, item, task, completed, wipe, dogtag_level, min_durability, max_durability FROM objectives WHERE id = ?1 AND wipe = ?2");
        if obj_stmt_res.is_err() {
            println!("Error preparing statement: {:?}", obj_stmt_res.unwrap_err());
            return Err(Error::Other {
                message: "Error Preparing Statement".to_string(),
            });
        }

        let mut obj_stmt = obj_stmt_res.unwrap();
        let obj_rows_res = obj_stmt.query([id, wipe_id.to_string()]);
        if obj_rows_res.is_err() {
            let err = obj_rows_res.err();
            println!(
                "Error querying objective: {:?}",
                (err.unwrap().sqlite_error().unwrap())
            );
            return Err(Error::Other {
                message: "Error Querying Objective".to_string(),
            });
        }
        let mut obj_rows = obj_rows_res.unwrap();

        let obj_res = obj_rows.next();
        if obj_res.is_err() {
            let err = obj_res.err();
            println!(
                "Error getting objective: {:?}",
                (err.unwrap().sqlite_error().unwrap())
            );
            return Err(Error::Other {
                message: "Error Getting Objective".to_string(),
            });
        }
        let obj_opt = obj_res.unwrap();
        if obj_opt.is_none() {
            return Err(Error::Other {
                message: "No Objective Found".to_string(),
            });
        }

        let obj = obj_opt.unwrap();

        Ok(Objective {
            id: obj.get::<usize, String>(0)?,
            description: obj.get::<usize, String>(1)?,
            optional: obj.get::<usize, bool>(2)?,
            count: obj.get::<usize, i64>(3)?,
            collected: obj.get::<usize, i64>(4)?,
            found_in_raid: obj.get::<usize, bool>(5)?,
            item: obj.get::<usize, Option<String>>(6)?,
            task: obj.get::<usize, String>(7)?,
            completed: obj.get::<usize, bool>(8)?,
            wipe: obj.get::<usize, i64>(9)?,
            dogtag_level: obj.get::<usize, i64>(10)?,
            min_durability: obj.get::<usize, i64>(11)?,
            max_durability: obj.get::<usize, i64>(12)?,
        })
    }

    pub fn unassign_quantity(
        id: String,
        wipe_id: i64,
        quantity: i64,
        db_lock: Arc<Mutex<Connection>>,
    ) -> Result<Objective, Error> {
        let item_id: String;
        let fir: bool;
        let dt_lvl: i64;
        let min_dur: i64;
        let max_dur: i64;
        {
            let db = db_lock.lock().unwrap();

            let mut obj_stmt = db.prepare(
                "SELECT item, found_in_raid, dogtag_level, min_durability, max_durability FROM objectives WHERE id = ?1 AND wipe = ?2 AND collected >= ?3",
            )?;

            let mut obj_rows =
                obj_stmt.query([&id, &wipe_id.to_string(), &quantity.to_string()])?;

            let obj_opt = obj_rows.next()?;

            if obj_opt.is_none() {
                return Err(Error::Other {
                    message: "No Objective Found".to_string(),
                });
            }

            let obj = obj_opt.unwrap();

            item_id = obj.get::<usize, String>(0)?;
            fir = obj.get::<usize, bool>(1)?;
            dt_lvl = obj.get::<usize, i64>(2)?;
            min_dur = obj.get::<usize, i64>(3)?;
            max_dur = obj.get::<usize, i64>(4)?;
        }

        let collected = Item::collect(
            item_id,
            fir,
            dt_lvl,
            min_dur,
            max_dur,
            quantity,
            db_lock.clone(),
            wipe_id,
        );

        if collected.is_err() {
            println!("Error uncollecting item: {:?}", collected);
            return Err(Error::Other {
                message: "Error Uncollecting Item".to_string(),
            });
        }

        let db = db_lock.lock().unwrap();

        let assign_stmt_res =
            db.prepare("UPDATE objectives SET collected = collected - ?1, completed = collected - ?1 >= count WHERE id = ?2 AND wipe = ?3");

        if assign_stmt_res.is_err() {
            println!(
                "Error preparing statement: {:?}",
                assign_stmt_res.unwrap_err()
            );
            return Err(Error::Other {
                message: "Error Preparing Statement".to_string(),
            });
        }

        let assign_res =
            assign_stmt_res
                .unwrap()
                .execute([&quantity.to_string(), &id, &wipe_id.to_string()]);

        if assign_res.is_err() {
            println!("Error assigning item: {:?}", assign_res.unwrap_err());
            return Err(Error::Other {
                message: "Error Assigning Item".to_string(),
            });
        }

        let obj_stmt_res = db.prepare("SELECT id, description, optional, count, collected, found_in_raid, item, task, completed, wipe, dogtag_level, min_durability, max_durability FROM objectives WHERE id = ?1 AND wipe = ?2");
        if obj_stmt_res.is_err() {
            println!("Error preparing statement: {:?}", obj_stmt_res.unwrap_err());
            return Err(Error::Other {
                message: "Error Preparing Statement".to_string(),
            });
        }

        let mut obj_stmt = obj_stmt_res.unwrap();
        let obj_rows_res = obj_stmt.query([id, wipe_id.to_string()]);
        if obj_rows_res.is_err() {
            let err = obj_rows_res.err();
            println!(
                "Error querying objective: {:?}",
                (err.unwrap().sqlite_error().unwrap())
            );
            return Err(Error::Other {
                message: "Error Querying Objective".to_string(),
            });
        }
        let mut obj_rows = obj_rows_res.unwrap();

        let obj_res = obj_rows.next();
        if obj_res.is_err() {
            let err = obj_res.err();
            println!(
                "Error getting objective: {:?}",
                (err.unwrap().sqlite_error().unwrap())
            );
            return Err(Error::Other {
                message: "Error Getting Objective".to_string(),
            });
        }
        let obj_opt = obj_res.unwrap();
        if obj_opt.is_none() {
            return Err(Error::Other {
                message: "No Objective Found".to_string(),
            });
        }

        let obj = obj_opt.unwrap();

        Ok(Objective {
            id: obj.get::<usize, String>(0)?,
            description: obj.get::<usize, String>(1)?,
            optional: obj.get::<usize, bool>(2)?,
            count: obj.get::<usize, i64>(3)?,
            collected: obj.get::<usize, i64>(4)?,
            found_in_raid: obj.get::<usize, bool>(5)?,
            item: obj.get::<usize, Option<String>>(6)?,
            task: obj.get::<usize, String>(7)?,
            completed: obj.get::<usize, bool>(8)?,
            wipe: obj.get::<usize, i64>(9)?,
            dogtag_level: obj.get::<usize, i64>(10)?,
            min_durability: obj.get::<usize, i64>(11)?,
            max_durability: obj.get::<usize, i64>(12)?,
        })
    }
}
