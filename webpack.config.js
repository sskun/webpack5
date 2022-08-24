/*
 * @Descripttion:
 * @version:
 * @Author: Yukun
 * @Date: 2022-07-24 14:58:14
 * @LastEditors: Yukun
 * @LastEditTime: 2022-08-24 16:45:57
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const libraryList = ['amd', 'cjs', 'iife', 'umd'];
module.exports = {
  entry: {
    index: './src/index.js',
  }, //入口
  output: {
    // filename: '[name][contenthash:8].js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].umd.js',
    libraryTarget: 'umd', // 支持amd cmd引入方式
    umdNamedDefine: true,
  },
  // 使用loader loader就是处理和编辑各种文件的能力
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader', // 使用babel
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.md$/, //自定义loader
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: path.resolve(__dirname, './loader/md.js'),
            options: { name: 'yukun' },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'async', // 2. 处理的 chunk 类型
      minSize: 1, // 4. 允许新拆出 chunk 的最小体积
      minRemainingSize: 0,
      minChunks: 1, // 5. 拆分前被 chunk 公用的最小次数
      maxAsyncRequests: 30, // 7. 每个异步加载模块最多能被拆分的数量
      maxInitialRequests: 30, // 6. 每个入口和它的同步依赖最多能被拆分的数量
      enforceSizeThreshold: 50000, // 8. 强制执行拆分的体积阈值并忽略其他限制
      cacheGroups: {
        // 1. 缓存组
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/, // 1.1 模块路径/文件名匹配正则
          priority: -10, // 1.2 缓存组权重
          reuseExistingChunk: true, // 1.3 复用已被拆出的依赖模块，而不是继续包含在该组一起生成
        },
        common: {
          name: `chunk-common`,
          minChunks: 2, // common 组的模块必须至少被 2 个 chunk 共用 (本次分割前)
          priority: -20,
          chunks: 'initial', // 只针对同步 chunk
          reuseExistingChunk: true, // 复用已被拆出的依赖模块，而不是继续包含在该组一起生成
        },
        default: {
          minChunks: 2, // 5. default 组的模块必须至少被 2 个 chunk 共用 (本次分割前)
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
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
