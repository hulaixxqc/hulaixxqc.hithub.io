const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'src/index.js')
    },
    output: {
        // publicPath: '/',
        filename: 'boundle.js',
        path: path.join(__dirname, 'build')
    },
    devServer: {
        hot: true,
        host: '0.0.0.0',
        port: '3000',
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    plugins: [
         new HtmlWebpackPlugin({
            title:'主页',
            filename:'index.html',
            template: path.join(__dirname, 'src/index.html'),
            chunk:'all'
        }),
    ]
}