//http://www.jianshu.com/p/42e11515c10f
module.exports = {
    //基础打包功能
    entry: __dirname + "/app/js/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    //监听文件修改
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}