// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'knex_db',
      user:     'postgres',
      password: 'password',
      host: '127.0.0.1',
      port: 5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'knex_db',
      user:     'postgres',
      password: 'password',
      host: '127.0.0.1',
      port: 5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }, 
    seeds: {
      directory: './db/seeds'
    }
  }

};
