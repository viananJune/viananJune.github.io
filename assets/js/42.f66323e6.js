(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{560:function(t,n,s){"use strict";s.r(n);var i=s(5),e=Object(i.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("一、配置步骤")]),t._v(" "),s("p",[t._v("1、配置公司的 gitlab")]),t._v(" "),s("p",[t._v("2、配置自己的 github")]),t._v(" "),s("p",[t._v("二、问题索引")]),t._v(" "),s("p",[t._v("一、配置步骤\n1、配置公司的 gitlab\n1、git 输入如下命令，生成密钥 ssh，一路回车即可")]),t._v(" "),s("p",[t._v("这个我们选择生成在默认文件中（在 C:\\Users\\xxxx.ssh 文件下），选择 id_rsa 的 PUB 文件")]),t._v(" "),s("p",[t._v("$ ssh-keygen -t rsa -C “812799634@qq.com”")]),t._v(" "),s("p",[t._v("2、打开 id_rsa 的 PUB 文件，复制粘贴到 gitlab 的密钥配置中")]),t._v(" "),s("p",[t._v("3、查看是否配置成功")]),t._v(" "),s("p",[t._v("输入命令 ssh -T git@gitlab 域名.com 或者 git@IP 地址\n或者简单粗暴直接 clone 工程\n选择直接 clone，要先索引到要 clone 的目录下，命令 git clone git@gitlab.com:xxx/xxx.git")]),t._v(" "),s("p",[t._v("2、配置自己的 github\n1、git 命令生成密钥 ssh 并直接命名（此时不是默认文件），一路回车即可")]),t._v(" "),s("p",[t._v("如果你之前已经生成过该名字的密钥想更改，就在第二步提示填写 yes，就会覆盖以前的")]),t._v(" "),s("p",[t._v("$ ssh-keygen -t rsa -C “812799634@qq.com” -f github_id-rsa\n2、查看文件，在 C:\\Users\\xxxx.ssh 文件下，github_id-rsa 的 PUB 文件")]),t._v(" "),s("p",[t._v("3、将密钥 ssh 粘贴到 github")]),t._v(" "),s("p",[t._v("4、创建一个 config 文件来管理公钥和私钥")]),t._v(" "),s("p",[t._v("$ cd ~/.ssh/\n$ touch config\n$ vim config\n5、配置 config 文件")]),t._v(" "),s("p",[t._v("#github\nHost github.com\nHostname ssh.github.com\nPort 443\nUser git\nIdentityFile ~/.ssh/github_id-rsa(github 的 ssh)\n#gitlab\nhost yourgitlab 域名.com\nHostname yourgitlab 域名.com\nUser git\nIdentityFile ~/.ssh/gitlab_id-rsa(gitlab 的 ssh，也可是默认的 id_rsa)\n6、删除缓存的秘钥（这一步非必须，比如您是刚刚安装 git 的）")]),t._v(" "),s("p",[t._v("$ ssh-add -D\n7、如果显示如下信息")]),t._v(" "),s("p",[t._v("Could not open a connection to your authentication agent.\n执行:")]),t._v(" "),s("p",[t._v("$ eval $(ssh-agent)\n然后重新执行第 6 步，如果没有报错的话，那么可以执行下面一条命令，让 ssh-agent 知道你有这么个 key")]),t._v(" "),s("p",[t._v("$ ssh-add ~/.ssh/github_id-rsa\n8、查看是否配置成功")]),t._v(" "),s("p",[t._v("输入命令 ssh -T git@github.com\n或者简单粗暴直接 clone 工程\n选择直接 clone，要先索引到要 clone 的目录下，命令 git clone git@github.com:xxx/xxx.git")]),t._v(" "),s("p",[t._v("（为什么我按照配置步骤一步步来，还报错呢？难道是我太好看，怪我咯）\n二、问题索引\n1、命令输入 ssh -T git@github.com，检验链接是否成功")]),t._v(" "),s("p",[t._v("$ ssh -T git@github.com\n报错信息如下：")]),t._v(" "),s("p",[t._v("1、kex_exchange_identification: read: Connection reset by peer")]),t._v(" "),s("p",[t._v("没有代理之前一直这个问题")]),t._v(" "),s("p",[t._v("2、The authenticity of host '[ssh.github.com]:443 ([192.30.253.122]:443)' can't be established.\nRSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added '[ssh.github.com]:443,[192.30.253.122]:443' (RSA) to the list of known hosts.\ngit@ssh.github.com: Permission denied (publickey).")]),t._v(" "),s("p",[t._v("解决：将你的 ssh 文件添加进去，如果提示如下,就输入：$ eval $(ssh-agent)")]),t._v(" "),s("p",[t._v("$ eval $(ssh-agent)")]),t._v(" "),s("p",[t._v("最后再检验一下~")]),t._v(" "),s("p",[t._v("恭喜你成功啦！")]),t._v(" "),s("p",[t._v("————————————————\n版权声明：本文为 CSDN 博主「萌小主」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。\n原文链接：https://blog.csdn.net/xiaomengzi_16/article/details/100762764")])])}),[],!1,null,null,null);n.default=e.exports}}]);