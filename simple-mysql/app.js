const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'testdb'
});

connection.connect((err) => {
    if(err){
        throw err;
    } else {
        console.log('Connected to MySQL Server!');
    }
});