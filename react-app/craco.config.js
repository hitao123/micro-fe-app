const packageName = require('./package').name;

module.exports = {
    reactScriptsVersion: "react-scripts",
    webpack: config => {
        config.output.library = `${packageName}-[name]`;
        config.output.libraryTarget = 'umd';
        config.output.jsonpFunction = `webpackJsonp_${packageName}`;
        config.output.globalObject = 'window';

        return config;
    },

    devServer: _ => {
        const config = _;

        config.headers = {
            'Access-Control-Allow-Origin': '*',
        };
        config.historyApiFallback = true;

        config.hot = false;
        config.liveReload = false;

        return config;
    },
};