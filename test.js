const Koa = require('koa');
const Webpack = require('webpack');

const app = new Koa();
const Config = require('./config/config');
const onerror = require('koa-onerror');
const webpackDevConf = require('./build/webpack.dev.conf');
const webpackCompiler = Webpack(webpackDevConf);

const koaWebpack = require('koa-webpack');
//const devMiddleware = require('koa-webpack-middleware').devMiddleware;
//const hotMiddleware = require('koa-webpack-middleware').hotMiddleware;

const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware');

//const history = require('./middleware/koa2-connect-history-api-fallback');
//错误信息处理
onerror(app);

//开发环境使用webpack 编译和热加载插件
// app.use(middleware({
//     config:webpackDevConf,
//     dev:{
//         stats:{//打印日志的颜色
//             color:true
//         }
//     }
// }))
// koaWebpack({
//     config: webpackDevConf
//   }).then(middleware => {
//     app.use(middleware)
//     // app.use(async ctx => {
//     //     const filename = path.resolve(webpackDevConf.output.path, 'index.html')
//     //     ctx.response.type = 'html'
//     //     ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(filename)
//     // })
//   });
// koaWebpack({ webpackCompiler })
//  .then((middleware) => {
//   app.use(middleware);
// });
// koaWebpack({ webpackDevConf })
//  .then((middleware) => {
//   app.use(middleware);
// });
app.use(devMiddleware(webpackCompiler, {
    // display no info to console (only warnings and errors)
    noInfo: false,
 
    // display nothing to the console
    quiet: false,
 
    // switch into lazy mode
    // that means no watching, but recompilation on every request
    lazy: true,
 
    // watch options (only lazy: false)
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
 
    // public path to bind the middleware to
    // use the same as in webpack
    publicPath: "/assets/",
 
    // custom headers
    headers: { "X-Custom-Header": "yes" },
 
    // options for formating the statistics
    stats: {
        colors: true
    }
}))
app.use(hotMiddleware(webpackCompiler, {
  // log: console.log,
  // path: '/__webpack_hmr',
  // heartbeat: 10 * 1000
}))
//控制台打印请求信息

app.use( async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

app.listen(Config.node.port,()=>{
    console.log(`starting at port ${Config.node.port}`);
})