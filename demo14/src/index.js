const xhr = new XMLHttpRequest();

// 1) 使用 devServer.proxy 代理时请求
xhr.open('GET', '/api/user', true);

// 2）使用 devServer.before 模拟请求时
// 3) 使用 webpack-dev-middleware 把前端和服务器启动到同一个端口上 
// xhr.open('GET', '/user', true);

xhr.onload = function() {
    console.log(xhr.response);
}

xhr.send();