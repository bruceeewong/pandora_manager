const
    Koa = require('koa'),
    bodyParser = require('koa-bodyparser'),
    koaBody = require('koa-body'),
    controller = require('./middlewares/controller'),
    templating = require('./middlewares/templating')

const isProduction = process.env.NODE_ENV === 'production'

const app = new Koa()

let requestUrl = ''

// log request URL:
app.use(async (ctx, next) => {
    requestUrl = ctx.request.url
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)

    var
        start = new Date().getTime(),
        execTime
    await next()
    execTime = new Date().getTime() - start
    ctx.response.set('X-Response-Time', `${execTime}ms`)
})

if (! isProduction) {
    let staticFiles = require('./middlewares/staticFiles')
    app.use(staticFiles('/static/', __dirname + '/public/dist/static'))
}

// parse request body:
// app.use(bodyParser())

// 处理file上传
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200*1024*1024  // 设置上传文件大小最大限制，默认5M
    }
}))

// add nunjucks as view:
app.use(templating(__dirname + '/public/dist', {
    noCache: !isProduction,
    watch: !isProduction
}))

// add controllers:
app.use(controller())

app.listen(3000)
console.log('app started at port 3000...')