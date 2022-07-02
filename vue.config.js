// vue.config.js 文档参考：https://cli.vuejs.org/zh/config/#vue-config-js
const path = require('path')

console.log(process.argv);

// 定义多modules页面配置
let projName = process.argv[3];
let develop = false;
const port = process.env.MODULE_PORT || 8080
// --mode 这里作为是否develop模式，即local server启用模式
if (projName === '--mode' && process.argv[4]) {
  projName = process.argv[4] || ''
  develop = true
}

if (!projName) {
  console.log('未指定模块');
  return false;
}


console.log(projName)
const pageConfig = {
  entry: "./src/modules/" + projName + "/main.js",
  // 模板来源
  template: "./src/modules/" + projName + '/html/index.html',
  // 在 outputDir 的输出
  filename: 'index.html',
  // 在这个页面中包含的块，默认情况下会包含提取出来的通用 chunk 和 vendor chunk。
  chunks: ['chunk-vendors', 'chunk-common', projName]
}
const pages = {};
pages[projName] = pageConfig;

const config = {
  productionSourceMap: !!develop, // 生产环境 sourceMap
  publicPath: develop ? '/public/build/' + projName : "/",
  // 指定npm run build 输出目录
  outputDir: "./public/build/" + projName,
  // multi-page 模式
  pages: pages,
  devServer: {
    contentBase: path.resolve(__dirname, './'), // 定义页面文件的位置
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/public/build/' + projName + '/index.html' }
      ]
    },
    clientLogLevel: 'warning',
    // 在页面上全屏输出报错信息
    overlay: {
      warnings: true,
      errors: true
    },
    // 显示 webpack 构建进度
    progress: true,
    // 跟 friendly-errors-webpack-plugin 插件配合
    quiet: true,
    hot: true,
    inline: true,
    port: port, // 端口你可以自定义
  }
}

module.exports = config;