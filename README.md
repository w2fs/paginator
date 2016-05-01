# Node.js实战教程之 MySQL分页

## 参考资料

Express: <http://expressjs.com/>

本课程例子使用的框架为 `Express`，如果使用原生`http`、或`koa`、或`hapi`，也可参考该教程的设计实现思路。

JADE： <http://jade-lang.com/>
页面渲染用的模板引擎是`jade`，如果不习惯`jade`语法的，推荐用`handlebars`、`ejs`、`swig`或任意你想用的。

MySQL： <https://github.com/felixge/node-mysql>

## MySQL 准备

### 建测试表

```sql
CREATE TABLE `paginator` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(16) NOT NULL DEFAULT '',
  `type` tinyint(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `created_at` (`type`)
) DEFAULT CHARSET=utf8;
```

### 插入测试数据

```sql
INSERT INTO paginator(`name`,`type`) VALUES ('test2',1);
```

### 测试查询语句

```sql
SELECT `id`,`name`,`type` FROM paginator ORDER BY `id` ASC LIMIT x,y
```

* `x` 从第x位开始取
* `y` 表示取y条数据

## 代码准备

### ES6 环境

```
cnpm i --save babel-plugin-transform-runtime babel-preset-es2015 babel-preset-es2015-loose babel-preset-stage-1 babel-runtime babe
l-register
```

.babelrc:

```json
{
  "presets": [
    "es2015-loose",
    "stage-1"
  ],
  "plugins": [
    "transform-runtime"
  ]
}
```

新建 `app.js` 和 `babel.js`

babel.js:

```js
require('babel-register');
require('./app');
```

### 封装通用方法、数据库调用方法，封装分页方法

分别放置于 `lib` 目录下的 `common.js`、`mysql.js`、`paginator.js`中。

### 在Express进行调用

1. 拉个Table，将数据展示出来


2. 写分页控件，实现翻页功能


3. 加入js，实现无刷新翻页

```
bower init
bower install --save jquery instantclick
```

## 示例代码使用

注意，修改`config.js`里的数据库配置。

```
bower install
npm install
node babel
```

## 课后习题

进阶使用 `instantpjax` 通过 `ajax` 请求加载 `json` 而不直接加载 `html`。
