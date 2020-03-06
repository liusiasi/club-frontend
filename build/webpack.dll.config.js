const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry:{
        antd:['antd'],
        react:['react', 'react-dom', 'react-router-dom'],

    },
    output:{
        filename: '[name].dll.js',
        path: path.resolve(__dirname,'../dll'),
        library: '[name]'
    },
    plugins:[
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(__dirname,'../dll/[name].manifest.json'),
        }),
        new BundleAnalyzerPlugin()
    ]
    
}