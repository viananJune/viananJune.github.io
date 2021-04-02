![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05181d70d8474d7dab758b1d51bd8aff~tplv-k3u1fbpfcp-watermark.image)

# 猛增 110K Star！年增长数最多的 10 大顶级前端学习资源项目！

大家好，我是你们的 [猫哥](https://github.com/biaochenxuying/blog/issues/79)，那个不喜欢吃鱼、又不喜欢喵 的超级猫 ~

今天给大家推荐 2020 年增长数最多的 10 大顶级前端学习资源项目！

看完这 10 大顶级项目，你会发现原来 GitHub 上也有这么多的 JavaScript 学习资源！

## 1. javascript-algorithms

- 2020 年增长 31.9K

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7338b7e643b343c9a56ea980be15ab3a~tplv-k3u1fbpfcp-zoom-1.image)

该仓库包含了多种基于 JavaScript 的算法与数据结构。

每种算法和数据结构都有自己的 README，包含相关说明和链接，以便进一步阅读 (还有 YouTube 视频) 。

数据结构包含了 链表、双向链表、队列、栈、哈希表(散列)、堆、优先队列、字典树、树、优先队列、二叉查找树、AVL 树、红黑树、线段树、树状数组、图、并查集、布隆过滤器

算法包含了 算法主题 和 算法范式。

其中算法主题又包含了：数学、集合、字符串、搜索、排序、链表、树、图、加密、机器学习。

算法范式：算法范式是一种通用方法，基于一类算法的设计。这是比算法更高的抽象，就像算法是比计算机程序更高的抽象。

算法范式包含了：BF 算法、贪心法、分治法、动态编程、回溯法、Branch & Bound 等等。

这项目还出了对应的教学视频，总共 81 个视频讲解，每个视频大概 5 - 10分钟左右，还能学习英语哦 😉

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2427035293544daa81b2ef48d6746053~tplv-k3u1fbpfcp-zoom-1.image)

> youtube 的教学视频：[www.youtube.com/playlist?li…](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

猫哥之前学习算法的时候，也在这个项目中收益良多呢！

而且这个项目还一直有维护和更新内容哦！真的非常不错的一个项目！

> [github.com/trekhleb/ja…](https://github.com/trekhleb/javascript-algorithms)

更多算法相关的项目推荐可以看看这篇文章：[7 个 GitHub 上超火的前端学习的数据结构与算法项目](https://mp.weixin.qq.com/s/tVavicaeORsBqt3sj6rI_g)

## 2. nodebestpractices

- 2020 年增长 20.2K

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dcbcba19dd7c4f02947b6b9ef6997edd~tplv-k3u1fbpfcp-zoom-1.image)

Node.js 最佳实践。

这个项目是对 Node.js 最佳实践中排名最高的内容的总结和分享。

这里是最大的汇集，且每周都在增长 - 当前，超过 50 个最佳实现，样式指南，架构建议已经呈现。

目录

- 项目结构实践 (5)
- 异常处理实践 (11)
- 编码规范实践 (12)
- 测试和总体质量实践 (8)
- 进入生产实践 (16)
- 新: 安全实践(23)
- Performance Practices (coming soon)

比如 错误处理最佳实践 中 使用 Async-Await 和 promises 用于异步错误处理

TL;DR: 使用回调的方式处理异步错误可能是导致灾难的最快的方式(a.k.a the pyramid of doom)。对您的代码来说，最好的礼物就是使用规范的 promise 库或 async-await 来替代，这会使其像 try-catch 一样更加简洁，具有熟悉的代码结构。

否则: Node.js 回调特性, function(err, response), 是导致不可维护代码的一个必然的方式。究其原因，是由于混合了随意的错误处理代码，臃肿的内嵌，蹩脚的代码模式。

> [github.com/goldbergyon…](https://github.com/goldbergyoni/nodebestpractices)

## 3. You-Dont-Know-JS

- 2020 年增长 18K

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ea3ee64b10e4868983a911fc9996253~tplv-k3u1fbpfcp-zoom-1.image)

该项目为 YDNJS(You Don’t Know JS) 图书系列，包含一系列深入探讨 JavaScript 语言核心机制的书籍。

**内容大纲**

- 入门与进阶
- 作用域与闭包
- this 与对象原型
- 类型与文法
- 异步与性能
- ES6 与未来

> [github.com/getify/You-…](https://github.com/getify/You-Dont-Know-JS)

## 4. clean-code-javascript

- 2020 年增长 15.1K

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1cbe2cf95f2f4f24ae9518c11f90357a~tplv-k3u1fbpfcp-zoom-1.image)

优秀的 JS 代码规范。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/335d046a17c444d4bdfd9cf0991c3387~tplv-k3u1fbpfcp-zoom-1.image)

比如：**对相同类型的变量使用相同的关键字**

Bad：

```js
getUserInfo(); 
getClientData(); 
getCustomerRecord();
复制代码
```

Good：

```js
getUser();
复制代码
```

再比如：**使用可搜索的命名**

在开发过程中，我们阅读代码的时间会远远超过编写代码的时间，因此保证代码的可读性与可搜索会非常重要。

切记，没事不要坑自己。

Bad:

```js
//525600到底啥意思？
for (var i = 0; i < 525600; i++) {
  runCronJob();
}
复制代码
```

Good:

```js
// 声明为全局变量
var MINUTES_IN_A_YEAR = 525600;
for (var i = 0; i < MINUTES_IN_A_YEAR; i++) {
  runCronJob();
}
复制代码
```

> [github.com/ryanmcdermo…](https://github.com/ryanmcdermott/clean-code-javascript)

## 5. 30-seconds-of-code

- 2020 年增长 13.3K

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a687ee29f1464d3f909b7ffd94c7fbb2~tplv-k3u1fbpfcp-zoom-1.image)

该项目讲的是满足你所有开发需求的简短代码段，里面都是些经常会用到而且是非常经典的代码，非常值得学习！

比如 JavaScript 模块就分为了 All、Array、Browser、Date、Function、Math、Node、Object、String 方便学习的。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71ca4caed14c4f23880de2c937abf4fa~tplv-k3u1fbpfcp-zoom-1.image)

比如：**你必须知道的 4 种 JavaScript 数组方法**

Array.prototype.map()

```js
const arr = [1, 2, 3];
const double = x => x * 2;
arr.map(double); // [2, 4, 6]
复制代码
```

Array.prototype.filter()

```js
const arr = [1, 2, 3];
const isOdd = x => x % 2 === 1;
arr.filter(isOdd); // [1, 3]
复制代码
```

Array.prototype.reduce()

```js
const arr = [1, 2, 3];

const sum = (x, y) => x + y;
arr.reduce(sum, 0); // 6

const increment = (x, y) => [...x, x[x.length - 1] + y];
arr.reduce(increment, [0]); // [0, 1, 3, 6]
复制代码
```

Array.prototype.find()

```js
const arr = [1, 2, 3];
const isOdd = x => x % 2 === 1;
arr.find(isOdd); // 1
复制代码
```

又比如：**如何在 JavaScript 中实现睡眠功能？**

同步版本

```js
const sleepSync = (ms) => {
  const end = new Date().getTime() + ms;
  while (new Date().getTime() < end) { /* do nothing */ }
}

const printNums = () => {
  console.log(1);
  sleepSync(500);
  console.log(2);
  console.log(3);
};

printNums(); // Logs: 1, 2, 3 (2 and 3 log after 500ms)
复制代码
```

异步版本

```js
const sleep = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

const printNums = async() => {
  console.log(1);
  await sleep(500);
  console.log(2);
  console.log(3);
};

printNums(); // Logs: 1, 2, 3 (2 and 3 log after 500ms)
复制代码
```

其实上面讲到的事例里面还提供 api 和方法的讲解的，方便读者能看懂的，这里就不写出来了。

还想学更多的 经典 js 代码片段，请看下面的仓库

> [github.com/30-seconds/…](https://github.com/30-seconds/30-seconds-of-code)

## 6. javascript

- 2020 年增长 11.8K

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59e449c8d5184954aefd42b19fe8d292~tplv-k3u1fbpfcp-zoom-1.image)

这个项目是 JavaScript 编程风格指南。

包含了：类型、对象、数组、字符串、函数、属性、变量、提升、比较运算符 & 等号、块、注释、空白、逗号、分号、类型转化、命名规则、存取器、构造函数、事件、模块、jQuery、ECMAScript 5 兼容性、测试、性能、资源、JavaScript 风格指南说明

> [github.com/airbnb/java…](https://github.com/airbnb/javascript)

## 7. tech-interview-handbook

- 2020 年增长 10.6K

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/30ce0d80931840968244a63dafc6c00a~tplv-k3u1fbpfcp-zoom-1.image)

技术人员求职面试，单刷leetcode上的大厂题库可能还不够。

简历怎么写才能吸引HR的眼光，可能会被技术老大问到哪些常见问题，拿到Offer之后怎样才能让自己的优势最大化然后优中选优？

面对这些赤果果的问题，目前就职于Facebook的新加坡小哥Yangshun Tay就整理了一份干货。

面试全流程需要注意的事项都在里面了，包含从简历准备、面经和谈判全过程，教你如何避雷不踩坑。

精心策划的内容可帮助您获得下一次技术面试的机会，重点是算法。

除了常见的算法问题外，其他出色的功能还包括：

- 如何准备编码面试
- 面试备忘单-直截了当的注意事项
- 按主题分类的算法技巧和最佳实践问题
- “前端面试问题”答案
- 顶尖科技公司的面试形式
- 顶尖科技公司提出的行为问题
- 在面试结束时问您的面试官的好问题
- 有用的简历提示，以使您的简历受到关注以及注意事项

> [github.com/yangshun/te…](https://github.com/yangshun/tech-interview-handbook)

## 8. freeCodeCamp

- 2020 年增长 10.4K

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02d1059988e6452e9b521bb34cde57ca~tplv-k3u1fbpfcp-zoom-1.image)

FreeCodeCamp 是一个自由开源的学习编程的社区，致力于帮助人们利用零散时间学习编程。

它的使命是 Learn to code and help nonprofits（学习编程，去帮助那些非盈利组织）。

FCC 涵盖 HTML5、CSS、React、JavaScript、Database 等课程，游戏化程度非常高，学员可以通过线上聊天室和线下社区活动（Coffee and Code）相互帮助。

目前覆盖全球 160+ 个国家、1000+ 个城市，40W+ 开发者在平台学习。

> [github.com/freeCodeCam…](https://github.com/freeCodeCamp/freeCodeCamp)

## 9. Front-End-Checklist

- 2020 年增长 9.2K

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e00f03064c864b209bf74187605613ed~tplv-k3u1fbpfcp-zoom-1.image)

该项目是详尽的关于前端开发的清单，它列出了将 HTML 页面投入生产之前需要进行测试的所有元素。

它基于众多前端开发人员的多年经验，其中一部分整合自其他的开源清单。

内容包含：

- Head
- HTML
- Webfonts
- CSS
- Images
- JavaScript
- Security
- Performance
- Accessibility
- SEO

> [github.com/thedaviddia…](https://github.com/thedaviddias/Front-End-Checklist)

## 10. vanillawebprojects

- 2020 年增长 8.2K

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/642073b25a4d47e68d95ab672ec8e340~tplv-k3u1fbpfcp-zoom-1.image)

新手上路最开始用的就是基础的 HTML+CSS+JS 三件套，而在框架和库越来越多的现在，更多的时候使用它们来提高效率是常见的选择。

这个项目则是反过来，是使用老三件套实现的一些小项目合集，不管是为了更好理解框架，还是为了验证一下自己的知识水平，重新操刀老三件套都不失为一个好选择，要知道不管是什么框架和库，基础都是由这三板斧搭建起来的。

> [github.com/bradtravers…](https://github.com/bradtraversy/vanillawebprojects)

## 最后

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b0410d2d21e48098b8138de9cd6e08e~tplv-k3u1fbpfcp-zoom-1.image)

不知不觉，原创文章已经写到第 **33** 期了呢，几乎每一篇都是猫哥精心挑选的优质开源项目，推送的每一篇文章里面的项目几乎都是对前端开发很有帮助的。

原创不易，一篇优质的文章都是要肝几个晚上才能肝出来的，花费很多时间、精力去筛选和写推荐理由，大佬们看完文章后顺手点个赞或者转发吧，给猫哥一点鼓励吧。

往期精文请看下方宝藏仓库，请慎入！

> [github.com/FrontEndGit…](https://github.com/FrontEndGitHub/FrontEndGitHub)

平时如何发现好的开源项目，可以看看这篇文章：[GitHub 上能挖矿的神仙技巧 - 如何发现优秀开源项目](https://github.com/biaochenxuying/blog/issues/45)

欢迎关注公众号：[**前端GitHub**](https://github.com/FrontEndGitHub/FrontEndGitHub)，专注于挖掘优秀的前端开源项目，抹平你的前端信息不对称，致力于打造最优质的前端开源项目资源库。

微信搜 “**前端GitHub**”，回复 “**电子书**” 即可以获得上面 **160** 本前端精华书籍哦，猫哥 WX：**CB834301747** 。

**往期精文**

- [Vue3 的学习教程汇总、源码解释项目、支持的 UI 组件库、优质实战项目](https://github.com/FrontEndGitHub/FrontEndGitHub/issues/18)

- [10 个 GitHub 上超火的前端面试项目，打造自己的加薪宝库！](https://github.com/FrontEndGitHub/FrontEndGitHub/issues/6)
- [10 个 GitHub 上超火的 CSS 技巧项目，找到写 CSS 的灵感！](https://github.com/FrontEndGitHub/FrontEndGitHub/issues/7)
- [11 个超火的前端必备在线工具，终于有时间上班摸鱼了](https://github.com/FrontEndGitHub/FrontEndGitHub/issues/9)