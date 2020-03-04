// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'work_journal',
      user: '',
      password: ''
    },
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'work_journal',
      user: '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'work_journal',
      user: '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
