'use strict';

const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

/*
 * ROUTES 
 */
app.get('/', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/whoami', function(req, res) {
	res.json({ 
		// http://stackoverflow.com/questions/8107856/how-to-determine-a-users-ip-address-in-node
		ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
		language: req.headers["accept-language"],
		os: req.headers['user-agent']
	});
});

app.listen(port, function() {
	console.log('header-parser-ms listening on port ' + port);
});