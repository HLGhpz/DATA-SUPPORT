const router = require('koa-router')()
const DataController = require('../controler/data')
const DBController = require('../controler/crud')

module.exports = (app) => {

  router.get('/data/:id', DataController.showData)
    .get('/info/:id', DBController.selectInfo)
    .post('/info/:id', DBController.createInfo)
    
  app.use(router.routes())
    .use(router.allowedMethods())
}
