// Thanks to Petr Gazarov
// https://engineering.policygenius.com/typescript-mocha-and-babel-ffd07369792a

/* eslint-disable no-console */

const externals = require("webpack-node-externals");
const config = require("./webpack.config.js");

console.log("\n--- TEST (webpack.config.test.js) ---");

config.target = "node"; //Ignore built-in modules like path, fs, etc
config.externals = [externals()]; //Exclude folder node_modules

module.exports = config;
