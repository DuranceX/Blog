---
title: 'Failed to connect to github.com port 443: Timed out'
date: 2020-02-22 22:54:17
tags: ["Error","git"]
image:
    url: ../attachment/problems/problem.png
---
Failed to connect to github.com port 443: Timed out 
<!-- more -->
# Failed to connect to github. com port 443: Timed out


 在使用hexo g -d部署到github上时出现了“Failed to connect to github. com port 443: Timed out”的错误提示。
![](../attachment/problems/Time_out.png)

**解决办法**

输入
``` shell
git config --global http.proxy http://127.0.0.1:1080

git config --global https.proxy http://127.0.0.1:1080
```
