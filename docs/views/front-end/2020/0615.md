---
title: Vant初体验
date: 2020-06-15
tags:
 - vant
categories:
 - front-end
sidebar: false
---

::: tip
根据[Vant官方QuickStart](https://youzan.github.io/vant/#/zh-CN/quickstart)我搭建了一个能访问主页的程序
:::
``` bash
# ①安装 Vue Cli，我省略了这一步，因为我之前就安装好了
npm install -g @vue/cli

# ②创建一个项目，之所以在本地创建，是因为我需要用git管理它
vue create .

# ③创建完成后，可以通过命令打开图形化界面添加Vant依赖，官方QuickStart有图片指南
vue ui

# ④安装自动引入组件的插件
npm i babel-plugin-import -D
```
做完这些，你就可以访问到一个主页了
``` bash
# 启动
yarn serve
```
![默认首页截图.jpg](./../../images/vant-index.jpg)
但是，还缺少路由模块。

## 路由模块
1. 可以在刚才打开的vue ui继续添加vue-router，也可以执行以下命令安装。
``` bash
npm install vue-router
```
2. 添加路由配置文件
``` bash
mkdir src/router/ && cd src/router && touch index.js
```
``` javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './../components/HelloWorld'
import Test from './../components/Test'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        }
    ]
})
```
3. 修改main.js文件
``` javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router/index' //新增

Vue.config.productionTip = false

new Vue({
  el: '#app', //新增，这里的app是在App.vue文件中定义的ID
  router, //新增
  render: h => h(App),
}).$mount('#app')
```
4. 修改App.vue文件的template
``` javascript
<template>
  <div id="app">
    <router-view /> //这里特别需要注意，需要加一个这个标签
  </div>
</template>
```
![Test页面访问截图.jpg](./../../images/vant-test.jpg)

参考
1. [Vant官方QuickStart](https://youzan.github.io/vant/#/zh-CN/quickstart)
2. [vue-cli + vant 路由的设置](https://www.jianshu.com/p/1f060b5c6211)
3. [脚手架创建vant Vue项目](https://www.jianshu.com/p/9ad3ba9bd226)
4. [初来乍到-Vue+Vant+Vuex+Vue-router+less实现公司需求(一)：换肤](https://blog.csdn.net/weixin_33895695/article/details/91379491)
