// vue.config.js
module.exports = {
    // options...
    //publicPath: process.env.NODE_ENV === 'production'
    //    ? '/imptfc/'
    //    : '/',
    devServer: {
        host: process.env.NODE_ENV === 'production' ? '178.128.254.49' : '0.0.0.0',
        hot: true,
        disableHostCheck: true,
    },
}