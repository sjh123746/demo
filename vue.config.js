
const path = require("path");
module.exports = {
  
 

  // 导出配置信息
  
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build")
  },

  // 配置loader
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
    }

    ]

  }
}
