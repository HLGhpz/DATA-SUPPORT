const koa = require('koa')
const cors = require('koa2-cors')
const koaBody = require('koa-body')

const app = new koa()
const router = require('./routes')
const middleware = require('./middlewares')

app.use(cors())
app.use(koaBody())
middleware(app)
router(app)
app.listen(3000)