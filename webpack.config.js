const path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode: mode,

  entry: './src/index.js',
  output: {
    filename: 'bundle.js', // INSIDE OF STATIC BUNDLED FOLDER, instead of calling main.js, we define the file's name
    path: path.resolve(__dirname, 'public') // INSIDE OF STATIC BUNDLED FOLDER, the folder itself
  },

  module: {
    rules: [
      {
        // what kinda files am I going to run this against
        test: /\.js$/, // any file that ends with .js
        exclude: /node_modules/, // dont run this on node_moduules
        use: {
          // without aditional settings, this will reference .babelsrc
          loader: 'babel-loader',
        },
      },
    ],
  },

  devtool: 'source-map', // helps in troubleshooting bugs

  devServer: {
    static: './dist' // creates the dev server pointing to the ./dist folder
  }
}
