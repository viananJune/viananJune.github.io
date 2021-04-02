https://segmentfault.com/a/1190000017008697

vueCli全面配置

# vue项目在打包时，去掉所有的console.log输出

### vue项目在打包时，去掉所有的console.log输出

- - - [安装插件](https://blog.csdn.net/weixin_43242112/article/details/107834469#_1)
    - [添加配置](https://blog.csdn.net/weixin_43242112/article/details/107834469#_5)



### 安装插件

```
npm install babel-plugin-transform-remove-console --save-dev
1
```

### 添加配置

安装babel-plugin-transform-remove-console开发依赖，然后在项目的`babel.config.js`的plugin中添加节点。再build就不会有console警告了。
如下配置无论在开发环境还是生产环境都会去掉所有的console输出语句。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200806110221769.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI0MjExMg==,size_16,color_FFFFFF,t_70)
但是`babel.config.js`文件是全局共享的，无论是开发阶段还是生产阶段，都会移除所有的console，我们想在开发阶段保留console该怎么做呢？如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200806110324711.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI0MjExMg==,size_16,color_FFFFFF,t_70)
代码：

```javascript
// 项目在发布时需要用到的babel插件数组
const proPlugins = [];
// 如果当前是生产环境，则使用去掉console的插件
if (process.env.NODE_ENV === 'production') {
    proPlugins.push('transform-remove-console');
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins:[
    ...proPlugins
  ]
}
```