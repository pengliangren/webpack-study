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
                    //    loader : 'style-loader/url',     // 而file-loader 会是直接生成link标签引入css文件，而且还要在上面加一个公共路径 publicPath、
                                                         //  但是这种功能一般比较少用，因为多个link标签会影响加载速度  一般用上面的方法

                        //   loader : "style-loader/useable",   // 用户控制 style使用或者不使用   
                        options :{
                            insertInto : '#app'  ,  // 表示style 插入到 id 名为app 的dom结构中
                            singleton : true,    // 是否只使用一个style标签
                            transform : './css.transform.js'
                        }                            
                    },
                    {
                        loader : 'css-loader'   // style-loader 对应的是css-loader 
                        // loader : "file-loader"     // style-loader/url 对应的是 file-loader 
                    }
                ]
            }
        ]
    }
}