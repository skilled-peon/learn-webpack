需求：我们希望修改完代码，马上重新打包

## 打开 watch
```
module.exports = {
	watch: true
}
```

## [watch 选项](https://webpack.js.org/configuration/watch/ "watch 选项")
```
module.exports = {
	watchOptions: {
		poll: 1000,
		aggregateTimeout: 600, // 防抖
		ignored: /node_modules/
	}
}
```

+ `poll`: Turn on polling by passing true, or specifying a poll interval in milliseconds

+ `aggregateTimeout`: Add a delay before rebuilding once the first file changed. This allows webpack to aggregate any other changes made during this time period into one rebuild. Pass a value in milliseconds:

+ [`ignored`](https://webpack.js.org/configuration/watch/#watchoptionsignored "ignored"): For some systems, watching many file systems can result in a lot of CPU or memory usage. It is possible to exclude a huge folder like `node_modules`