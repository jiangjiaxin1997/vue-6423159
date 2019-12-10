module.exports = {
    devServer:{
        proxy:{
            "/hehe":{
                target:"http://ustbhuangyi.com",
                changeOrigin: true,
                pathRewrite:{
                    "^/hehe":''
                }
            },
            "/xixi":{
                target:"http://ustbhuangyi.com",
                changeOrigin: true,
                pathRewrite:{
                    "^/hehe":''
                }
            }
        }
    }

}
