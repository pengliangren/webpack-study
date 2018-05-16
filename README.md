# Myapp 7.0

## 安装开发指南

- 执行`yarn`或者`npm`安装所有的依赖包

- 复制文件夹`config/ignore-tpl`为`config/ignore`，自己本地的差异化配置在文件夹`config/ignore`内

- myapp项目需要配合[myapp/component]组件库使用

- `config/ignore/index.js`中的基础配置，注意修改为自身环境

```
config.projectPath = 'E:/experiment/myapp' //本地项目目录，可以为绝对路径，也可以是 process.cwd()
config.componentPath = 'E:/experiment/component' //myapp/component组件库在本地的目录
config.projectName = 'myappv7' //上传wapstatic服务器目录

if (!config.img) {
    config.img = {
        spritesmith: {padding: 4}, //雪碧图间距
        retina: true, //retina屏幕
        ratio: 3 //几倍图片资源
    }
}
if (config.userName !== 'component') {
    config.userName = 'damonpfliu' //用户名，填写自身RTX名
}
```

- `config/ignore/index.js`中引入页面配置，如下
```
var config = require('../guide/demo/index.js')
```
- 在`config/guide/demo/index.js`中
```
module.exports = {
    userName: 'component',//用户名，可空
    samePath: '/guide/demo',//子项目目录
    fileName: ['index', 'error'],//页面列表
    commonsChunk: {//抽取公共配置
        name: null,//公共js/css名称 默认commons
        minChunks: null//至少在几个文件内的公共部分才抽取 默认全部
    }
}
```

### 常用命令

- `npm run init`，初始化页面文件，会在`project`目录下生成js文件，在`html`目录下生成html文件，在`scss`目录下生成sass文件，生成模板在`config/ignore`目录下

- `npm run server`，启动开发服务器；或者执行`npm run server-open`，启动开发服务器并打开预览地址

- `npm run publish`，打包文件到publish文件夹

- `npm run upload`，上传文件到wapstatic服务器



### 开发注意事项

- 项目根目录别名`myapp`，组件根目录别名`myapp/component`
- 注意每个页面把ModCSS的引入放到第一位，可以保证reset样式打包后在样式中最顶部

[myapp/component]: http://git.code.oa.com/myapp/component
