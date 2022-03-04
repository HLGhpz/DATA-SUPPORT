const { get } = require('koa/lib/response')
const path = require('path')
const { getFilePath, getFileJsonData } = require('../utils/fileUtils')

module.exports = {
  showData: async (ctx, next) => {
    let filePath = getFilePath(ctx.url)
    try {
      const ret = await getFileJsonData(filePath)
      ctx.response.body = ret
    } catch (error) {
      ctx.response.body = error
    }
  }
}