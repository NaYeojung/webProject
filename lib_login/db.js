var mysql = require('mysql2');
var db = mysql.createConnection({
    host: '0.0.0.0',
    user: 'user1',
    password: '2621',
    database: 'mysql',
    port: '3306'
});
db.connect();

module.exports = db;