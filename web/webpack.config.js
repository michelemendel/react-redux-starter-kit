/* eslint-disable no-console */
console.log("--- MAIN (webpack.config.js) ---\n");

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";
const isMocked = process.env.MOCKED === "mocked";

console.log("prod:", isProduction);
console.log("dev:", isDevelopment);
console.log("test:", isTest);
console.log("mocked:", isMocked);
console.log("dirname:", __dirname);

const GLOBALS = {
    "process.env": {
        PRODUCTION: isProduction,
        MOCKED: isMocked
    }
};

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    // disable: isDevelopment //If you turn this on, the screen will flash on initial page load (FOUC - Flash On Unstyled Content).
});

const bundle = path.resolve(__dirname, "src/app.tsx");
const vendor = [
    "babel-polyfill",
    "jquery",
    "react",
    "react-dom",
    "react-redux",
    "react-router-dom",
    "react-router-redux",
    "react-transition-group",
    "reactstrap",
    "redux",
    "redux-immutable-state-invariant",
    "redux-logger",
    "toastr",
    "whatwg-fetch",
];

const config = {
    entry: {bundle, vendor},

    output: {
        path: path.resolve(__dirname, "target/dist/"),
        publicPath: isProduction ? "./" : "/", // Path to public resource, like bundle.js, images, files...
        filename: isProduction ? "[name].[chunkhash].js" : "[name].js" //For production we use cache busting.
    },

    target: "web",

    //webpack.js.org/configure/devtool
    devtool: isProduction ? "source-map" : "eval-source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    "ts-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: "babel-loader"
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }],
                    fallback: "style-loader"
                })
            },

            // glyphicon and fontawesome fonts
            {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: "file-loader"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=image/svg+xml"},

            // images
            {test: /\.(png|jpg|jpeg|gif)$/, use: "url-loader?limit=100000"},
        ]
    },

    plugins: [
        extractSass,

        // Creates an index.html file.
        new HtmlWebpackPlugin({
            template: "src/index_template.html",
            filename: "index.html", // Relative to output.path (target/dist/)
            inject: true
        }),

        new webpack.DefinePlugin(GLOBALS),

        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
        }),

        // Doesn't agree with chunkhash
        // new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        port: 9090,
        compress: true,
        // historyApiFallback: true,
        // hot: true

        // Setup proxy between Node and a web server
        // proxy: {
        //     "/uno/*": {
        //         target: {
        //             protocol: "http",
        //             host: "localhost",
        //             port: "8088"
        //         },
        //         secure: false
        //     }
        // }
    }
};

if (isProduction) {
    console.log("--- Minifying");

    // noinspection Annotator
    config.plugins = config.plugins.concat([
        new BundleAnalyzerPlugin({
            analyzerMode: "disabled", //server (default), static, disabled
            openAnalyzer: true, //Automatically open report in browser
            generateStatsFile: false, //stats.json in bundle output directory
            logLever: "info", //info (default), warn, error, silent
        }),

        new webpack.HashedModuleIdsPlugin(),
    ]);
}

module.exports = config;
