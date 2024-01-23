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
        name text not null unique
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
