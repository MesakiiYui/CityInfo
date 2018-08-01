const getInfo = require('./ConnectDB');
const server = require("./server");
const router = require("./router");

// const limit = 20;
// getInfo.readDB(limit);

server.start(router.route);
