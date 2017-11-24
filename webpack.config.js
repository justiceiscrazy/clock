const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: { contentBase: './dist' },
  devtool: 'inline-source-map',
  entry: './src/index.jsx',
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.(js|jsx)/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: __dirname + '/src/index.html',
      title: 'Terrible',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
