var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const config = {
  mode: 'development',
  entry: {
    main:'./src/index.js',
  },
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
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: devMode,
            reloadAll: true,
          },
        },
        'css-loader',
      ]
    },
    {
      test: /\.less$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: devMode,
            reloadAll: true,
          },
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          }
        },
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
    filename: devMode ? 'js/[name].js' : 'js/[name].[hash].js',
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new AntdDayjsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css'
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    usedExports: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          name: 'common',
        }
      },
    },
  },
}

if (devMode) {
  config.devtool = 'cheap-module-eval-source-map';
  config.devServer = {
    contentBase: path.resolve(__dirname, 'dist'),
    overlay: true,
    hot: true,
    open: true,
    port: 8086,
    historyApiFallback: {
      rewrites: [{
        from: /abc.html/,
        to: '/index.html',
      }],
      index: '/index.html'
    },
    proxy: {
      '/stapi': {
        target: 'http://admin.swczyc.com',
        changeOrigin: true,
      }
    }
  }
} else {
  config.optimization.minimizer = [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})];
  config.plugins.push(
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }))
}



module.exports = config
