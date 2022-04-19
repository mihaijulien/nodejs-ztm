## Objection.js with Postgres and Express

Start the database with docker:

`docker-compose up`

**Go to:** [http://localhost:5050](http://localhost:5050)

*Server > Create - Server > Connection*

Then you can create a new database with:

`create database objection_tutorial;`

Once the db setup is complete you can run:

`npm run dev`

This will:

1. execute all existing database migrations located in `./db/migrations`
2. execute all seed files located in `./db/seed` so you have some initial data
3. start your server on port `9090` with `nodemon` to provide hot reload functionality

Additionally:

- `npm run down`: undo last migration. Since we only have one migration at the moment this is equivalent to deleting all tables
- `npm run migrate:latest`: executes all migrations in `./db/migrations`
- `npm run make-seed`: create a new seed file

Start the express server and you can test the following endpoint: [http://localhost:9090/user/2](http://localhost:9090/user/2). You should get the following response:

```json5
{
  "id": 2,
  "name": "user2",
  "email": "user2@test.com",
  "channelId": 2,
  "created_at": "2022-04-19T07:22:54.905Z",
  "updated_at": "2022-04-19T07:22:54.905Z"
}
```
