/* ==========================================================
   Base de Datos Relacionales
   
   Creación de Tablas y Datos Iniciales:
		- DROP TABLE
		- CREATE
        - INSERT INTO
========================================================== */

-- Eliminar tablas si existen
DROP TABLE IF EXISTS empleados;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS pedidos;

-- =========================
-- Tabla: empleados
-- =========================
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

-- =========================
-- Tabla: clientes
-- =========================
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

-- =========================
-- Tabla: productos
-- =========================
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
