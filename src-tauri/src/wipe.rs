use super::getDb;
use super::types::Wipe;
use rusqlite::Connection;

impl Wipe {
    pub fn all() -> Vec<Self> {
        let db = getDb!();

        let mut all: Vec<Self> = db
            .prepare("SELECT id, name FROM wipe")
            .unwrap()
            .query_map([], |row| {
                Ok(Wipe {
                    id: row.get(0)?,
                    name: row.get(1)?,
                })
            })
            .unwrap()
            .map(|x| x.unwrap())
            .collect();
        all.reverse();
        all
    }

    pub fn create(name: String) -> Self {
        let db = getDb!();

        let mut stmt = db.prepare("INSERT INTO wipe (name) VALUES (?)").unwrap();
        stmt.execute([&name]).unwrap();

        let id = db.last_insert_rowid();
        Wipe { id, name }
    }
}
