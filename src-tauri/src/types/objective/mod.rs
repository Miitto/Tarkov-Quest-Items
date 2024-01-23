use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
/// An objective for a task.
pub struct Objective {
    pub id: String,
    pub description: String,
    pub optional: bool,
    pub count: i64,
    pub collected: i64,
    pub found_in_raid: bool,
    #[serde(skip_serializing_if = "Option::is_none", default)]
    pub item: Option<String>,
    pub task: String,
    pub completed: bool,
    pub wipe: i64,
    pub dogtag_level: i64,
    pub min_durability: i64,
    pub max_durability: i64,
}

mod all;
mod assign;
mod bulk_create;
mod task_get;
mod unassign;
mod update;

pub use all::*;
pub use assign::*;
pub use bulk_create::*;
pub use task_get::*;
pub use unassign::*;
pub use update::*;
