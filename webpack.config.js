const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { main: './src/js/index.tsx' },
    mode: 'production',
    module: {
        rules: [
            { test: /\.[jt]sx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            { test: /\.(png|svg|jpg|gif|woff2)$/, loader: 'file-loader' },
            { test: /\.html$/, loader: 'html-loader', },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
                template: './public/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
}
