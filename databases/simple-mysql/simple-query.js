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

connection.query('SELECT * from customers LIMIT 10', (err, rows) => {
    if(err) throw err;
    console.log('The data from customers table are: \n', rows);
    connection.end();
});