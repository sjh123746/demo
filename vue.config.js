
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
        // 告诉浏览器匹配什么文件
        test: /\.css$/,
        // 告知webpack使用哪一个loader, 前提是安装好
        ues: [
          { loader: "css-loader" }
        ]
      }
    ]

  }
}
