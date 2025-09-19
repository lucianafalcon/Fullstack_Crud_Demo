/* ==========================================================
   Archivo: alumnos_colegios.sql
   Descripción: 
   - Crear las tablas.
   - Insertar datos de prueba.
   - Consultas SELECT con filtros.
========================================================== */

-- Borrar tablas si existen
DROP TABLE IF EXISTS `alumnos`;
DROP TABLE IF EXISTS `colegios`;

-- Crear tabla colegios
CREATE TABLE `colegios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) DEFAULT NULL,
  `localidad` VARCHAR(45) DEFAULT NULL,
  `provincia` VARCHAR(45) DEFAULT NULL,
  `capacidad` INT DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- Crear tabla alumnos
CREATE TABLE `alumnos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_colegio` INT DEFAULT NULL,
  `legajo` INT DEFAULT NULL,
  `nombre` VARCHAR(45) DEFAULT NULL,
  `nota` DECIMAL(10,0) DEFAULT NULL,
  `grado` INT DEFAULT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_colegio`) REFERENCES `colegios`(`id`)
);

-- Insertar datos en colegios
INSERT INTO `colegios` (`id`, `nombre`, `localidad`, `provincia`, `capacidad`) VALUES
  (1, 'Escuela LearnWave', 'Ramos Mejia', 'Buenos Aires', 250),
  (2, 'Academia BrightPath', 'San Salvador', 'Jujuy', 100),
  (3, 'Instituto WisdomLoom', 'Belgrano', 'Córdoba', 150),
  (4, 'Academia Junior de Johnson', 'Avellaneda', 'Buenos Aires', 500),
  (5, 'Escuela Evergreen Hill', 'Capital Federal', 'Buenos Aires', 250);

-- Insertar datos en alumnos
INSERT INTO `alumnos` (`id`, `id_colegio`, `legajo`, `nombre`, `nota`, `grado`, `email`) VALUES
  (1, 2, 1000, 'Ramón Mesa', 8, 1, 'rmesa@mail.com'),
  (2, 2, 1002, 'Tomás Smith', 8, 1, ''),
  (4, 1, 101, 'Juan Perez', 10, 3, ''),
  (5, 1, 105, 'Pietra González', 9, 3, ''),
  (6, 5, 190, 'Roberto Luis Sánchez', 8, 3, 'robertoluissanchez@gmail.com'),
  (7, 2, 106, 'Martín Bossio', NULL, 3, ''),
  (8, 4, 100, 'Paula Remmi', 3, 1, 'mail@mail.com'),
  (9, 4, 1234, 'Pedro Gómez', 6, 2, '');
  
-- Consulta 1: Consulta de prueba
SELECT id_colegio, nombre, nota
FROM alumnos;

-- Consulta 2: Filrar de la tabla
SELECT *
FROM alumnos
WHERE id_colegio = 2;

