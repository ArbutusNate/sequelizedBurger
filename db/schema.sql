DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Created the table "schools"
CREATE TABLE burgers (
  id int (10) AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured BOOL NOT NULL DEFAULT false,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ("Double Cheeseburger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Bacon Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Bleu Cheese Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Double Double", true);

SELECT * FROM burgers;