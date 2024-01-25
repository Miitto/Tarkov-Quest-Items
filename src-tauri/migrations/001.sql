CREATE TABLE wipes_tmp (
    id integer PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    image TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO wipes_tmp (id) SELECT id FROM wipes;
DROP TABLE wipes;
ALTER TABLE wipes_tmp RENAME TO wipes;