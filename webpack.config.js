var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin }= require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-eval-module-source-map',
  entry: './src/index.js',
  resolve: {
    alias: {
      page: path.resolve(__dirname, 'src/page'),
      component: path.resolve(__dirname, 'src/component'),
      common: path.resolve(__dirname, 'src/common'),
      util: path.resolve(__dirname, 'src/util'),
      service: path.resolve(__dirname, 'src/service')
    }
  },
  module: {
    rules: [{
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: 'resource/[name].[ext]',
          limit: 2048,
        },
      },
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ]
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
          },
        },
        'sass-loader',
      ],
    },
    {
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            modifyVars: {
              '@primary-color': '#417dc9',
              '@link-color': '#417dc9',
            },
            javascriptEnabled: true,
          },
        }]
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
        },
      },
    },
  },
  devServer: {
    overlay: true,
    open: true,
    hot: true,
    port: 8086,
    historyApiFallback: {
      rewrites: [{
        from: /abc.html/,
        to: '/index.html',
      }],
      index: '/index.html'
    },
    historyApiFallback: true,
    proxy: {
      '/stapi' : {
        target: 'http://admin.swczyc.com',
        changeOrigin: true,
      }
    }
  },
}