//http://www.jianshu.com/p/42e11515c10f
module.exports = {
    entry: __dirname + "/app/js/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },

    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}