const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'testdb',
    debug    :  false
});

// add rows in the table

function addRow(data) {
    let insertQuery = 'INSERT INTO ?? (??,??, ??) VALUES (?,?,?)';
    let query = mysql.format(insertQuery,["customers","id", "name","salary",data.id, data.user,data.salary]);
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows added
        console.log(response.insertId);
    });
}

// query rows in the table

function queryRow(userName) {
    let selectQuery = 'SELECT * FROM ?? WHERE ?? = ?';    
    let query = mysql.format(selectQuery,["customers","name", userName]);
    // query = SELECT * FROM `customers` where `name` = 'Mike'
    pool.query(query,(err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows fetch
        console.log(data);
    });
}

// timeout just to avoid firing query before connection happens

setTimeout(() => {
    // call the function
    addRow({
        "id": 1,
        "user": "Mike",
        "salary": 1000.0
    });
},3000);

// timeout just to avoid firing query before connection happens

setTimeout(() => {
    // call the function
    // select rows
    queryRow('Mike');
},3000);
