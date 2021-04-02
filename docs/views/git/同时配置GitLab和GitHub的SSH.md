一、配置步骤

 1、配置公司的gitlab

2、配置自己的github

二、问题索引

一、配置步骤
 1、配置公司的gitlab
1、git输入如下命令，生成密钥ssh，一路回车即可

这个我们选择生成在默认文件中（在C:\Users\xxxx\.ssh文件下），选择id_rsa的PUB文件

$ ssh-keygen -t rsa -C “812799634@qq.com”

2、打开id_rsa的PUB文件，复制粘贴到gitlab的密钥配置中

3、查看是否配置成功

输入命令 ssh -T git@gitlab域名.com或者git@IP地址
或者简单粗暴直接clone工程
选择直接clone，要先索引到要clone的目录下，命令 git clone git@gitlab.com:xxx/xxx.git

2、配置自己的github
1、git命令生成密钥ssh并直接命名（此时不是默认文件），一路回车即可

如果你之前已经生成过该名字的密钥想更改，就在第二步提示填写yes，就会覆盖以前的

$ ssh-keygen -t rsa -C “812799634@qq.com” -f github_id-rsa
2、查看文件，在C:\Users\xxxx\.ssh文件下，github_id-rsa的PUB文件



3、将密钥ssh粘贴到github

4、创建一个config文件来管理公钥和私钥

$ cd ~/.ssh/
$ touch config
$ vim config
5、配置config文件

#github
Host github.com
    Hostname ssh.github.com
    Port 443
    User git
    IdentityFile ~/.ssh/github_id-rsa(github的ssh)
#gitlab
host yourgitlab域名.com
    Hostname yourgitlab域名.com
    User git
    IdentityFile ~/.ssh/gitlab_id-rsa(gitlab的ssh，也可是默认的id_rsa)
6、删除缓存的秘钥（这一步非必须，比如您是刚刚安装git的）

$ ssh-add -D
7、如果显示如下信息

Could not open a connection to your authentication agent.
执行:

$ eval $(ssh-agent)
然后重新执行第6步，如果没有报错的话，那么可以执行下面一条命令，让ssh-agent知道你有这么个key

$ ssh-add ~/.ssh/github_id-rsa
8、查看是否配置成功

输入命令 ssh -T git@github.com
或者简单粗暴直接clone工程
选择直接clone，要先索引到要clone的目录下，命令 git clone git@github.com:xxx/xxx.git




（为什么我按照配置步骤一步步来，还报错呢？难道是我太好看，怪我咯）
二、问题索引
1、命令输入ssh -T git@github.com，检验链接是否成功

$ ssh -T git@github.com
报错信息如下：

1、kex_exchange_identification: read: Connection reset by peer

没有代理之前一直这个问题



2、The authenticity of host '[ssh.github.com]:443 ([192.30.253.122]:443)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '[ssh.github.com]:443,[192.30.253.122]:443' (RSA) to the list of known hosts.
git@ssh.github.com: Permission denied (publickey).



解决：将你的ssh文件添加进去，如果提示如下,就输入：$ eval $(ssh-agent)

$ eval $(ssh-agent)




最后再检验一下~

恭喜你成功啦！

————————————————
版权声明：本文为CSDN博主「萌小主」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/xiaomengzi_16/article/details/100762764