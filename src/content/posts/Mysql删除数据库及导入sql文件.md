---
title: Mysql删除数据库及导入sql文件
date: 2023-08-21 20:00:01
tags: ["mysql"]
---

### 添加数据库
``` shell
create database xxxx;
```

### 删除数据库
``` shell
drop database xxxx;
```

### 读取sql文件
``` shell
#进入mysql命令行
mysql -u root -p
#选中数据库
use xxxx;
#导入sql文件，定位到sql文件路径
source ~/~/xxxx.sql
```