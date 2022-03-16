const db = require('../models/index')

module.exports = {
  selectInfo: async (ctx, next) => {
    try {
      const info = await db.Info.findAll()
      ctx.body = info
    }catch(err) {
      ctx.body = `Error: ${err}`
    }
  },
  createInfo: async (ctx, next) => {
    try {
      await db.Info.sync();
      const info = await db.Info.create(ctx.request.body)
      ctx.body = info
    } catch (err) {
      ctx.body = err
    }
  }
}
