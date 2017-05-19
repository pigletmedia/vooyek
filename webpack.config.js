/**
* Require and define everything we'll need
*/
const   webpack = require('webpack'),
        path = require('path'),
        ExtractTextPlugin = require('extract-text-webpack-plugin'),
        assetPath = "resources/assets/",

        // Custom file that provides instructions regarding filetypes
        rules = require(path.resolve(__dirname,'webpack.rules.js'));


/**
* Webpack configuration object
*/
module.exports = {
    context: path.resolve(__dirname),
    entry: {
        commons: [path.resolve(__dirname,assetPath + 'sass/app.scss')],
        public: path.resolve(__dirname,assetPath + 'js/public.js')
    },
    output: {
        path: path.resolve(__dirname,'public/dist'),
        filename: '[name].js'
    },
    target: 'web',
    externals: {
        $: 'jquery',
        jQuery: 'jquery'
    },
    module: {
        rules
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            minChunks: 3
        })
    ]

}
