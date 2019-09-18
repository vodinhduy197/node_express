'user strict';
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task_node',
    port: 3306
});
connection.connect((err) => {
    if (err) throw err;

    console.log("connected!");
});
module.exports = connection;