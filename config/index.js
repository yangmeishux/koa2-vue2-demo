// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

const configObj = {
    build: {
        env: require('./prod.env'),
        assetsRoot: path.resolve(__dirname, '../output'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        // productionGzipExtensions: ['js']
        productionGzipExtensions: ['js', 'css']

        // https: false,
        // host: '192.168.4.77',
        // port: '8084',
        // urlPrefix: 'mockjsdata/16/front/car'
    },
    dev: {
        env: require('./dev.env'),
        port: 1111,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            // '/carinsuredi': {
            //     // target: 'http://tcarins3.winbaoxian.com',
            //     target: 'http://car-tob-di-api.winbaoxian.cn/',
            //     changeOrigin: true
            // },
            '/oss/**': {
                target: 'http://wyjhs.oss-cn-hangzhou.aliyuncs.com',
                pathRewrite: {
                    '/oss/upload': '/'
                },
                changeOrigin: true,
                logLevel: 'debug',
                cookieDomainRewrite: {
                    "*": ''
                }
            }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false,

        urlEscapeClause: 'http://www.baidu.com',
        urlQuoteHistories: 'http://www.baidu.com'

        // https: false,
        // host: '192.168.4.77',
        // port: '8084',
        // urlPrefix: 'mockjsdata/16/front/car'
    }
}

module.exports = configObj