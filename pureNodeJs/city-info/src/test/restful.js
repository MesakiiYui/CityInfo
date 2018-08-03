const express = require('express');
const app = express();
const fs = require("fs");

app.get('/listUsers', function (req, res) {
	fs.readFile( "./../Data/userInfo.json", 'utf8', function (err, data) {
		console.log( data );
		res.end( data );
	});
});

const newUser = {
	"user4" : {
		"name" : "mohit",
		"password" : "password4",
		"profession" : "teacher",
		"id": 4
	}
};
app.get('/addUser', function (req, res) {
	// 读取已存在的数据
	fs.readFile( "./../Data/userInfo.json", 'utf8', function (err, data) {
		data = JSON.parse( data );
		data["user4"] = newUser["user4"];
		console.log( data );
		res.end( JSON.stringify(data));
	});
});

app.get('/:id', function (req, res) {
	// 首先我们读取已存在的用户
	fs.readFile( "./../Data/userInfo.json", 'utf8', function (err, data) {
		data = JSON.parse( data );
		const user = data["user" + req.params.id]
		console.log( user );
		res.end( JSON.stringify(user));
	});
});

const server = app.listen(8081, function () {

	const host = server.address().address;
	const port = server.address().port;

	console.log("应用实例，访问地址为 http://%s:%s", host, port)

});
