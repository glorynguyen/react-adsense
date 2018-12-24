
var webpack = require('webpack');
var path = require('path');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  module: {
    loaders:[
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      }, 
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, 
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=512'
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ]
};
