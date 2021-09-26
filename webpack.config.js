const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, 'src', 'assets'),
          to: path.resolve(__dirname, 'dist') },
      ]
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'assets'),
    },
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
};
