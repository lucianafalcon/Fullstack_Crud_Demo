/* ==========================================================
   Vistas = Tabla de datos virtual = Query 
   
   CREATE VIEW → sintaxis para crear tabla viral
		- SELECT → para ver datos.
		- DESCRIBE → para ver la estructura de la tabla.
        
	Agregar un campo a una vista.
    
    Crear vistas con alias (hace que las consultas sean más limpias y fáciles de leer).
========================================================== */

USE gammers;   -- uso la base de datos

DROP VIEW IF EXISTS lista_juegos;
CREATE VIEW lista_juegos AS
SELECT name, description
FROM game;

DROP VIEW IF EXISTS vw_game_level_7;
CREATE VIEW vw_game_level_7 AS
SELECT *
FROM game
WHERE id_level = 7;

-- ----------------------
-- Consultar la vista

-- opcion 1
SELECT * FROM vw_game_level_7; 
-- opcion 2
describe game;
-- ----------------------
-- agregar campo a una vista

-- opcion 1
SELECT * FROM  vw_game_level_7 INNER JOIN commentary WHERE id_level = 7;
-- opcion 2 (mas eficiente -> crear la vista de nuevo con los campos que quiero)
DROP VIEW IF EXISTS vw_level_7;
CREATE VIEW vw_level_7 AS 
SELECT NAME, DESCRIPTION FROM game WHERE id_level = 7;

-- ----------------------
-- Vistas con alias

DROP VIEW IF EXISTS wv_comentarios;
CREATE VIEW wv_comentarios AS
(SELECT g.name, g.description, c.commentary
FROM game AS g
INNER JOIN commentary c ON (c.id_game = g.id_game)
WHERE g.id_level = 7  
);


