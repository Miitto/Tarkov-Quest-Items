use std::path::PathBuf;

#[derive(Debug, Clone)]
pub struct Log {
    path: PathBuf,
    last_line: u64,
}
