---
title:three.js 如何在本地开启服务器

date: 2021-03-19 12:00:00
tags:
  - html pdf
categories:
  - front-end
---

# three.js 如何在本地开启服务器

如何在本地运行 three.js
从外部文件载入的内容
运行一个本地的服务器
Node.js server
Python server
Ruby server
PHP server
Lighttpd
IIS
作者：大脸猫
更多精彩文章微信搜索【砖人专语】
1
2
倘若你只是使用 Three.js 库中所提供的几何体，且不载入任何纹理贴图，则网页是可以从本地的文件系统中打开，并且是能够直接运行的，只需在文件管理器中双击 HTML 文件，它就可以在浏览器中进行显示。
tip:此时你将在地址栏中看到类似这样的 URL：file:///yourFile.html

从外部文件载入的内容
倘若你需要从外部文件里载入几何体或是纹理贴图，由于浏览器 same origin policy（同源策略）的安全限制，从本地文件系统载入外部文件将会失败，同时抛出安全性异常。

这里有两种方法来解决这个问题：

在浏览器中改变本地文件的安全策略，这将使你可以通过

file:///yourFile.html
来直接运行本地文件系统中的文件。

从本地的服务器运行文件，这可以让你通过

http://localhost/yourFile.html
来访问运行在本地服务器上的文件。

倘若你选择第一种方法，请小心，倘若你使用同一个浏览器来进行日常网络冲浪，你将可能会触发一些漏洞。 你或许可以创建一个用于开发环境的独立的浏览器配置文件或者快捷方式，仅仅用于本地开发；这将使得日常使用环境与开发环境相分离，以保证日常使用环境的安全性。 接下来，我们来看一看除此之外的别的方法。

运行一个本地的服务器
很多的编程语言都具有一个内置的简易 HTTP 服务器。它们的功能并不像能够被用于生产环境的服务器，例如 Apache 或者 NGINX 那样完善， 但对于你来测试 three.js 应用程序来说，它们就已经足够了。

Node.js server
Node.js 具有一个简单的 HTTP 服务器包，如需安装，请执行：

npm install http-server -g

若要从本地目录下运行，请执行：
http-server . -p 8000

Python server
如果你已经安装好了 Python，只需要从命令行里便可以运行它（从工作目录）：

//Python 2.x
python -m SimpleHTTPServer

//Python 3.x
python -m http.server
1
2
3
4
5
这将会在为当前目录在 8000 端口创建一个服务器，也就是说你可以在地址栏里输入这个地址来访问已经创建好的服务器：

http://localhost:8000/

Ruby server
如果你已经安装好了 Ruby，通过执行下列命也可以创建同样的服务器：

ruby -r webrick -e "s = WEBrick::HTTPServer.new(:Port => 8000, :DocumentRoot => Dir.pwd); trap('INT') { s.shutdown }; s.start"
1
PHP server
PHP 自从 5.4.0 版本开始，就内置了一个 Web 服务器：

php -S localhost:8000

Lighttpd
Lighttpd 是一个轻量级的通用 Web 服务器，在这里，我们将介绍如何在 OS X 上使用 HomeBrew 来安装它。 和我们在这里讨论的其他服务器不同，lighttpd 是一个成熟的、准用于生产环境的服务器。

通过 HomeBrew 安装 lighttpd

brew install lighttpd

在你希望作为服务器来运行的目录里，创建一个名为 lighttpd.conf 的配置文件。 这是一个配置文件的样本：TutorialConfiguration

在配置文件里，将 server.document-root 更改为你将要创建的服务器中的文件的所在的目录。

通过这个命令来启动：
lighttpd -f lighttpd.conf

使用浏览器打开http://localhost:3000/，然后服务器将可以从你所选择的目录中向你提供静态文件。

IIS
如果你正在使用 Microsoft IIS 来作为网站服务器，在服务器载入之前，请为.fbx 扩展名增加 MIME 类型。

File name externsion: fbx MIME Type: text/plain
在默认情况下，IIS 阻止 .fbx、 .obj 文件的下载，因此你必须对 IIS 进行配置，使得这些类型的文件可以被下载。
