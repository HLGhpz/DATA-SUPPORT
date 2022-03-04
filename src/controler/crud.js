const db = require('../models/index')

module.exports = {
  selectInfo: async (ctx, next) => {
    console.log('selectInfo')
    ctx.body = "[]"
    // const info = await db.Info.findAll()
    // ctx.body = info
  },
  createInfo: async (ctx, next) => {
    await db.Info.sync();
    const info = await db.Info.create(ctx.request.body)
    console.log("createInfo:", info.toJSON())
  }
}


