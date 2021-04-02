---
title: VuePress + Travis CI + Github Pages搭建个人博客
date: 2021-04-02
tags:
  - 持续集成
categories:
  - front-end
sidebar: false
---

::: tip

- vuepress 简洁易用
- Github Pages 配合 github 好管理
- travis-ci 足够自动化
  :::

# 创建 github 工程

### 创建一个 username.github.io 的仓库，username 是你 github 的名称

https://username.github.io/blog访问到的只能是master分支的内容，这会带出一个很棘手的问题：“为何我什么都配置了，最后只能显示master代码分支的README.md文件，不是预期的gh-pages分支里的静态文件?”。

解决的办法也有，那就是顺着它的思路，使用 mater 分支当做 build 后静态资源存放的分支，代码分支放到别处去。参考[拯救懒癌文档君 - VuePress + Travis CI + Github Pages 自动线上生成文档](https://juejin.im/post/5d0715f6f265da1ba56b1e01)

# 根据 vuepress-theme-reco 创建出 vuepress 工程（qiuzhongrun 老哥的教程）

1. 下载空 github 工程

```sh
# 注意你clone你自己的路径哈，下面这个是我的举例
git clone git@github.com:viananJune/viananJune.github.io.git

# 进入工程
cd viananJune.github.io(项目根目录)
```

2. 初始化 vuepress 工程
   在主题的[Github 地址](https://github.com/vuepress-reco/vuepress-theme-reco)有很清晰的初始化方式，下面贴出我的。

```sh
# 添加theme-cli工具
yarn global add @vuepress-reco/theme-cli

# 请注意这里的 . 意思是当前blog目录下
theme-cli init

# install
yarn install

# run
yarn dev

# build
yarn build
```

在 theme-cli 工具 init 一个工程的时候，会让你选 style，我选了 afternoon-grocery，会带来很多已存在的文章，但是也给了很多我参考，后续删除即可。

```sh
? What's the title of your project? blog
? What's the description of your project? 个人博客
? What's the author's name? Qiu Zhongrun
? What style do you want your home page to be?(Select afternoon-grocery, if you want to download alexwjj's '午后南杂')
  blog
  doc
❯ afternoon-grocery
```

3. 修正偏差
   ① 添加 base
   ② 修改 title
   ③ 修正 dest 目标路径为 docs/.vuepress/dist

```javascript
module.exports = {
  base: '', # ①添加base, 为了后面访问的时候有上下文，没有这玩意儿，你访问就会出问题
  title: "欢迎你，这是我的博客！", # ②修改title，自己看着办哈
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'docs/.vuepress/dist', # ③修正dest目标路径为docs/.vuepress/dist，这个必须和稍后的自动部署的local_dir保持一致
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart']
}
```

# travis-ci 部署

参考这里的[自动部署](https://vuepress-theme-reco.alexwjj.com/views/other/deploy.html#%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2)，这里不展开讲，只讲一些注意点。

1. build 命令里面写的是`npm run build`，如果你看着不顺眼，可以修改为`yarn build`意思是一个意思。
2. 设置 token 的时候，除了 delete repo 的权限不给，其他都给上吧。
3. 授权 travis-ci Manage repositories on GitHub 的时候，不要全选，就选你要的就行
4. 要在https://github.com/qiuzhongrun/blog/settings，也就是你的github repository 的 Settings 里修改 Github Pages 的 Source 为 gh-pages，这个分支你可以自己建，也可以等第一次跑完 travis-ci 它自动创建好后再选。
   注意： 1.需要将 blog 名称命名为 yourname.github.io,github pages 规范，博客访问路径便是 yourname.github.io
   2.travis 变量值 GH_REF 为 github.com/yourname/yourname.github.io
   例如：github.com/viananJune/viananJune.github.io
   到此，只要 push 一次代码，就会触发 travis-ci 自动 build，推送到指定分支(gh-pages)，然后你在https://qiuzhongrun.github.io/blog就可以访问到了。

# 后记

后续使用的时候，发现一些问题，这里也记录下来以供参考。

### 热部署 Hot Reload

没错，vuepress 1.x 这个功能是有问题的，在这个[#issue](https://github.com/vuejs/vuepress/issues/1283)里有讲，至今未见关闭。
解决办法也有多人提出多种方案，我采用[pepsifan](https://github.com/pepsifan)提出的 nodemon 解决方案，亲测有效。
下面是[pepsifan](https://github.com/pepsifan)的方案：

1. 安装 nodemon

```sh
npm i -D nodemon
```

2. 修改 package.json，增加命令

```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "start": "nodemon --ext md,vue --watch .vuepress --watch . --exec vuepress dev docs" # 新增的启动命令
  },
```

3. start 启动

```sh
yarn start
```

这个方案监控了.vue 和.md 文件的变动，会触发 vuepress 工程 reload，浏览器刷新可见新内容。

## 参考文章

- [拯救懒癌文档君 - VuePress + Travis CI + Github Pages 自动线上生成文档](https://juejin.im/post/6844903869558816781)
- [GitHub Pages 自定义域名](https://juejin.im/post/6844903558106578957)
