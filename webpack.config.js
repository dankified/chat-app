const path = require("path");

module.exports = {
  entry: ["./public/js/index.js", "./public/css/styles.css"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "dist.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: "babel-loader",
        options: {
          presets: ["env"]
        }
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: ["style-loader", "css-loader"]
      }
    ]
	}, 
	devServer: {
		contentBase: path.join(__dirname, "./public"),
		port: 5000
	},
	watch: true
	
} 