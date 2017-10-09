# postcss插件脚手架

仓库提供了gulp与webpack两个版本postcss脚手架。

## gulp
```
$ sudo npm gulp -g
$ cd postcss-plugin-demo && npm i
$ cd ../gulp && npm i
& gulp css
```

## webpack
```
$ sudo npm gulp -g
$ cd postcss-plugin-demo && npm i
$ cd ../webpack && npm i
& webpack
```

## 作用
在`gulp/dest`与`webpack/dest`生成style.css文件。

- 编译前
```
a {
	font-family: "Open Sans", family("helloworld");
	font-size: 1rem;
	flex: 1;
}
```

- 编译后
```
html, body, ul{
	margin: 0;
	padding: 0;
	/* 用户自定义样式 */
}
a {
	color: black;
	background-color: white;
	font-family: "Open Sans", Arial, Helvetica, sans-serif;
	font-size: 12px;
	-webkit-flex: 1;
	-ms-flex: 1;
	/* 用户自定义样式 */
}

```
