const fs = require("fs");

const FILEPATH = './../Data/plainInfo.txt';

exports.loadByStream = () => {
	let streamData = '';
	const readStream = fs.createReadStream(FILEPATH);
	readStream.setEncoding('UTF8');
	readStream.on('data', (chunk) => {
		streamData +=chunk;
	});
	readStream.on('end', () => {
		console.log('end of read file, result: ', streamData);
	});
	readStream.on('error', (err) => {
		console.log('Unexpect err: ', err.stack);
	});
};

exports.loadBasic = () => {
	fs.readFile(FILEPATH, (err, data) => {
		if(err) return console.error(err);
		console.log(data.toString());
	});

	console.log('File load completed');
};


//node readLocalFile.js
