var path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var parentDir = path.join(__dirname, '../');

module.exports = {
    mode: 'development',
    entry: {
        start: './src/start.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Pylot',
            filename: './index.html',
            inject: 'head'
        })
    ],
    output: {
        path: __dirname + '/public/dist',
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname + '/src')
        },
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": require.resolve("crypto-browserify")
        }
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        plugins: [
                            ['@babel/plugin-proposal-decorators', {
                                'legacy': true
                            }],
                            ["@babel/plugin-proposal-class-properties", {
                                "loose": true
                            }]
                        ],
                        presets: ['@babel/preset-env']
                    }
                }
            },
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
            {
                test: /\.scss$/,
                enforce: 'pre',
                use: ["style-loader", "css-loader", "sass-loader", "source-map-loader"]
            },
            {
                test: /\.png$/,
                loader: "url-loader"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.gif$/,
                loader: "file-loader"
            },
            {
                test: /\.svg$/,
                loader: "file-loader"
            },
            {
                test: /\.ico$/,
                loader: "file-loader"
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            },
        ]
    },
};

