create database if not exists testdb;
use testdb;

CREATE TABLE `customers` (
  `id` int NOT NULL,
  `name` varchar(20) NOT NULL,
  `salary` decimal(18,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
);