
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

分别放置于 `lib` 目录下的 `common.js`、`sql.js`、`paginator.js`中。


### 在Express进行调用
