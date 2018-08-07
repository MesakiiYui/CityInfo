const getInfo = require('./ConnectDB');
const server = require("./server");
const router = require("./router");
const greeter = require('./Greeter.js');

let cityContent = "";
const limit = 20;
getInfo.readDB(limit, (data)=>{
	console.log(data);
	cityContent = data;
});
server.start(router.route);
document.querySelector("#main").appendChild(greeter());
const cityInfo = document.createElement('div');
cityInfo.textContent = cityContent;
document.querySelector(cityInfo());
