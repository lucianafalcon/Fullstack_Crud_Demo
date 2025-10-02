/* ==========================================================
   Sentencias y Sublenguajes SQL 
   
   Sublenguajes SQL:
		- SELECT → Consulta datos de la tabla.
		- INSERT INTO → Inserta nuevas filas.
		- UPDATE → Actualiza datos existentes.
		- DELETE → Elimina filas.

   Cláusulas / Operadores:
        - WHERE → Filtra filas según condición.
		- BETWEEN → Filtra valores dentro de un rango.
		- LIKE → Filtra usando patrones (% = cualquier cantidad de caracteres, _ = un solo carácter).
		- IN → Filtra si un valor está en una lista de valores.
========================================================== */

DROP TABLE IF EXISTS empleados;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS pedidos;

-- Crear tabla empleados
CREATE TABLE empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    departamento VARCHAR(50)
);

INSERT INTO empleados (nombre, apellido, departamento) VALUES
('Ana', 'García', 'Ventas'),
('Luis', 'Pérez', 'Ventas'),
('María', 'López', 'Marketing'),
('Juan', 'Martínez', 'Ventas');

-- Crear tabla clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    direccion VARCHAR(100),
    ciudad VARCHAR(50)
);

INSERT INTO clientes (nombre, direccion, ciudad) VALUES
('Ana Pérez', 'Calle Falsa 123', 'Madrid'),
('Alberto Ruiz', 'Av. Siempre Viva 742', 'Barcelona'),
('Beatriz Gómez', 'Calle Luna 56', 'Sevilla'),
('Andrés Torres', 'Calle Sol 12', 'Madrid');

-- Crear tabla productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    categoria VARCHAR(50),
    precio DECIMAL(10,2)
);

INSERT INTO productos (nombre, categoria, precio) VALUES
('Laptop Dell', 'Electrónica', 1200.00),
('Laptop HP', 'Electrónica', 900.00),
('Teclado Logitech', 'Electrónica', 45.00),
('Monitor LG', 'Electrónica', 300.00),
('Mouse Razer', 'Electrónica', 50.00);

-- Crear tabla pedidos
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    fecha DATE,
    total DECIMAL(10,2)
);

INSERT INTO pedidos (cliente_id, fecha, total) VALUES
(1, '2020-12-15', 120.00),
(2, '2021-01-05', 300.00),
(3, '2020-11-20', 50.00);

-- ----------------------
-- sublenguaje:

-- SELECT
SELECT nombre, apellido 
FROM empleados
WHERE departamento = 'Ventas';

-- INSERT
INSERT INTO clientes (nombre, direccion) 
VALUES ('Ana Pérez', 'Calle Falsa 123');

-- UPDATE
SET SQL_SAFE_UPDATES = 0; -- Desactivar temporalmente safe update, sino tira modeError 1175
UPDATE productos 
SET precio = precio * 1.10
WHERE categoria = 'Electrónica';
SET SQL_SAFE_UPDATES = 1; -- opcional, para volver a activar

-- DELETE
DELETE FROM pedidos WHERE fecha < '2021-01-01';

-- ----------------------
-- clausulas:

-- BETWEEN
SELECT * FROM productos WHERE precio BETWEEN 10 AND 50;

-- LIKE
SELECT * FROM clientes WHERE nombre LIKE 'A%' AND ciudad IN ('Madrid', 'Barcelona');

-- LIKE e IN
SELECT * FROM clientes WHERE nombre LIKE 'A%' AND ciudad IN ('Madrid', 'Barcelona');