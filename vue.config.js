// vue.config.js

module.exports = {
    publicPath: '/buddle6091.github.io',
   
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "./src/UI/scss/_variable.scss";
                @import "@/UI/scss/_mixins.scss";
                `
            }
        }
    },
    devServer:{
        /* clientLogLevel: 'info',
        host: 'localhost', */
        /* proxy 대신 heroku 사용 */
    /*    '/' : {
            "target": 'http://apis.data.go.kr',
            "pathRewrite": {'^/': ''},
            "changeOrigin": true,
            "secure": false 
        }  */
    }
}