const express = require('express');



// Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。
//
// 使用 Express 可以快速地搭建一个完整功能的网站。
//
// Express 框架核心特性：
//
// 可以设置中间件来响应 HTTP 请求。
//
// 定义了路由表用于执行不同的 HTTP 请求动作。
//
// 可以通过向模板传递参数来动态渲染 HTML 页面。

const app = express();
app.use(express.static('./../Data'));
// 访问http://localhost:8081/nodejs.jpg, 返回图片
app.get('/', function (req, res) {
	res.send('Hello World');
});

//  POST 请求
app.post('/', function (req, res) {
	console.log("主页 POST 请求");
	res.send('Hello POST');
});

//  /del_user 页面响应
app.get('/del_user', function (req, res) {
	console.log("/del_user 响应 DELETE 请求");
	res.send('删除页面');
});

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
	console.log("/list_user GET 请求");
	res.send('用户列表页面');
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
	console.log("/ab*cd GET 请求");
	res.send('正则匹配');
});


const server = app.listen(8081, function () {

	const host = server.address().address;
	const port = server.address().port;

	console.log("应用实例，访问地址为 http://%s:%s", host, port)

});
