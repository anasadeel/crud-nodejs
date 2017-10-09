//var http = require('http');
//http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/plain'});
//  res.end('Hello World\n');
//}).listen(1337, 'localhost');
//console.log('Server running at http://localhost:1337/');
var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306, //port mysql
    database: 'nodejs'
});

connection.connect(function (error) {
    if (!!error) {
        console.log('Error in connection!');
    } else {
        console.log('Success in connection!');
    }
});

app.get('/', function () {
    connection.query("SELECT * FROM users", function (error, rows, fields) {
        if (!!error) {
            console.log('Error in query!');
        } else {
            console.log('Success in query!');
            console.log(rows[0].name);
        }
    });
});//route

app.listen(1337);