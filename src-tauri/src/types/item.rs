use rusqlite::{Connection, ToSql};
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use std::sync::Mutex;

use super::Error;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Item {
    pub id: String,
    pub name: String,
    pub image: String,
}

impl Item {
    pub async fn all(db_lock: Arc<Mutex<Connection>>) -> Vec<Self> {
        let db = db_lock.lock().unwrap();

        let prep = db.prepare("SELECT id, name, image FROM items");
        if prep.is_err() {
            println!("Error preparing statement: {:?}", prep.unwrap_err());
            return vec![];
        }
        let mut p = prep.unwrap();
        let query = p.query_map([], |row| {
            Ok(Item {
                id: row.get(0)?,
                name: row.get(1)?,
                image: row.get(2)?,
            })
        });
        if query.is_err() {
            println!("Error querying items");
        }
        let all: Vec<Self> = query.unwrap().map(|x| x.unwrap()).collect();
        all
    }

    pub fn bulk_create(items: Vec<Item>, db_lock: Arc<Mutex<Connection>>) {
        //tokio::spawn(async move {
        let db = db_lock.lock().unwrap();
        let mut text = String::new();
        for _ in 0..items.len() {
            text += "(?, ?, ?), ";
        }

        let prep = db.prepare(
            format!(
                "INSERT OR IGNORE INTO items (id, name, image) VALUES {}",
                text.trim_end_matches(", ")
            )
            .to_string()
            .as_str(),
        );
        if prep.is_err() {
            println!("Error preparing statement: {:?}", prep.unwrap_err());
            return;
        }
        let mut vars: Vec<Box<dyn ToSql>> = Vec::new();

        for item in items.clone() {
            let mut items: Vec<Box<dyn ToSql>> = vec![
                Box::new(item.id),
                Box::new(item.name.to_string()),
                Box::new(item.image.to_string()),
            ];
            vars.append(&mut items);
        }
        let mut stmt = prep.unwrap();
        let x = vars.iter().map(|x| &**x as &dyn ToSql).collect::<Vec<_>>();
        let res = stmt.execute(&*x);
        if res.is_err() {
            println!("Error inserting item: {:?}", res.unwrap_err());
            return;
        }
        //});
        println!("Created {} items", items.len());
    }

    #[allow(clippy::too_many_arguments)]
    pub fn collect(
        item_id: String,
        fir: bool,
        dogtag_level: i64,
        min_durability: i64,
        max_durability: i64,
        quantity: i64,
        db_lock: Arc<Mutex<Connection>>,
        wipe: i64,
    ) -> Result<i64, Error> {
        let db = db_lock.lock().unwrap();

        let res =
            db.prepare("INSERT OR IGNORE INTO found_items (quantity, item, wipe, found_in_raid, dogtag_level, min_durability, max_durability) VALUES (?, ?, ?, ?, ?, ?, ?)");
        if res.is_err() {
            println!("Error preparing statement: {:?}", res.unwrap_err());
            return Err(Error::Other {
                message: "Error Preparing Statement".to_string(),
            });
        }

        let fir_text = if fir { "1" } else { "0" };

        let mut stmt = res.unwrap();
        let exec = stmt.execute([
            &quantity.to_string(),
            &item_id,
            &wipe.to_string(),
            &fir_text.to_string(),
            &dogtag_level.to_string(),
            &min_durability.to_string(),
            &max_durability.to_string(),
        ]);
        if exec.is_err() {
            println!("Error collecting item: {:?}", exec.unwrap_err());
            return Err(Error::Other {
                message: "Error Collecting Item".to_string(),
            });
        }

        if exec.unwrap() == 0 {
            let res = db.prepare("UPDATE found_items SET quantity = quantity + ? WHERE item = ? AND found_in_raid = ? AND wipe = ? AND dogtag_level = ? AND min_durability = ? AND max_durability = ?");
            if res.is_err() {
                println!("Error preparing statement: {:?}", res.unwrap_err());
                return Err(Error::Other {
                    message: "Error Preparing Statement".to_string(),
                });
            }
            let mut stmt = res.unwrap();
            let exec = stmt.execute([
                &quantity.to_string(),
                &item_id,
                &fir_text.to_string(),
                &wipe.to_string(),
                &dogtag_level.to_string(),
                &min_durability.to_string(),
                &max_durability.to_string(),
            ]);
            if exec.is_err() {
                println!("Error collecting item: {:?}", exec.unwrap_err());
            }
        }

        let res = db.prepare("SELECT quantity FROM found_items WHERE item = ?");
        if res.is_err() {
            println!("Error preparing statement: {:?}", res.unwrap_err());
            return Err(Error::Other {
                message: "Error Preparing Statement".to_string(),
            });
        }
        let mut stmt = res.unwrap();
        let query = stmt.query_map([&item_id], |row| Ok(row.get::<usize, i64>(0).unwrap()));
        if query.is_err() {
            return Err(Error::Other {
                message: "Error Querying Item".to_string(),
            });
        }
        let mut quantity: i64 = 0;
        for q in query.unwrap() {
            quantity = q.unwrap();
        }
        Ok(quantity)
    }

    #[allow(clippy::too_many_arguments)]
    pub fn uncollect(
        item_id: String,
        fir: bool,
        dogtag_level: i64,
        min_durability: i64,
        max_durability: i64,
        quantity: i64,
        db_lock: Arc<Mutex<Connection>>,
        wipe: i64,
    ) -> Result<i64, Error> {
        let db = db_lock.lock().unwrap();
        println!("Uncollecting {} from {} x{}", item_id, wipe, quantity);

        let mut fnd_item_stmt = db.prepare(
            "SELECT quantity FROM found_items WHERE item = ? AND found_in_raid = ? AND wipe = ? AND dogtag_level = ? AND min_durability = ? AND max_durability = ?",
        )?;

        let fir_text = if fir { "1" } else { "0" };

        let mut quants = fnd_item_stmt.query([
            &item_id,
            &fir_text.to_string(),
            &wipe.to_string(),
            &dogtag_level.to_string(),
            &min_durability.to_string(),
            &max_durability.to_string(),
        ])?;
        let row_opt = quants.next()?;
        if row_opt.is_none() {
            return Err(Error::Other {
                message: "No Items Collected".to_string(),
            });
        }
        let fnd_quantity = row_opt.unwrap().get::<usize, i64>(0)?;

        if fnd_quantity < quantity {
            return Err(Error::Other {
                message: "Not Enough Collected".to_string(),
            });
        }

        let res = db.prepare("UPDATE found_items SET quantity = quantity - ? WHERE item = ? AND quantity > 0 AND found_in_raid = ? AND wipe = ? AND dogtag_level = ? and min_durability = ? AND max_durability = ?");
        if res.is_err() {
            println!("Error preparing statement: {:?}", res.unwrap_err());
            return Err(Error::Other {
                message: "Error Preparing Statement".to_string(),
            });
        }

        let fir_text = if fir { "1" } else { "0" };

        let mut stmt = res.unwrap();
        let exec = stmt.execute([
            &quantity.to_string(),
            &item_id,
            &fir_text.to_string(),
            &wipe.to_string(),
            &dogtag_level.to_string(),
            &min_durability.to_string(),
            &max_durability.to_string(),
        ]);
        if exec.is_err() {
            println!("Error removing item: {:?}", exec.unwrap_err());
        }

        let res = db.prepare(
            "SELECT quantity FROM found_items WHERE item = ? AND found_in_raid = ? AND wipe = ?",
        );
        if res.is_err() {
            println!("Error preparing statement: {:?}", res.unwrap_err());
            return Err(Error::Other {
                message: "Error Preparing Statement".to_string(),
            });
        }
        let mut stmt = res.unwrap();
        let query = stmt.query_map(
            [&item_id, &fir_text.to_string(), &wipe.to_string()],
            |row| Ok(row.get::<usize, i64>(0).unwrap()),
        );
        if query.is_err() {
            return Err(Error::Other {
                message: "Error Querying Item".to_string(),
            });
        }
        let mut quantity: i64 = 0;
        for q in query.unwrap() {
            quantity = q.unwrap();
        }
        Ok(quantity)
    }

    pub fn get_quantity(
        item_id: String,
        fir: bool,
        dogtag_level: i64,
        min_durability: i64,
        max_durability: i64,
        db_lock: Arc<Mutex<Connection>>,
        wipe: i64,
    ) -> Result<i64, Error> {
        let db = db_lock.lock().unwrap();

        let res = db.prepare(
            "SELECT quantity FROM found_items WHERE item = ? AND found_in_raid = ? AND wipe = ? AND dogtag_level = ? AND min_durability = ? AND max_durability = ?",
        );
        if res.is_err() {
            println!("Error preparing statement: {:?}", res.unwrap_err());
            return Err(Error::Other {
                message: "Error Preparing Statement".to_string(),
            });
        }
        let mut stmt = res.unwrap();

        let fir_text = if fir { "1" } else { "0" };

        let query = stmt.query([
            &item_id,
            &fir_text.to_string(),
            &wipe.to_string(),
            &dogtag_level.to_string(),
            &min_durability.to_string(),
            &max_durability.to_string(),
        ]);
        if query.is_err() {
            return Err(Error::Other {
                message: "Error Querying Item".to_string(),
            });
        }
        let mut q = query.unwrap();
        let g = q.next();
        if g.is_err() {
            return Err(Error::Other {
                message: "Error Getting Item".to_string(),
            });
        }
        let opt = g.unwrap();
        if opt.is_none() {
            return Ok(0);
        }

        Ok(opt.unwrap().get(0).unwrap())
    }

    pub async fn get_image(id: String, db: Arc<Mutex<Connection>>) -> Result<String, Error> {
        let db = db.lock().unwrap();

        let res = db.prepare("SELECT image FROM items WHERE id = ?");

        if res.is_err() {
            return Err(Error::Other {
                message: "Error Preparing Statement".to_string(),
            });
        }

        let mut stmt = res.unwrap();

        let query = stmt.query([&id]);

        if query.is_err() {
            return Err(Error::Other {
                message: "Error Querying Item".to_string(),
            });
        }

        let mut q = query.unwrap();

        let g = q.next();

        if g.is_err() {
            return Err(Error::Other {
                message: "Error Getting Item".to_string(),
            });
        }

        let opt = g.unwrap();

        if opt.is_none() {
            return Err(Error::Other {
                message: "No Item Found".to_string(),
            });
        }

        Ok(opt.unwrap().get(0).unwrap())
    }
}
