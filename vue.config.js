// vue.config.js
module.exports = {
    runtimeCompiler: true,
    // options...
    // publicPath: process.env.NODE_ENV === 'production'
    //    ? '/imptfc/'
    //    : '/',
    devServer: {
        host: process.env.NODE_ENV === 'production' ? '178.128.254.49' : '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        host: '0.0.0.0',
        public: 'http://178.128.254.49:3450'
    }
}