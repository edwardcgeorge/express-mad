module.exports = {
  entry: "./madLib.js",
  output: {
    path: __dirname+"/dist",
    filename: "bundle.js"
  },
  module: {
  },
  resolve: {
    extensions: ['.coffee','.js']
  }
}
