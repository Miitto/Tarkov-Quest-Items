mod item;
mod objective;
mod settings;
mod task;
mod wipe;

pub use self::item::Item;
pub use self::objective::Objective;
pub use self::objective::UpdateObjective;
pub use self::settings::SendableSettings;
pub use self::settings::Settings;
pub use self::task::Task;
pub use self::wipe::Wipe;

#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error(transparent)]
    Io(#[from] std::io::Error),
    #[error(transparent)]
    Rusqlite(#[from] rusqlite::Error),
    #[error(transparent)]
    Reqwest(#[from] reqwest::Error),
    #[error(transparent)]
    Serde(#[from] serde_json::Error),
    #[error(transparent)]
    Tauri(#[from] tauri::Error),
    #[error(transparent)]
    Notify(#[from] notify::Error),
    #[error("Not found: {message}")]
    NotFound { message: String },
    #[error("No Wipe Selected")]
    NoWipeSelected,
    #[error("{message}")]
    Other { message: String },
}

impl serde::Serialize for Error {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::ser::Serializer,
    {
        serializer.serialize_str(self.to_string().as_ref())
    }
}

/// Extension methods for [`LockResult`].
///
/// [`LockResult`]: https://doc.rust-lang.org/stable/std/sync/type.LockResult.html
pub trait LockResultExt {
    type Guard;

    /// Returns the lock guard even if the mutex is [poisoned].
    ///
    /// [poisoned]: https://doc.rust-lang.org/stable/std/sync/struct.Mutex.html#poisoning
    fn ignore_poison(self) -> Self::Guard;
}
