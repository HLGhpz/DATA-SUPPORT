const ip = require('ip')

const miSend = require('./mi-send')
const miLog = require('./mi-log')
// const miHttpError = require('./mi-http-error')

module.exports = (app) => {
  // app.use(miHttpError)
  app.use(miLog(app.env, {
    env: app.env,
    appLogLevel: 'debug',
    dir: 'logs',
    serverIp: ip.address()
  }))
  app.use(miSend())
}