DROP TABLE IF EXISTS Forms;
CREATE TABLE IF NOT EXISTS Forms (id TEXT PRIMARY KEY, name TEXT, responseCount INTEGER);
INSERT INTO Forms (id, name, responseCount) VALUES
  ("1", 'Alfreds Futterkiste', 10),
  ("4", 'Around the Horn', 100000),
  ("11", 'Bs Beverages', 1),
  ("13", 'Bs Beverages', 420);
