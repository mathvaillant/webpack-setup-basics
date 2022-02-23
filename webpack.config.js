module.exports = {
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
}
