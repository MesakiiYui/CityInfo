var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain;charset=UTF8'});

	// 解析 url 参数
	var params = url.parse(req.url, true).query;
	res.write("名字: " + params.name);
	res.write("\n");
	res.write("URL:" + params.url);
	res.end();

}).listen(8888);
