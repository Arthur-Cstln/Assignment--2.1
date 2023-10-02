CREATE TABLE Player(
    player_id INT PRIMARY KEY,
    pseudo VARCHAR(50),
    date_inscription DATE,
    score INT 
);

CREATE TABLE World(
    world_id INT PRIMARY KEY,
    world_name VARCHAR(50),
    world_type VARCHAR(50),
    world_player INT REFERENCES Player(player_id),
    world_seed INT
);

CREATE TABLE Item(
    item_id INT PRIMARY KEY,
    item_name VARCHAR(50),
    item_type VARCHAR(50),
    item_maxquantity INT
);

CREATE TABLE Inventory(
    inventory_id INT PRIMARY KEY,
    inventory_player INT REFERENCES Player(player_id),
    inventory_item INT REFERENCES Item(item_id),
    inventory_slots INT
);