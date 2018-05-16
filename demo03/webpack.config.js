module.exports ={
    entry :{
        'app' : './src/app.ts'
    },

    output :{
        filename :'[name].bundle.js'
    },

    modules:{
        rules:[
            {
                test :/\.tsx?$/,
                use:{
                    loader : 'ts-loader'
                }
            }
        ]
    }
}