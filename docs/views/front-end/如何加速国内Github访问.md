---
title: 如何加速国内Github访问

date: 2021-03-13 12:00:00
tags:
  - github
categories:
  - front-end
---

由于某些原因，国内访问 Github 会异常缓慢，在 clone 仓库时甚至只有 10k 以下的速度，下载半天有时还会失败需要从头再来，甚是让人恼火。
本文介绍通过修改系统 hosts 文件的办法，绕过国内 dns 解析，直接访问 GitHub 的 CDN 节点，从而达到加速的目的。不需要科学上网，也不需要海外的服务器辅助。

1 获取 GitHub 官方 CDN 地址
打开https://www.ipaddress.com/

查询以下三个链接的 DNS 解析地址

1. github.com
2. assets-cdn.github.com
3. github.global.ssl.fastly.net

![img](https:////upload-images.jianshu.io/upload_images/468490-3a383bea2cd02ba1.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

image

记录下查询到的 IP 地址。

2 修改系统 Hosts 文件
打开系统 hosts 文件(需管理员权限)。
路径：C:\Windows\System32\drivers\etc

在末尾添加三行记录并保存。(需管理员权限，注意 IP 地址与域名间需留有空格)

```php
# Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
#
# This file contains the mappings of IP addresses to host names. Each
# entry should be kept on an individual line. The IP address should
# be placed in the first column followed by the corresponding host name.
# The IP address and the host name should be separated by at least one
# space.
#
# Additionally, comments (such as these) may be inserted on individual
# lines or following the machine name denoted by a '#' symbol.
#
# For example:
#
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host

# localhost name resolution is handled within DNS itself.
#   127.0.0.1       localhost
#   ::1             localhost

  192.30.253.112     github.com

  151.101.72.133    assets-cdn.github.com

  151.101.193.194    github.global.ssl.fastly.net
```

3 刷新系统 DNS 缓存
Windows+X 打开系统命令行（管理员身份）或 powershell

运行 ipconfig /flushdns 手动刷新系统 DNS 缓存。

![img](https:////upload-images.jianshu.io/upload_images/468490-a16d3e78189b9ad5.png?imageMogr2/auto-orient/strip|imageView2/2/w/747/format/webp)

4 最终发现还是翻墙管用，推荐佛跳墙

作者：Daven\_
链接：https://www.jianshu.com/p/66facbd8926a
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
