use rusqlite::{Connection, ToSql};
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use std::sync::Mutex;

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
        let mut all: Vec<Self> = query.unwrap().map(|x| x.unwrap()).collect();
        all.reverse();
        all
    }

    pub fn create(
        id: String,
        name: String,
        image: String,
        db_lock: Arc<Mutex<Connection>>,
    ) -> Self {
        let id2 = id.clone();
        let name2 = name.clone();
        let image2 = image.clone();

        tokio::spawn(async move {
            let db = db_lock.lock().unwrap();
            let res = db.prepare("INSERT OR IGNORE INTO items (id, name, image) VALUES (?, ?, ?)");
            if res.is_err() {
                println!("Error preparing statement: {:?}", res.unwrap_err());
                return;
            }
            let mut stmt = res.unwrap();
            let res = stmt.execute([&id.to_string(), &name.to_string(), &image.to_string()]);

            if res.is_err() {
                println!("Error inserting item: {:?} | {}", res.unwrap_err(), name);
            }
        });

        Item {
            id: id2,
            name: name2,
            image: image2,
        }
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

    pub async fn delete(item_id: String, db_lock: Arc<Mutex<Connection>>) {
        let db = db_lock.lock().unwrap();

        let res = db.prepare("DELETE FROM items WHERE id = ?");
        if res.is_err() {
            println!("Error preparing statement: {:?}", res.unwrap_err());
            return;
        }
        let mut stmt = res.unwrap();
        let exec = stmt.execute([&item_id]);
        if exec.is_err() {
            println!("Error deleting item: {:?}", exec.unwrap_err());
        }
    }
}
