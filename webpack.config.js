const path = require('path');
const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    devtool: "source-map",
    entry: './src/index.tsx',
    resolve: {
        alias: {
          '@contexts': path.resolve(__dirname, 'src/contexts'),
          '@organisms': path.resolve(__dirname, 'src/organisms'),
          '@pages': path.resolve(__dirname, 'src/pages'),
        },
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
        new HotModuleReplacementPlugin(),
    ],
};

