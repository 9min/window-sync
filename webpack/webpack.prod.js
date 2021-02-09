const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { srcPath, prodPath } = require('./path');

module.exports = {
  entry: './' + srcPath + '/index.js',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(srcPath),
    },
  },
  output: {
    path: path.resolve(__dirname, prodPath),
    filename: 'window-sync.min.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
