module.exports = {
  entry: "./madLib.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
  },
  resolve: {
    extensions: ['.coffee','.js']
  }
}
