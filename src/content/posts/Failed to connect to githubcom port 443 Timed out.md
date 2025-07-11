---
title: Failed to connect to githubcom port 443 Timed out
date: 2020-07-09 22:01:17
tags: ["Error","git"]
image: 
    url: ../attachment/problems/problem.png
---
**出现问题**
在git的本地分支尝试向github推代码时出现了下述错误：

*出错代码：*

``` shell
git push origin Cardy
```

*报错信息：*
``` shell
$ git push origin Cardy
error: src refspec Cardy does not match any.
error: failed to push some refs to 'git@github.com:GoatYoung/DormManager.git'
```

**出现问题的原因**
![](../attachment/problems/cant_find_branch.png)

本地库对应的分支是master，而尝试推的云端分支是Cardy，两个分支不一致，所以出现报错

**解决办法**

将代码改成：
``` shell 
git push origin master:Cardy
```
即：将本地库的master分支推到云端的Cardy分支上。