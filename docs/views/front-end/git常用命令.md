# git常用命令

1. ### git 新建本地分支，并对应建立远程分支和推送到远程分支

   我们有一个master 分支，当工程要新增新的功能时，又暂时不上线，那么我们可以新建一个新的本地分支，和对应的远程分支，完成之后，上线时再合并就可以了。
   1.查看一下本地分支

   ```git
       git branch
   1
   ```

   查看本地和远程的所有分支

   ```git
       git branch -a
   1
   ```

   2.新建一个本地的分支

   ```git
       git checkout -b newbranch   //这个命令是新建一个分支，并切换到该分支上去
   1
   （git branch newbranch;     git checkout newbranch）这两个命令合起来等同于上面的一个命令
   1
   ```

   3.新建一个远程分支（同名字的远程分支）

   ```git
       git push origin newbranch:newbranch   //创建了一个远程分支名字叫 newbranch
   1
   ```

   4.把本地的新分支，和远程的新分支关联

   ```git
       git push --set-upstream origin newbranch
   1
   ```

   这时就可以在这个分支下使用 git pull 推送支远程的新分支上了

2、git操作之pull拉取远程指定分支以及push推送到远程指定分支

### 一、pull操作

1、将远程指定分支 拉取到 本地指定分支上：

```bash
git pull origin <远程分支名>:<本地分支名>
1
```

（注：命令里的尖括号<>只是包裹中文的标识，方便你看的，实际使用时不用写，不过冒号需要）

2、将远程指定分支 拉取到 本地当前分支上：

```bash
git pull origin <远程分支名>
1
```

3、将与本地当前分支同名的远程分支 拉取到 本地当前分支上(需先关联远程分支，方法见文章末尾，只需关联一次)

```bash
git pull
1
```

在克隆远程项目的时候，本地分支会自动与远程仓库建立追踪关系，可以使用默认的origin来替代远程仓库名，
所以，推荐命令 git pull origin <远程仓库名>，操作简单，安全可控。

git 退出

shift +；  q！