const packageName = require('./package').name;
const htmlWebpackPlugin = require('html-webpack-plugin');

class HtmlWebpackCustomPlugin {
    constructor(htmlWebpackPlugin, options) {
        this.htmlWebpackPlugin = htmlWebpackPlugin;
        // 外部传入配置
        this.options = options || {};
    }

    apply(compiler) {
        // 插件名
        const pluginName = 'HtmlWebpackCustomPlugin';
        if (compiler.hooks) {
            compiler.hooks.compilation.tap(pluginName, compilation => {
                const hook = this.htmlWebpackPlugin.getHooks(compilation);
                hook.alterAssetTags.tapAsync(pluginName, (htmlPluginData, callback) => {
                    const cloneHtmlPluginData = { ...htmlPluginData };
                    const entryScript = cloneHtmlPluginData.assetTags.scripts.find(item => {
                        return item.attributes.src.includes('bundle.js');
                    });
                    if (entryScript) {
                        entryScript.attributes.entry = true;
                    }
                    callback(null, cloneHtmlPluginData);
                });
            });
        }
    }
}

module.exports = {
    reactScriptsVersion: "react-scripts",
    webpack: {
        plugins: {
            add: [new HtmlWebpackCustomPlugin(htmlWebpackPlugin)], /* An array of plugins */
        },
        configure: (config) => {
            config.output.library = packageName;
            config.output.libraryTarget = 'umd';
            config.output.chunkLoadingGlobal = `webpackJsonp_${packageName}`;
            config.plugins.push(new HtmlWebpackCustomPlugin(htmlWebpackPlugin))
            return config;
        }
    },
    devServer: config => {
        config.headers = {
            'Access-Control-Allow-Origin': '*',
        };
        config.historyApiFallback = true;
        config.hot = false;
        config.liveReload = false;

        return config;
    },
};