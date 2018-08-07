const express = require('express');
const app = express();
const mysql = require('mysql');
const getInfo = require('./Component/mysql');

const limit = 500;

getInfo.readDB(limit, (data)=>{
    app.get('/readDB', function(req, res){
        const DBresult={result:[]};
        data.forEach(dataEach => {
           const ele = {
               ID: dataEach.ID,
               Name: dataEach.Name,
               CountryCode: dataEach.CountryCode,
               District: dataEach.District,
               Population: dataEach.Population,
               country_code: dataEach.country_code,
           };
           DBresult.result.push(ele);
        });
        res.send(DBresult);
        console.log('DBresult', DBresult);
    });
    console.log('DBresult', typeof (data), data[0]);
});
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

const server = app.listen(8081, function(){
    const host = server.address().address;
    const port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
