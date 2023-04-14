//webpack配置文件
//给nodejs看的 遵循node模块规范
//src里面的遵循前端模块规范
//实现代码提示
/** @types {import('webpack').Configuration}  */
const path = require("path");
//引入插件
//const HTMLPlugin = require('html-webpack-plugin');

//const devServer = require('webpack-dev-server');

module.exports = {
    mode: "production",//设置打包的模式 production表示生产模式 development 开发模式
    //entry:"",//用来指定打包时的主文件，默认./src.index.js
    //可以传递数组打包多个文件
    output: {
        //path: path.resolve(__dirname, "hello"),//指定打包的目录 必须要绝对路径
        //filename: "main.js",//打包后的文件名
        clean: true,//自动清理打包目录清除main.js path是谁清谁
    },//配置文件打包后的地址
    /*
  webpack默认情况下只会处理js文件，如果要处理其他类型的文件则需要引入loader
  */
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {

                    loader: path.resolve(__dirname, './src/loader.js'),
                    options: {
                        name: 'coming'
                    }
                }
            }
        ]
    },
    //配置css的loader
    // plugins: [
    //     new HTMLPlugin({
    //         title: "hello webpack",
    //         //模板 把src中的html当作模板打包
    //         //template:"./src/index.html"
    //     })
    // ],
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, '/dist'),
    //     },
    //     port: 8000, // 在3000端口开启服务器
    //     hot: true,
    //     open: true // 自动打开浏览器
    // },

}


//loader开发

