const path = require('path');
const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    devtool: "source-map",
    entry: './src/index.tsx',
    resolve: {
        alias: {
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@atoms': path.resolve(__dirname, 'src/atoms'),
          '@contexts': path.resolve(__dirname, 'src/contexts'),
          '@molecules': path.resolve(__dirname, 'src/molecules'),
          '@organisms': path.resolve(__dirname, 'src/organisms'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@templates': path.resolve(__dirname, 'src/templates'),
        },
        extensions: [".ts", ".tsx", ".js", ".svg"]
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
            },
            {
                test: /\.svg$/i,
                use: 'raw-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
        new HotModuleReplacementPlugin(),
    ],
    devServer: {
        publicPath: '/',
        historyApiFallback: true,
    }
};

