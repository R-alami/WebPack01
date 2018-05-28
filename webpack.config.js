const path = require("path");

const webpack = require('webpack');

module.exports = {
    // Th main file for our js
    entry: "./src/index.js",
    // The output files
    output: {
        // where we want to put our outpt files
        path: path.resolve(__dirname, "dist/"),
        // The name for our main file
        filename: "bundle.js"
    }, 
     module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    devServer: {
      contentBase: './dist',
      hot: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ];
}