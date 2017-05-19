/**
* Require and define everything we'll need
*/
const   excludePaths = [/node_modules/,/vendor/],
        ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [

    /**
    * Handle all our javascript
    * We'll be using es6, so transpile here
    */
    {
        test: /\.es6$/,
        exclude: excludePaths,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        ]
    },


    /**
    * We'll be using VueJS as our framework
    * This section handles the SPA .vue components
    */
    {
        test: /\.vue$/,
        exclude: excludePaths,
        use: [
            { loader: 'vue-loader' }
        ]
    },



    /**
    * Our css is written in SASS
    * This section handles processing sass, prefixing, and loading
    */
    {
        test: /\.scss$/,
        exclude: excludePaths,
        use: ExtractTextPlugin.extract({
            use: [
                { loader: 'css-loader' },
                {
                    loader: 'postcss-loader',
                    options: {
                        importLoader: 1,
                        plugins: [
                            require('autoprefixer')
                        ]
                    }
                },
                { loader: 'sass-loader' }
            ]
        })
    }






]
