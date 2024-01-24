use std::{path::PathBuf, time::Duration};

use notify::{RecommendedWatcher, RecursiveMode, Watcher};
use notify_debouncer_full::{
    new_debouncer, DebounceEventHandler, DebounceEventResult, Debouncer, FileIdMap,
};

use crate::types::Error;

use super::Log;

#[derive(Debug)]
pub struct LogManager {
    debouncer: Debouncer<RecommendedWatcher, FileIdMap>,
    path: Option<PathBuf>,
    logs: Vec<Log>,
}

impl LogManager {
    pub fn new(path: Option<PathBuf>) -> Result<Self, Error> {
        let (tx, rx) = std::sync::mpsc::channel();
        let debouncer = Self::new_debouncer(tx)?;

        let mut man = LogManager {
            debouncer,
            path,
            logs: Vec::new(),
        };

        for result in rx {
            match result {
                Ok(events) => events.iter().for_each(|event| println!("{event:?}")),
                Err(errors) => errors.iter().for_each(|error| println!("{error:?}")),
            }
            println!();
        }

        Ok(man)
    }

    pub fn on_log(self, evt: DebounceEventResult) {
        println!("Log Event: {:?}", evt);
    }

    fn new_debouncer<F>(tx: F) -> Result<Debouncer<RecommendedWatcher, FileIdMap>, notify::Error>
    where
        F: DebounceEventHandler,
    {
        let mut debouncer =
            new_debouncer(Duration::from_millis(500), None, tx).expect("Failed to Create Watcher");

        let path = Some(PathBuf::from("C:\\Users\\Miitto\\Documents"));

        if let Some(p) = &path {
            println!("Watching: {:?}", p);
            debouncer
                .watcher()
                .watch(p, RecursiveMode::Recursive)
                .expect("Failed to watch path");
        }

        Ok(debouncer)
    }

    pub fn set_path(&mut self, path: PathBuf) -> Result<(), notify::Error> {
        self.path = Some(path.clone());
        self.debouncer
            .watcher()
            .watch(&path, RecursiveMode::Recursive)
            .expect("Failed to watch path");
        Ok(())
    }
}
