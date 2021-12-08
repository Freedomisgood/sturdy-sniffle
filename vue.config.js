module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: "dist",
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/css/style.scss";`
            }
        }
    },
    // devServer:{
    //     host: 'localhost',
    //     open: true, 			// vue项目启动时自动打开浏览器
    //     port: 8080,             // 本地代理服务器使用的端口
    //     proxy: {  				//配置跨域
    //       '/api': {				// `/api`是代理标识，用于告诉node，url前面是`/api`的就是使用代理的
    //         target: 'http://127.0.0.1:5501/',  // 目标地址，应该写提供接口的后台服务器的真实地址
    //         changOrigin: true,  	// 是否跨域
    //         pathRewrite: {
    //           '^/api/v1': '/api/v1' 			// 把实际request URL中的`/api`用``来代替
    //          /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时, 实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo */
    //         }
    //       },
    //     }
    // }
}
