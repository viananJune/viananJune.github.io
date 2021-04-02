前端必备javascript书籍测评【含红宝书和绿皮书】

大家好，我是大圣，今天给大家带来期待已久的javascript书籍测评，工作者9年多看过的js书大部分都在这了，会分成这几个部分来推荐

首先是系统化学习js的书，让你掌握前端工程师必备的js基础，

然后是一些横向扩展的书，比如算法呀，设计模式呀，工程实现呀，框架设计呀等，属于最佳实践的类型， 然后是关于语言设计细节的进阶书，深入语言设计的细节，进阶和面试装逼必备

然后是一些小书，可以快速翻越，掌握js某一个知识点，  然后是略微过时，但是依然值得一读的经典，  最后介绍关于es6和不推荐的书

这是文字稿，视频已经发布在B站，欢迎移步 [www.bilibili.com/video/BV15f…](https://www.bilibili.com/video/BV15f4y1D7Fo)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0589da8d34f4ac28a8087a5ef4ab0b2~tplv-k3u1fbpfcp-zoom-1.image)

## 语言体系化学习

### javascript dom编程艺术

[book.douban.com/subject/603…](https://book.douban.com/subject/6038371/)

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/65794487c95445f9a007f923bc41a4e2~tplv-k3u1fbpfcp-zoom-1.image)

首先语言本身的体系化学习，首先推荐这本《javascript dom编程艺术》，这本书用简单的图片库和动画案例，让你快速入门js，产生兴趣，如果想全面的学习js还是不够的， 推荐这本刚上线不久的前端圣经，也被几代前端人称为红宝书

### javascript高级程序设计（红宝书）

[book.douban.com/subject/351…](https://book.douban.com/subject/35175321/)

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1f4cc83358f24effb1f40fb7b9a28812~tplv-k3u1fbpfcp-zoom-1.image)

《javascript高级程序设计》第四版，我手里还有第二版和第三版，是几代前端体系化学习js必看的书， 和犀牛书齐名，虽然叫高级程序设计，但是阅读难度比较低，第四版全面使用es6+的语法，比较意外的是还把生成器迭代器，promise，proxy单独抽离成了章节，最近有研究vue3源码，对proxy和reflect困惑的同学们快去学习吧，除了语法层面的全面更新，浏览器方便也加入了dom4的规范，比如mutation observer，这个api在我们统计一些指标比如FMP的时候很有用，然后就是canvas，webgl以及各种现代浏览器的api，比如文件，通知，web worker，错误处理，模块化以及最佳实践，第四版绝对是体系化学习js最好的书

而且最近这本书唯一的吐槽点，就是把promise翻译成了期约，我还专门问了hax，之所以叫期约定，是因为promise这个东西，在有的语言里叫future， 这里做了个合并，把future和promise合并，称之为期约，其实我也觉得promise不翻译就ok，但是如果翻译的话，期约算是很准确了，不过无伤大雅，不耽误这本书的地位

对了 这本书估计看一遍不够，看个两三遍效果更好，十月份我准备再看一遍

其实体系化学习js这两本就够了， 还有几本电子书我也很推荐

### 现代javascript教程（在线）

[zh.javascript.info/](https://zh.javascript.info/)

![image-20200926135619652](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08522b08acf14ef095ac2d52775aa167~tplv-k3u1fbpfcp-zoom-1.image)

一个是《现代javascript教程》 ，实时性做的非常棒，从入门，提升和进阶三个方向讲解，并且还配有习题和解析，配合红宝书学习体验更佳 但是我本人不太爱看电子书， 所以现在把它当做工具书来查询用

### practical-modern-javascript 深入理解JS特性

[github.com/mjavascript…](https://github.com/mjavascript/practical-modern-javascript)

![image-20200926135619652](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cacae7b6c7c843b289b2fdbcac6b5e80~tplv-k3u1fbpfcp-zoom-1.image)

还有一本就是深入理解JS特性，是一本很精彩的从es6讲起的书，很推荐，但是建议在阅读红宝书之后看， 我们有了前端的知识体系后，这本书的收获会巨大，而且这哥们有一系列书，后面几本回头我看完了再补充，



![image-20200929082825882](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da749710918d4c78b309696c640d8219~tplv-k3u1fbpfcp-zoom-1.image)



## 横向扩展

学完这些对付一般的前端面试就没问题了，但是行走江湖只有武器是不够的，还需要精妙的武功秘籍，也就是最佳实践

### JavaScript忍者秘籍（第2版）

[book.douban.com/subject/301…](https://book.douban.com/subject/30143702/)

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d60b0570f9cd452a95964ad7bc4494fb~tplv-k3u1fbpfcp-zoom-1.image)

首先推荐jquery作者的《javascript忍者秘籍》名字很中二，但是内容包含了实现常见功能的最佳实践，第二版也是es6+为主，重点集中在工程问题的捷达上，比如函数的上下文，promis的实现，宏任务微任务，闭包的原理以及浏览器开发技巧等，这本书最大的有点就是学起来有趣，不过翻译有些小问题，建议有实力的直接看英文版

这本书所有章节，都是从具体的实际问题入手，不纠结太多语法细节，非常推荐

### javascript框架设计

[book.douban.com/subject/271…](https://book.douban.com/subject/27133542/)

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/70ffa1d594934e11af264eb7806b5dda~tplv-k3u1fbpfcp-zoom-1.image)

然后推荐《javascript框架设计》主要是针对各种兼容性，包括语言能力扩展，选择器引擎，类，异步模型，动画引擎等，有太多兼容性的处理方案，对js功底提升明显，不过在现代浏览器普及的今天，稍微有一些过时，不过还是推荐一下，仅此纪念一下司徒正美

### javascript设计模式与开发实践

[book.douban.com/subject/263…](https://book.douban.com/subject/26382780/)

![img](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="800" height="600"></svg>)

然后推荐设计模式相关，两本书，主推这本《javascript设计模式与开发实践，设计模式就是最佳实践，就像我们打王者，亚瑟就是要走上单，吉吉国王就是最适合打野，每个英雄特点不一样，就会诞生出各种战斗力最强的组合和装备选择，设计模式也是如此，我们通过学习前人总结的最佳实践，并且通过js种的实战加深理解，包括单例代理工厂迭代器，发布订阅享元，装饰器等模式，和一些常见的编程原则，是一本不可多得的好书，不过例子还是显得过于分散，其实我觉得设计模式特别适合和前端的组件库一起讲解，通过一个体系化的组件库来讲解各种不同的设计模式，以后有机会我写一本 yeah

### 学习javascript数据结构和算法

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b15a17be0e4747f6b4551a6fb9a9dd75~tplv-k3u1fbpfcp-zoom-1.image)![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f4d80b9cd87a44b0b3602ba69119feb1~tplv-k3u1fbpfcp-zoom-1.image)

然后是算法，除了我手里这本，还有一个挖掘机配色的js算法书，这两本其实讲的都还不错，不过我都不推荐，因为算法只入个门是没意义的，需要体系化的学习和刷题，算法我推荐《算法》第四版，java的例子，正好用js重写一遍，建立完算法知识体系后，再来看这些js算法书查缺补漏一下更好，以后有机会我再做个节目推荐一些学算法的书

如果只看这两本js的算法书，质量虽然不错，但是会有一钟学了很多东西，但实际没啥卵用

## 深入语言细节

上面的书看完，就已经对js的方方面面有了一个很好的掌握了，继续进阶，就需要对js本身语言设计细节和执行原理有所涉猎了， 当年Brendan Eich来过一次中国，有幸合影后，在js作者的光环下我要开始去研究js的实现细节， 在推荐一系列技术书之前，先推荐一本刚发布的电子书

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/91460eaebe3745a5b390991a407bd040~tplv-k3u1fbpfcp-zoom-1.image)

### Javascript20周年（历史书）

[cn.history.js.org/](https://cn.history.js.org/)

本书由 JavaScript 之父 Brendan Eich 与 ES6 规范首席作者 Allen Wirfs-Brock 联合编写，记录1995~2015共计 20 年的 JavaScript 演化经历。全书不仅讲解了大量语言技术细节层面的演进，更复盘了更高层面上规范制定与标准博弈中的历史成败，是一部讲述人类如何在商业与技术上的竞争合作中促进产业发展的故事

现在被知乎的[doodlewind雪碧大兄弟](https://www.zhihu.com/people/doodlewind)翻译，从语言诞生，创立标准，改革失败和继往开来四部分讲解javascript如何从一个草鸡语言，发展到现在的繁荣，除了当做八卦看之外，我们能了解现在每个语法，都不是天生如此，也不是某个龟腚，而是诸多的权衡讨论的结果，还能了解现在js的规范TC39组织推进语法改进的方式，而且也是装逼吹牛逼必备的历史知识

### 你不知道的javascript （小黄书）

[github.com/getify/You-…](https://github.com/getify/You-Dont-Know-JS)

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93e143e810584e04b7aba94dbe80b887~tplv-k3u1fbpfcp-zoom-1.image)

深入javascript这本语言的设计细节,首先推荐小黄书系列，你不知道的javascript，英文版github开源，但是我觉得看上册就够了，深入了解原型链，this，闭包，词法作用域等，第一次读到感觉重塑了对js的理解，中册也还不错，关于异步编程和生成器的内容值得一读，下册就算了，就是介绍了一点es6， 期待第二版

### how javascript works(电子书和书)

[book.douban.com/subject/303…](https://book.douban.com/subject/30362974/)

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/858f0599806d4cce9fc7ef7d437b3ce1~tplv-k3u1fbpfcp-zoom-1.image)

还有一本就是精粹的作者写的 how javascript works，我还在等国内发行，github有开源的版本可以阅读，探究js的执行原理和一些高级的api，比如v8引擎，内存管理，webassembly,mutationObserver, 性能优化，语法解析，shaodowdom等方方面面，据说中文版[死月](https://www.zhihu.com/people/xadillax)翻译中，期待一下

这两本电子书都出版的话，我一定多买点送人

### javascript语言精粹与编程实践

[book.douban.com/subject/350…](https://book.douban.com/subject/35085910/)

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c4dec69b2af348dd8561b0ff6be89947~tplv-k3u1fbpfcp-zoom-1.image)

然后重磅推荐我认为讲解js的《九阴真经》，绿宝书，《javascript语言精髓与编程实践》，第三版比第二版足足厚了一倍，不是着重于某些功能实现，而是讲解修炼内功的大道，开篇就是《天之道，损有余而补不足》，从结构化，面向对象，函数式，并行和动态五方面来讲解js的本质，我整整看了七月份一整个月，简短的语言无法介绍这本书，我们专门录了一个《前端会客厅》 邀请到作者周爱民老师详细讲解这本书，欢迎去观看

[www.bilibili.com/video/BV1M5…](https://www.bilibili.com/video/BV1M5411a7GK)

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c23fcff719a4d7dbcdb60b36deb846b~tplv-k3u1fbpfcp-zoom-1.image)

### 标准文档ECMA

[tc39.es/ecma262/](https://tc39.es/ecma262/)

如果你足够大神，可以直接看标准文档， 不过很惭愧，我一直没有读完这份pdf，争取明年仔细学习一遍，如果能看完这个pdf，上面的小黄书之类的就不推荐了

### 标准组织TC39

[github.com/tc39/propos…](https://github.com/tc39/proposals)

大家看完了那本《javascript20年后》，就会知道javascript语言的发现，现在是由一个叫tc39的组织在推进，大家可以去github围观各个提案，比如最近进stage3的class fileds是一个极具争议的提案，其他的[private-methods](https://github.com/tc39/proposal-private-methods),   [top-level-await](https://github.com/tc39/proposal-top-level-await),  [temporal时间api](https://github.com/tc39/proposal-temporal),  都值得期待

关于tc39，大家可以关注tc39委员会成员[贺师俊hax](https://www.zhihu.com/people/he-shi-jun)，前端会客厅第三期也邀请到了贺老一起聊tc39，欢迎移步B站

[www.bilibili.com/video/BV1xT…](https://www.bilibili.com/video/BV1xT4y1L7ui)

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9828399582284542aed236346a5c6a1e~tplv-k3u1fbpfcp-zoom-1.image)

## 小而美迷你书

最后再推荐一些迷你的小书和一些经典过时的书把

《javascript迷你正则书》 《javascript编程精解》用游戏的方式讲解js，很不错

dom启蒙，javascript异步编程，javascript面向对象精要，javascript函数式编程指南， 都是一些垂直场景的小书，值得一看

### javascript迷你正则书

[github.com/qdlaoyao/js…](https://github.com/qdlaoyao/js-regex-mini-book)

![preview](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b0764178aed34c30b9de20aae070275f~tplv-k3u1fbpfcp-zoom-1.image)

### JavaScript编程精解(第3版)

英文在线版

游戏式教学 体验不错

[eloquentjavascript.net/](https://eloquentjavascript.net/)

[book.douban.com/subject/350…](https://book.douban.com/subject/35011711/)

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d3956c80f1849c1aa78e27b5fb0cff9~tplv-k3u1fbpfcp-zoom-1.image)

### dom启蒙

[book.douban.com/subject/258…](https://book.douban.com/subject/25882606/)

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c3640890e0ca4aa49bb0d1579e6be30d~tplv-k3u1fbpfcp-zoom-1.image)

### javascript函数式编程指南

[book.douban.com/subject/302…](https://book.douban.com/subject/30283769/)

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2310f39a35c34d758f3974108cce4e6e~tplv-k3u1fbpfcp-zoom-1.image)

### JavaScript异步编程

[book.douban.com/subject/243…](https://book.douban.com/subject/24319975/)

![img](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="800" height="600"></svg>)

### JavaScript面向对象精要

[book.douban.com/subject/263…](https://book.douban.com/subject/26352658/)

![img](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="800" height="600"></svg>)

## 略微过时，经典，值得一读

还有犀牛书，蝴蝶书和这本精通javascript开发，都是略微过时但是值得一读的经典书目，尤其犀牛书，这是对我影响最大的js书，我当年对js的进阶，就是看了四遍犀牛书，阅读体验比红宝书差一些，更全更像文档一些，只不过现在过时了一些，期待第七版的发布，到时候再买一本做推荐

然后es6相关的一些书也不是很推荐了，直接上红宝书把，比如阮一峰老师的es5标准入门，适合作为工具书查阅细节，红宝书作者写的深入理解es6，实战ES2015都不太推荐了

![img](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="800" height="600"></svg>)

## 不太推荐（连犀牛书都过时了）

![image-20200929090521124](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="800" height="600"></svg>)

，最后大部分动物书都过时了，不推荐阅读了富应用开发，设计模式，模式，高性能，可维护，数据结构和算法， 还有当年很喜欢的ppk，月影的王者归来，现在都不推荐了

最后总结一下，最简单粗暴的路线，就是红黄绿三步走，红宝书体系化，小黄书进阶语言细节，绿宝书学习javascirpt设计思想，其他的作为横向扩展

最后讲解一下午自己的学习心得，现在vue ，react框架满天飞的时代，很多前端不愿意深入js了，这是很不对的做法，行走江湖，js就是我们手中的大保健，框架固然重要，那是武功秘籍，最终能决定我们能走的多远的，还是我们对兵器本身的理解和内力，希望大家都能在js学习的路上有自己的心得体会，欢迎在留言区交流

当然前端也不能只学js，还有css，计算机基础，甚至还有些吹牛逼的书需要看，给大家秀一下午的书架，大家感兴趣的书也可以发在留言去后续我测评一下，


作者：蜗牛老湿_大圣
链接：https://juejin.im/post/6877712145757896717
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。