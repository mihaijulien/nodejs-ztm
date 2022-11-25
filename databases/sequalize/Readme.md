# Sequalize with MySQL

Sequelize is a promise-based ORM for Node.js. It works with PostgreSQL, MySQL, SQLite and MSSQL dialects and features solid transaction support, relations, read replication and more.

Object Relational Mapping (ORM) is a technique of accessing a relational database from an object-oriented language. 

### Setup MySQL

`docker-compose up`

__Test MySQL server__
```sh
docker ps

docker exec -it *container_id* bash

mysql -uroot -proot

show databases;
```

### Notes

This Sequelize Model represents tutorials table in MySQL database. These columns will be generated automatically: id, title, description, published, createdAt, updatedAt.

**Test the APIs**

Run the app with `node server.js`
The console shows:
```sh
Server is running on port 8080.
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'tutorials' AND TABLE_SCHEMA = 'testdb'
Executing (default): CREATE TABLE IF NOT EXISTS `tutorials` (`id` INTEGER NOT NULL auto_increment , `title` VARCHAR(255), `description` VARCHAR(255), `published` TINYINT(1), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `tutorials`
Synced db.
```
- **Create a new Tutorial  using `POST /tutorials` API**

[http://localhost:8080/api/tutorials](http://localhost:8080/api/tutorials)

```json5
{
    "title": "Title",
    "description": "desc",
    "publishes": true
}
```

Checking the MySQL table will output:

```
mysql> select * from tutorials;
+----+-------+-------------+-----------+---------------------+---------------------+
| id | title | description | published | createdAt           | updatedAt           |
+----+-------+-------------+-----------+---------------------+---------------------+
|  1 | Title | desc        |         0 | 2022-11-25 10:06:18 | 2022-11-25 10:06:18 |
+----+-------+-------------+-----------+---------------------+---------------------+
1 row in set (0.00 sec)
```