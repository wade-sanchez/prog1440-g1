const express = require('express') //express middleware
const app = express()
const mysql = require('mysql2') //use mysql2 instead of mysql
//reasons why: MySQL 8.0.4 above uses SHA hashing so it cannot establish connection

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "UnixLover123@",
    database: "finals"
});

app.get('/', (req, res, next) => {
    // const sqlInsert = "INSERT INTO salespersons VALUES (4, 'Clarington', 'MEOW');"
    // db.query(sqlInsert, (err, result) => {
    //     res.send('IT WORKED!');
    //     // next(err);
    //     //throw error to console
    // })
});

app.post('/api/insert', (req, res) => {
    const sqlInsert = "INSERT INTO sites (name) VALUES (?,?);";
    db.query(sqlInsert, [siteName], (err, result) => {
        
    });
});
app.listen(3001, () => {
    console.log('Worked!');
});