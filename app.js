
const Koa = require('koa');
const webpackModel = require('webpack');
const koaWebpack = require('koa-webpack');
const onerror = require('koa-onerror');


const app = new Koa();
const config = require('./config/config');
const configDev = require('./build/webpack.dev.conf');
const compiler = webpackModel(configDev);


//错误信息处理
onerror(app);

//开发环境使用webpack 编译和热加载插件
koaWebpack({ compiler })
    .then((middleware) => {

    app.use(middleware);
    
    app.listen(config.node.port,()=>{
        console.log(`starting at port ${config.node.port}`);
    })
});



