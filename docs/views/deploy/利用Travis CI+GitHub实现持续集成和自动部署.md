# 利用Travis CI+GitHub实现持续集成和自动部署

# 前言

如果你手动部署过项目，一定会深感持续集成的必要性，因为手动部署实在又繁琐又耗时，虽然部署流程基本固定，依然还是容易出错。

如果你很熟悉持续集成，一定会同意这样的观点：“使用它已经成为一种标配”。

> 什么是持续集成 Continuous Integration(CI) is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early. ———ThoughtWorks
> 翻译过来就是：持续集成是一个开发行为，它要求开发者每天多次将代码集成到一个共享的仓库，每次提交都会被自动构建所检查，团队可因此提前检测出问题。

持续集成的工具非常多，例如用java语言开发的Jenkins，由于其可以在多台机器上进行分布式地构建和负载测试的特性，很多大公司都在使用它。

但是Jenkins的不加修饰的界面界面让我有些嫌弃...

随着GitHub的发展，出现了越来越多支持GitHub的CI/CD产品。在GitHub市场上，可以看到，已经支持的持续集成服务提供商已超过300多家（[详情](https://github.com/marketplace/category/continuous-integration)）。 选择Travis CI，是因为身边很多朋友的推荐。

![github continuous integration.jpg](https://user-gold-cdn.xitu.io/2019/10/4/16d94b6d5fc0b82c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



下面分享一下我是如何利用Travis CI+GitHub实现持续集成和自动部署的，通过我的一些研究和实战经验，希望可以帮到有需要的朋友。

## 什么是Travis CI

Travis CI是用Ruby语言开发的一个开源的分布式持续集成服务，用于自动构建和测试在GitHub托管的项目。支持包括Javascript、Node.js、Ruby等20多种程序语言。对于开源项目免费提供CI服务。你也可以买他的收费版，享受更多的服务。

> Travis CI目前有两个官网，分别是 [travis-ci.org](https://travis-ci.org/) 和 [travis-ci.com](https://travis-ci.com/) 。 [travis-ci.org](https://travis-ci.org/) 是旧平台，已经逐渐往新平台 [travis-ci.com](https://travis-ci.com/) 上迁移了。对于私有仓库的免费自动构建，Travis CI在新平台上给予了支持。



![travis-CI-0.jpg](https://user-gold-cdn.xitu.io/2019/10/4/16d94bb042eed827?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



## 一、获取GitHub Access Token

Travis CI在自动部署的时候，需要push内容到仓库的某个分支，而访问GitHub仓库需要用户授权，授权方式就是用户提供 Access Token 给Travis CI。

获取token的位置：`GitHub->Settings->Developer Settings->Personal access tokens`。

勾选`repo`下的所有项，以及`user`下的`user:email`后，生成一个token，复制token值。

> 注意：这个token只有现在可以看到，再次进入就看不到了，而且是再也看不到了，忘记了就只能重新生成了，所以要记住保管好。



![personal-access-token-variable.jpg](https://user-gold-cdn.xitu.io/2019/10/4/16d94e811e5d8fd1?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



## 二、使用GitHub账号登录Travis

进入[Travis官网](https://www.travis-ci.org/)，用GitHub账号登录。（我目前使用的是它的旧平台）

![travis-ci-1.jpg](https://user-gold-cdn.xitu.io/2019/10/4/16d94bf87bdf6696?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



登录后，会在Travis里看到自己GitHub账号下所有的public open source repo。

## 三、开启对项目的监控

选择目标项目，打开右侧开关。

![travis-CI-4.jpg](https://user-gold-cdn.xitu.io/2019/10/4/16d94c01e2ac75b7?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



## 四、配置travis

- 点击开关右侧Settings，进入该项目的travis配置页

- 勾选触发条件

  ![travis-CI-7.jpg](https://user-gold-cdn.xitu.io/2019/10/4/16d94c07b9d2ca62?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

- 设置全局变量

  ![travis-CI-8.jpg](https://user-gold-cdn.xitu.io/2019/10/4/16d94c0de02d4d8b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

  注意：第一步获取的access token，必须设置

  设置好的变量可以在配置文件中以 ${变量名}来引用。

  ![travis-CI-9.jpg](https://user-gold-cdn.xitu.io/2019/10/4/16d94c2446b08a02?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 五、在项目根目录添加`.travis.yml`配置文件

> 注意文件名以`.`开头。

**Travis CI的一次构建分两个步骤：**

1. install安装，安装任何所需的依赖
2. script脚本，运行构建脚本

**Travis CI提供了一些构建生命周期的“钩子”**

一个完整的 Travis CI 构建生命周期：

1. OPTIONAL Install `apt addons`
2. OPTIONAL Install `cache components`
3. `before_install`
4. `install`
5. `before_script`
6. `script`
7. OPTIONAL `before_cache`(for cleaning up cache)
8. `after_success` or `after_failure`
9. OPTIONAL `before_deploy`
10. OPTIONAL `deploy`
11. OPTIONAL `after_deploy`
12. `after_script`

在 `before_install`、`before_script`之前，或者`after_script`之后，都可以运行自定义命令，详细资料可参考官方文档：[Job Lifecycle](https://docs.travis-ci.com/user/job-lifecycle/)

我在`footprint`项目中的`.travis.yml`完整配置：

```
language: node_js #设置语言

node_js: "10.16.3" #设置语言版本

cache:
  directories:
    - node_modules #缓存依赖

# S: Build Lifecycle
install:
  - npm i

script:
  - npm run build

#after_script前5句是把部署分支的.git文件夹保护起来，用于保留历史部署的commit日志，否则部署分支永远只有一条commit记录。
#命令里面的变量都是在Travis CI里配置过的。
after_script:
  - git clone https://${GH_REF} .temp
  - cd .temp
  - git checkout gh-pages
  - cd ../
  - mv .temp/.git dist
  - cd dist
  - git config user.name "${U_NAME}"
  - git config user.email "${U_EMAIL}"
  - git add .
  - git commit -m ":construction_worker:- Build & Deploy by Travis CI"
  - git push --force --quiet "https://${Travis_Token}@${GH_REF}" gh-pages:${D_BRANCH}
# E: Build LifeCycle

# 只有指定的分支提交时才会运行脚本
branches:
  only:
    - master
复制代码
```

## Done！

将 `.travis.yml` push 到远程，可以看到 travis 开始构建编译了。并且之后每次push代码，travis 都会自动执行`.travis.yml`里配置的脚本任务了。

- 自动编译：

  ![travis-CI-6.jpg](https://user-gold-cdn.xitu.io/2019/10/4/16d94cb5439c34dc?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

  

- 构建完，travis 会根据我的配置，自动部署到 GitHub：

  ![travis-CI-10.jpg](https://user-gold-cdn.xitu.io/2019/10/4/16d94cbfac0a6c9d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

  

## And One More Thing

构建成功后，我们就可以在自己的GitHub项目里添加`build`徽章了。 方法：在Travis里，点击项目右侧的徽章，即可获取小徽章地址，将地址放在README.md文档中即可。

![travis-CI-12.jpg](https://user-gold-cdn.xitu.io/2019/10/4/16d94cd4721a614b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

效果：

![travis-CI-11.jpg](https://user-gold-cdn.xitu.io/2019/10/4/16d94cdbbcc468b1?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)