const getInfo = require('./ConnectDB');
const server = require("./server");
const router = require("./router");

const limit = 20;
getInfo.readDB(limit, (data)=>{
	console.log(data);
});
// server.start(router.route);
