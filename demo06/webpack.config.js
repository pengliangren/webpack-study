var path = require('path');


module.exports ={
    mode : 'development', // 这里是webpack4 的规则，表明这里是生产模式或者是开发模式
    entry : {
        app : './src/app.js',
    },

    output :{
        path : path.resolve(__dirname,'dist'),
        publicPath : './dist/',  // 公共路径
        filename : '[name].bundle.js'
    },

    module : {
        rules :[
            {
                test : /\.css$/,
                use :[
                    {
                       loader : "style-loader",   // 一般 style-loader 是直接在header 标签里面生成一个style标签，里面放css属性
                        options :{
                            // insertInto : '#app'  ,  // 表示style 插入到 id 名为app 的dom结构中
                            singleton : true,    // 是否只使用一个style标签
                            transform : './css.transform.js'
                        }                            
                    },
                    {
                        loader : 'css-loader' ,  // style-loader 对应的是css-loader 
                        // loader : "file-loader"     // style-loader/url 对应的是 file-loader 

                        options:{
                            // minimize :true   ,  //  会压缩css代码,把空格去掉
                            modules : true,
                            localIdentName : '[path][name]_[local]_[hash:base64:5]' , // 定义规范  class 名称
                        }
                    }
                ]
            }
        ]
    }
}