require('dotenv').config()

const pg = require('pg')
pg.defaults.ss1 = true

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL
}