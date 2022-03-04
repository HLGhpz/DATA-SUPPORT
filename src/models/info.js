// models/info.js
module.exports = (sequelize, DataTypes) => {
  // 参数一：modelName: Info
  // 参数二：定义属性
  // 参数三：其他配置 https://sequelize.org/master/class/lib/model.js~Model.html#static-method-init
  const Info = sequelize.define('Info', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    abstract: {
      type: DataTypes.STRING,
    },
    tag: {
      type: DataTypes.ENUM,
      values: ['project', 'collect', 'make', 'achieve', 'pause', 'abolish'],
      defaultValue: 'project'
    },
    link: {
      type: DataTypes.STRING,
    }
  })
  Info.associate = models => {
    // 定义关联
  }
  return Info
}