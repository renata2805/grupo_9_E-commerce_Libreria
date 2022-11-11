CREATE DATABASE IF NOT EXISTS `ebookdb`;
USE `ebookdb`;

CREATE TABLE `users` (
   `id` INT NOT NULL,
   `nombre` VARCHAR(45) NOT NULL,
   `apellido` VARCHAR(45) NOT NULL,
   `tel` INT NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `role_id` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL,
   `title` VARCHAR(255) NOT NULL,
   `author` VARCHAR(40) NOT NULL,
   `editorial` VARCHAR(120) NOT NULL,
   `origin` VARCHAR(40) NOT NULL,
   `pages` INT NOT NULL,
   `public_date` DATE NOT NULL,
   `description` VARCHAR(1000) NOT NULL,
   `price` DECIMAL NOT NULL,
   `calification` TINYINT NOT NULL,
   `about_author` VARCHAR(255) NOT NULL,
   `category_id` INT,
   `status_id` INT,
   `image` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
   `id` INT,
   `category` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `status` (
   `id` INT,
   `status` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
   `id` INT,
   `role` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_2c97cd77-d219-4675-857a-c20b8ef83886` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_b510e733-425e-4076-ba36-3024365ce555` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_c4e41353-b557-449b-8789-eab5ed005912` FOREIGN KEY (`status_id`) REFERENCES `status`(`id`)  ;
