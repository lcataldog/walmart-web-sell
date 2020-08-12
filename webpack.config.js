/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { environment, name, configuration } = require("./app.config");

module.exports = {
  mode: "development",
  node: {
    module: "empty",
    dgram: "empty",
    dns: "mock",
    fs: "empty",
    http2: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty",
  },
  performance: { hints: "warning" },
  entry: ["@babel/polyfill", path.resolve(__dirname, "src", "index.js")],
  devtool: "cheap-source-map",
  output: {
    publicPath: "/",
    filename: `${name}.js`,
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      components: path.resolve(__dirname, "src/Components/"),
    },
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              paths: [path.resolve(__dirname, "node_modules")],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|ttf|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: process.env.PORT || 8080,
    host: "*",
    allowedHosts: [".herokuapp.com", "localhost"],
  },
  externals: ["window"],
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.ejs"),
      environment,
      configuration,
    }),
    new MiniCssExtractPlugin({
      filename: `${name}.css`,
    }),
  ],
};
