/* ==========================================================
   Objetos y Tablas SQL
   
   INDEX → Crear Indice.
   INSERT → Insertar datos.

   Objetos de la db: Vistas (VIEW) → consulta guardada que actúa como tabla virtual.

   DELIMITER () → cambia el fin de instrucción para definir funciones/procedimientos.
	   - Funciones almacenadas(FUNCTION) → reciben parámetros y devuelven un valor (cálculo/regla).
	   - Procedimientos almacenados (PROCEDURE)→ reciben parámetros, ejecutan acciones, no devuelven valor directo.

   Trigger → controla/valida datos automáticamente al insertar, actualizar o borrar filas.
========================================================== */

/* drop de la db porque si ya existia de antes no se puede crear nuevmnte */
DROP DATABASE IF EXISTS prueba;
CREATE DATABASE prueba;
USE prueba;

CREATE TABLE producto (
id_producto INT AUTO_INCREMENT,
nombre VARCHAR(100),
categoria VARCHAR(100),
precio DECIMAL (10,2),
stock INT,
PRIMARY KEY (id_producto)
);

-- INDEX
CREATE INDEX idx_categoria ON producto(categoria);
CREATE INDEX idx_nombre_producto ON producto(nombre);

-- INSERT
/*puedo omitir el id_producto porque la tabla se creo como auto incremental por lo tanto es redundante, salvo que lo que inserte tenga 
un id especifico, sino se inserta al final de la tabla */
INSERT INTO producto (id_producto, nombre, categoria, precio, stock) VALUES
(1, 'Laptop Dell XPS 13', 'Laptops', 120.00, 50),
(2, 'Laptop MacBook Air M2', 'Laptops', 1300.00, 45),
(3, 'Monitor LG UltraGear', 'Monitores', 350.00, 75),
(4, 'Monitor Samsung Odyssey G7', 'Monitores', 600.00, 60),
(5, 'Teclado HyperX Alloy Origins', 'Periféricos', 110.00, 100),
(6, 'Teclado Razer BlackWidow V3', 'Periféricos', 140.00, 90),
(7, 'Mouse Logitech G Pro X Superlight', 'Periféricos', 150.00, 120),
(8, 'Mouse Razer DeathAdder V2', 'Periféricos', 70.00, 150),
(9, 'Auriculares Sony WH-1000XM4', 'Audio', 300.00, 80),
(10, 'Auriculares Bose QuietComfort 35 II', 'Audio', 280.00, 70),
(11, 'Impresora HP Envy 6055e', 'Impresoras', 150.00, 30),
(12, 'Impresora Epson EcoTank ET-2760', 'Impresoras', 250.00, 25),
(13, 'Router TP-Link Archer C7', 'Redes', 80.00, 110),
(14, 'Router Netgear Nighthawk', 'Redes', 200.00, 40),
(15, 'Tarjeta Gráfica NVIDIA RTX 3080', 'Componentes', 800.00, 20),
(16, 'Tarjeta Gráfica AMD RX 6700 XT', 'Componentes', 650.00, 25),
(17, 'SSD Samsung 970 EVO Plus 1TB', 'Almacenamiento', 130.00, 200),
(18, 'SSD Crucial P5 Plus 1TB', 'Almacenamiento', 110.00, 180),
(19, 'Webcam Logitech C920', 'Periféricos', 70.00, 95),
(20, 'Micrófono Blue Yeti', 'Audio', 130.00, 65);

-- vistas
select * from producto;

CREATE VIEW vw_productos_bajo_stock AS
SELECT id_producto, nombre, stock
FROM producto 
WHERE stock < 50;

SELECT * FROM vw_productos_bajo_stock;

SELECT id_producto
FROM vw_productos_bajo_stock;

-- Funciones almacenadas (de diseño)
/* DELIMITER $$ o // (son los utilizados por convención) */

DELIMITER //
CREATE FUNCTION fn_total_precio_producto_stock (p_id_producto INT)
RETURNS DECIMAL(10,2)  /*returns solo se pone al principio para decir el tipo de dato de salida */
READS SQL DATA
BEGIN 

DECLARE total DECIMAL(10,2);
SELECT precio*stock INTO total
FROM producto 
WHERE id_producto = p_id_producto;
RETURN total; 
END
//

SELECT  fn_total_precio_producto_stock(1); /*llamo a la funcion y devuelve el resultado para ese producto específico.*/

SELECT fn_total_precio_producto_stock(id_producto) /*llamo a la funcion y devuelve el resultado completo*/
FROM producto;

CREATE VIEW vista_total_precio_producto_stock AS
SELECT nombre,fn_total_precio_producto_stock(id_producto)
FROM producto;

SELECT * FROM vista_total_precio_producto_stock; /*llamo a la funcion y devuelve el resultado completo y  tambien el nombre*/

-- Procedimientos almacenados
DELIMITER //
CREATE PROCEDURE sp_actualizar_stock (IN p_cantidad INT, IN p_id_producto INT)
BEGIN

UPDATE producto
SET stock = stock + p_cantidad
WHERE id_producto = p_id_producto; 

END //

CALL sp_actualizar_stock(10,1);  /*llamo a la funcion  con call (no select como en el caso de las funciones)*/

-- TRIGGER
DELIMITER //
CREATE TRIGGER tr_evitar_stock_negativo
BEFORE UPDATE ON producto 
 FOR EACH ROW 
 BEGIN 
 
 IF NEW. stock < 0 THEN 
 SIGNAL SQLSTATE '45000'
 SET MESSAGE_TEXT = 'El stock no puede ser negativo';
 END IF;

 END; //
 
 UPDATE producto 
 SET stock = -1
 WHERE id_producto = 1

