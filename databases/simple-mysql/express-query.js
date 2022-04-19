const express = require("express");
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'testdb'
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
});

// the query is executed when going to http://localhost:3000

app.get("/",(req,res) => {
    connection.query('SELECT * from customers LIMIT 10', (err, rows) => {
        if(err) {
            throw err;
        }
        console.log('The data from users customers are: \n', rows);
        connection.end();
    });
});

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});