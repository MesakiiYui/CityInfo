const mysql = require('mysql');

exports.readDB = (limit=20) =>{

	const connection = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'root',
		database:'world',
	});

	connection.connect();
	let dbRes = 'Info Not Found in DB.';
	const sql = `SELECT * FROM city LIMIT ${limit};`;
	console.log('sql:', sql);
	connection.query(sql,(err, result) => {
		if(err){
			console.log('[QUERY ERR]：' + err.message);
			dbRes = err.message;
			return dbRes;
		}
		dbRes = result;
		console.log('dbRes:', dbRes);
		return dbRes;
	});
};

// exports.readDB = readDB();
// // node ConnectDB.js
