#[macro_export]
macro_rules! getDb {
    () => {
        Connection::open("tarkov.sqlite").expect("Could not open database")
    };
}
