/* ==========================================================
   consultas y subconsultas DDL
   
   Operadores:
	   -">" → operador de comparación mayor que.
	   - "%" → no se usa solo, sino dentro de LIKE como comodín (nombre LIKE 'A%').
	   - "_" → reemplaza un único carácter.
     - "NULL" → se compara con IS NULL o IS NOT NULL.
   
   Keywords:
	   - "AS" → sirve para cambiar el nombre de una columna/tabla (temporalmente, en la consulta o vista).
	   - ORDER BY → ordena el resultado de una consulta según una o más columnas (ascendente ASC o descendente DESC).
	   - JOIN
   
   Funciones de agregación:
	   - COUNT() → cuenta filas o valores.
	   - SUM() → suma valores.
	   - AVG() → promedio de valores.
	   - MIN() → valor mínimo.
	   - MAX() → valor máximo.
  Se usan generalmente junto con GROUP BY:  
     - WHERE → filtra filas antes de agrupar.
	   - HAVING → filtra grupos después del GROUP BY.
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

-- ----------------------
-- operador ">"
SELECT *
FROM alumnos
WHERE nota > 7 AND grado =1;

-- operador "LIKE"
SELECT *
FROM alumnos 
WHERE nombre LIKE "%a";  /* el % representa 0, 1 o multiples caracteres */

-- operador "_"
SELECT * 
FROM alumnos 
WHERE legajo LIKE "ACBC1__";

-- operador "NULL"
SELECT * FROM alumnos WHERE nota IS NULL;
SELECT * FROM alumnos WHERE nota IS NOT NULL;

-- ----------------------
-- keyword AS 
SELECT id_colegio, legajo, nombre AS "Nombre alumno"
FROM alumnos; 

-- keyword ORDER BY
-- caso 1
SELECT id_colegio, legajo, nombre AS "Nombre alumno"
FROM alumnos
ORDER BY nombre;  /* por default order by ordena ascendente */
-- caso 2 
SELECT id_colegio, legajo, nombre AS "Nombre alumno"
FROM alumnos
ORDER BY id_colegio DESC; /*DES si quiero el orden descendente (hay que aclararlo) */
-- caso 3
SELECT id_colegio, legajo, nombre AS "Nombre alumno"
FROM alumnos
WHERE id_colegio > 1 
ORDER BY id_colegio DESC, legajo ASC; /*ordena primero por colegio, de mayor a menor, y dentro de cada colegio, ordena los alumnos de menor a mayor legajo */

-- keyword JOIN
-- caso 1
SELECT *
FROM alumnos 
INNER JOIN colegios  /* INNER JOIN = JOIN. Une filas de dos tablas cuando hay coincidencia entre PK de una y FK de la otra */
ON alumnos.id_colegio = colegios.id;
-- caso 2
SELECT alumnos.nombre as "Nombre Alumno", colegios.nombre as "Nombre Colegio", colegios.provincia  /*uso el AS para que no tengan el mismo nombre las tablas cuando las veo juntas */
FROM alumnos 
INNER JOIN colegios   
ON alumnos.id_colegio = colegios.id
WHERE provincia LIKE "Buenos%";

-- ----------------------
-- funciones de agregación

-- COUNT
SELECT COUNT(nota) FROM alumnos; /*devuelve un solo valor: la cantidad total de filas donde nota NO es NULL en toda la tabla alumnos*/
SELECT id_colegio, COUNT(nota) AS "cant de alumnos" FROM alumnos GROUP BY id_colegio; 

-- AVG
SELECT AVG(nota) FROM alumnos GROUP BY id_colegio;  /*devuelve el promedio de las notas segun por cada colegio */

-- WHERE
SELECT id_colegio, AVG(nota) AS "promedio" FROM alumnos WHERE nota > 7  GROUP BY id_colegio; /*hace el promedio de las notas de los alumnos con nota >7, y lo devuelve segun id_colegio */

-- HAVING
SELECT id_colegio, AVG(nota) AS "promedio" FROM alumnos GROUP BY id_colegio HAVING AVG(nota) > 7; /* hace el promedio de las notas segun por cada colegio y devuelve los que tienen promedio >7 */


