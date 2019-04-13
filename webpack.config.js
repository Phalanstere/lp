var webpack = require('webpack');
var path = require('path');


var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },



  module: {
    
      loaders: [
      {
      test: /\.css$/,
      loader: "style-loader!css-loader"
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
      },
      {
      test: /\.txt$/,
      use: 'raw-loader'
    },  
      {
        loader: "babel-loader",
        exclude: /node_modules/,

        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "src"),
        ],



        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,


        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react'],
        }
      },
    ]
  }


};

module.exports = config;
