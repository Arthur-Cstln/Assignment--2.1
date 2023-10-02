SELECT pseudo, score FROM Player 
WHERE score > 100;

SELECT  * FROM World w
JOIN Player p ON w.world_player = p.player_id
WHERE w.world_type = 'survie';

SELECT item_name, item_maxquantity
FROM Item
WHERE item_type = 'weapon';

SELECT p.pseudo, i.item_name, inv.inventory_slots
FROM Player p
JOIN Inventory inv ON p.player_id = inv.inventory_player
JOIN Item i ON inv.inventory_item = i.item_id;