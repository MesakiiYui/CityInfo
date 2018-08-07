const mysql = require('mysql');


const _readDB = (limit, callback) =>{
    const connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'world',
        port:'3306',
    });

    connection.connect();
    let dbRes = 'Info Not Found in DB.';
    const sql = `SELECT * FROM city LIMIT ${limit};`;
    connection.query(sql,(err, result) => {
        if(err){
            dbRes = err.message;
            callback(dbRes);
        }
        dbRes = result;
        callback(dbRes);
    });
    connection.end();
};
exports.readDB = function(limit=20, callback){
    return _readDB(limit, callback);
};
