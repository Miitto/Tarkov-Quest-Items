use crate::types::Error;

pub fn create_tables(db: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    db.execute(
        "CREATE TABLE IF NOT EXISTS items (
            id text primary key,
            name text not null unique,
            image text
        )",
        (),
    )?;

    db.execute(
        "CREATE TABLE IF NOT EXISTS wipes (
        id integer primary key,
        name text not null unique,
        date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )",
        (),
    )?;

    db.execute(
        "CREATE TABLE IF NOT EXISTS tasks (
            id text,
            name text not null,
            vendor text not null,
            min_level integer,
            wipe integer not null references wipes(id) on delete cascade,
            image text,
            PRIMARY KEY (id, wipe)
        )",
        (),
    )?;

    db.execute(
        "CREATE TABLE IF NOT EXISTS objectives (
            id text,
            item text references items(id) on delete cascade,
            task text not null,
            wipe integer not null,
            count integer not null,
            collected integer not null,
            found_in_raid integer not null,
            optional integer not null,
            description text not null,
            completed integer not null default 0,
            dogtag_level integer not null default 0,
            min_durability integer not null default 0,
            max_durability integer not null default 100,
            PRIMARY KEY (id, wipe),
            FOREIGN KEY (task, wipe) REFERENCES tasks(id, wipe) on delete cascade
        )",
        (),
    )?;

    db.execute(
        "CREATE TABLE IF NOT EXISTS found_items (
        quantity integer not null,
        item integer not null references items(id) on delete cascade,
        wipe integer not null references wipes(id) on delete cascade,
        found_in_raid integer not null,
        dogtag_level integer not null default 0,
        min_durability integer not null default 0,
        max_durability integer not null default 100,
        PRIMARY KEY (item, wipe)
    )",
        (),
    )?;

    Ok(())
}

pub fn migrate(db: &rusqlite::Connection, app: tauri::AppHandle) -> Result<(), Error> {
    create_tables(db)?;
    let resource_dir = app.path_resolver().resource_dir().unwrap();

    let mut migrations = Vec::new();

    for entry in std::fs::read_dir(resource_dir.join("migrations"))? {
        let entry = entry?;
        let path = entry.path();
        if path.is_file() {
            migrations.push(path);
        }
    }

    migrations.sort();

    let version: i64 = db.query_row("SELECT user_version FROM pragma_user_version", [], |row| {
        row.get(0)
    })?;

    println!("Current DB Version: {}", version);

    for migration in &migrations {
        if migration.file_name().unwrap() <= std::ffi::OsStr::new(&format!("{}.sql", version)) {
            continue;
        }
        let sql = std::fs::read_to_string(migration)?;
        db.execute_batch(&sql)?;
    }

    let last_migration = migrations.last().unwrap();
    let last_version = last_migration
        .file_name()
        .unwrap()
        .to_str()
        .unwrap()
        .replace(".sql", "");

    println!("Last Migration: {}", last_version);

    db.execute(&format!("PRAGMA user_version = {}", last_version), [])?;

    Ok(())
}
