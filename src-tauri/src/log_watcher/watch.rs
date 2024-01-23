use std::path::PathBuf;

use notify::RecommendedWatcher;
use notify_debouncer_full::{
    new_debouncer, notify::RecursiveMode, notify::Watcher, DebounceEventResult, Debouncer,
    FileIdMap,
};
use std::time::Duration;

use crate::types::Error;

#[derive(Debug)]
pub struct LogWatcher {
    watcher: Debouncer<RecommendedWatcher, FileIdMap>,
    path: PathBuf,
}

impl LogWatcher {
    pub fn new(path: Option<PathBuf>) -> Self {
        let mut debouncer = new_debouncer(
            Duration::from_millis(500),
            None,
            |result: DebounceEventResult| match result {
                Ok(events) => events.iter().for_each(|event| println!("{event:?}")),
                Err(errors) => errors.iter().for_each(|error| println!("{error:?}")),
            },
        )
        .expect("Failed to Create Watcher");

        let path = Some(PathBuf::from("C:\\Users\\Miitto\\Documents"));

        if let Some(p) = &path {
            println!("Watching: {:?}", p);
            debouncer
                .watcher()
                .watch(p, RecursiveMode::Recursive)
                .expect("Failed to watch path");
        }
        let p = path.unwrap_or(PathBuf::from(""));

        LogWatcher {
            watcher: debouncer,
            path: p,
        }
    }

    pub fn set_path(&mut self, path: String) -> Result<(), Error> {
        println!("Setting path: {}", path);
        let new_path = PathBuf::from(path);
        if !new_path.exists() {
            self.stop()?;
            return Err(Error::Other {
                message: "Invalid path".to_string(),
            });
        }

        if new_path == self.path {
            return Ok(());
        }

        self.watcher.watcher().unwatch(&self.path)?;

        self.path = new_path;

        self.watcher
            .watcher()
            .watch(&self.path, RecursiveMode::Recursive)
            .unwrap();
        Ok(())
    }

    pub fn stop(&mut self) -> Result<(), Error> {
        self.watcher.watcher().unwatch(&self.path)?;
        self.path = PathBuf::from("");
        Ok(())
    }
}
