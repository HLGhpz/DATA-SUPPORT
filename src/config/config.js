const path = require('path')
const sqlite3 = require('sqlite3').verbose()

module.exports = {
  hlg: {
    storage: path.join(__dirname, '../db/db_test.sqlite3'),
    host: 'localhost',
    dialect: 'sqlite',
    dialectModule: sqlite3,
    logging: console.log
  }
}