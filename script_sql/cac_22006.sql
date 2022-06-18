# Creo la base de datos
CREATE DATABASE `cac_22006` /*!40100 COLLATE 'utf8mb4_0900_ai_ci' */;

# Creo la tabla categorias
CREATE TABLE `categorias` (
	`nombre` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`descripcion` TEXT NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;

# Inserto datos en la tabla de categorias
INSERT INTO `cac_22006`.`categorias` (`nombre`, `descripcion`) VALUES ('1_capsulas', 'capsulas de cafe');
INSERT INTO `cac_22006`.`categorias` (`nombre`, `descripcion`) VALUES ('2_granos', 'granos de cafe');
INSERT INTO `cac_22006`.`categorias` (`nombre`, `descripcion`) VALUES ('3_molido', 'cafe molido');

# Creo la tabla productos
CREATE TABLE `productos` (
	`codigo_id` INT NOT NULL AUTO_INCREMENT,
	`codigo` VARCHAR(5) NOT NULL DEFAULT '' COMMENT 'ABC12',
	`nombre` VARCHAR(80) NOT NULL DEFAULT '',
	`descripcion` VARCHAR(100) NOT NULL DEFAULT '',
	`precio` INT NOT NULL DEFAULT 0,
	`categoria_id` INT UNSIGNED NOT NULL DEFAULT 0,
	PRIMARY KEY (`codigo_id`),
	CONSTRAINT `FK__categorias` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
)
COLLATE='utf8mb4_0900_ai_ci'
;