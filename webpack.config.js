/*
 * @Descripttion:
 * @version:
 * @Author: Yukun
 * @Date: 2022-07-24 14:58:14
 * @LastEditors: Yukun
 * @LastEditTime: 2022-07-24 17:19:06
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    main: './src/main.js',
  }, //入口
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  // 使用loader loader就是处理和编辑各种文件的能力
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  // 开发环境配置,热更新
  devServer: {
    client: {
      progress: true,
    },
    compress: true,
    port: 9000,
    open: true,
  },
  mode: 'development',
};
