module.exports = {
    devServer: {
        overlay: { // eslint 错误蒙层
            warning: false, // 警告
            errors: false // 错误
        },
        proxy: {
            "/api":{
                target:"http://v.juhe.cn/",
                changeOrigin: true, // 改变源就是跨域处理
                ws: true, // webscoket 开启
                secure: false, // http 检查
                pathRewrite: {
                    "^/api": "" // ^ 代表当前的域名, 后面跟上api路径, 内容不填就可以
                }
            }
        }
    },
    lintOnSave: false // eslint ...
}
