### Install PostgreSQL

`docker run --name postgresql-container -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres`

### Install PG-admin

`docker run --rm -p 5050:5050 thajeztah/pgadmin4`

**Go to:** [http://localhost:5050](http://localhost:5050)

*Server > Create - Server > Connection*

Host - The IP address of your machine
Password - Password used while creating the PSQL server with docker

### Connecting to the PSQL server via CLI 

1. `docker ps -a`
2. `docker exec -it <PSQL-Container-ID> bash`
3. Authenticate to start using as postgres user. `psql -h localhost -p 5432 -U postgres -W`
4. Enter the password used while creating the PSQL server container.
5. Create a database `create database knex_db;`


## Knex tutorial

1. `npm install knex express body-parser pg`
2. `knex init` && edit knexfile with database connection details
3. `knex migrate:make users_table` && edit the exports.up and exports.down functions
4. Create the table in our database: `knex migrate:latest`

