const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)
const Sequelize = require('sequelize')
const config = require('../config/config')
const sequelize = new Sequelize(undefined, undefined, undefined, config.hlg)

const db = {}
// 引入其他的Model文件。
fs.readdirSync(__dirname)
	// 过滤：不是index.js， 含有.、以 .js 结尾的文件
  .filter(file => (file.indexOf('.' !== 0) && (file !== basename) && (file.slice(-3) === '.js')))
  .forEach(file => {
  	// 引入所有的Model文件
  	// 采用 import 引入
    let model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model
  })
// 关联配置
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
