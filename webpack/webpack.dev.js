const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    filename: '[name].[chunkhash].js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, prodPath),
    compress: true,
    overlay: true,
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true,
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
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: 'public/popups/popup_1.html',
      filename: 'popups/popup_1.html',
    }),
    new HtmlWebpackPlugin({
      template: 'public/popups/popup_2.html',
      filename: 'popups/popup_2.html',
    }),
  ],
};
