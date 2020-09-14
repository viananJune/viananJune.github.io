---
title: 旋踵即逝的redis数据
date: 2020-06-23
tags:
 - redis
 - 抖机灵
categories:
 - middleware
sidebar: false
---

最近在开发一个分布式批处理任务的时候，用到了redis的list作为队列。但是在UAT测试的时候，发现数据写入有问题。

具体什么问题呢？就是写入后，去查询，立刻又没有了！我甚至怀疑是不是redis出问题了，为何写入的数据会消失？经过冷静思考，重新查看代码，始终看不出哪里有问题。

``` bash
127.0.0.1:6379> lpush names Jack
(integer) 1
127.0.0.1:6379> lpush names Dan
(integer) 1
127.0.0.1:6379> lpush names John
(integer) 2
127.0.0.1:6379> lpush names Jenney
(integer) 2
127.0.0.1:6379> lpush names Mike
(integer) 1
127.0.0.1:6379> llen names
(integer) 0
127.0.0.1:6379>
```

后来测试的同事问我，是不是没有在开发环境测试过？我才恍然大悟，我们公司穷，redis测试、开发用的是一套！！！测试和开发的程序抢着消费插入的数据！！！

各不同环境的配置文件加个redis-key前缀，问题解决。

::: tip
共用，会带来更多意想不到的加班哦！
:::