const { name } = require('./package.json');

module.exports = {
    webpack: (config) => {
        // umd方式注入
        config.output.library = `${name}-[name]`;
        config.output.libraryTarget = 'umd';
        // config.output.jsonpFunction = `webpackJsonp_${name}`;
        config.output.globalObject = 'window';

        return config;
    },
    devServer: (_) => {
        const config = _;
        // 允许跨域
        config.headers = {
            'Access-Control-Allow-Origin': '*',
        };
        config.historyApiFallback = true;
        config.hot = false;
        config.watchContentBase = false;
        config.liveReload = false;

        return config;
    },
};
