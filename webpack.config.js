const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const development = process.env.NODE_ENV === 'development';

const processEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    SERVER: JSON.stringify(process.env.SERVER),
  },
});

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
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
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=./assets/img/[name]-[hash].[ext]',
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf|svg)$/,
        exclude: [/node_modules/, /img/],
        loader: 'url-loader?limit=1024&name=./fonts/[name]-[hash].[ext]',
      },
      {
        test: /\.svg$/,
        exclude: /fonts/,
        loader: 'file-loader',
        options: {
          name: './assets/img/[name]-[hash].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      // favicon: './src/common/assets/img/favicon.ico',
    }),
    processEnvPlugin,
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@Application': path.resolve(__dirname, './src/application/'),
      '@Common': path.resolve(__dirname, './src/common/'),
      '@Player': path.resolve(__dirname, './src/player/'),
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: development,
        cache: true,
        parallel: true,
        terserOptions: {
          compress: true,
          ecma: 6,
          mangle: true,
        },
      }),
    ],
  },
  devServer: {
    // noInfo: true,
    // HTML5 router
    historyApiFallback: true,
    disableHostCheck: true,
    hot: false,
    // Auto refresh
    inline: false,
  },
  mode: process.env.NODE_ENV,
  devtool: development && 'source-map',
};
