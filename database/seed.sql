INSERT INTO Player (player_id, pseudo, date_inscription, score)
VALUES (0001, 'Keplord', '2013-03-22', 3012139);
INSERT INTO Player (player_id, pseudo, date_inscription, score)
VALUES (0002, 'Steve', '2015-09-19', 99);

INSERT INTO World (world_id, world_name, world_type, world_player, world_seed)
VALUES (0012, "My world", "survie", 0001, 3943419401586705);
INSERT INTO World (world_id, world_name, world_type, world_player, world_seed)
VALUES (0013, "Overworld", "creatif", 0002, 740574903231203);

INSERT INTO Item (item_id, item_name, item_type, item_maxquantity)
VALUES (0321, 'diamond_sword', 'weapon', 1);
INSERT INTO Item (item_id, item_name, item_type, item_maxquantity)
VALUES (0324, 'cobblestone', 'block', 64);

INSERT INTO Inventory (inventory_id, inventory_player, inventory_item, inventory_slots)
VALUES (0404, 0001, 0321, 100);
INSERT INTO Inventory (inventory_id, inventory_player, inventory_item, inventory_slots)
VALUES (0408, 0002, 0324, 100);