const express = require('express') //express middleware
const app = express()
const mysql = require('mysql2') //use mysql2 instead of mysql
//reasons why: MySQL 8.0.4 above uses SHA hashing so it cannot establish connection
const cors = require('cors')

app.use(express.json());
app.use(cors())

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "UnixLover123@",
    database: "claringtonsignin"
});

app.get('/', (req, res, next) => {
    // const sqlInsert = "INSERT INTO salespersons VALUES (4, 'Clarington', 'MEOW');"
    // db.query(sqlInsert, (err, result) => {
        res.send('IT WORKED!');
    //     // next(err);
    //     //throw error to console
    // })

});

app.post('/youthlogin', (req, res) => {
    // const sqlInsert = "INSERT INTO sites (name) VALUES (?,?);";
    const sql = "SELECT FirstName, LastName, BirthDate from profile where FirstName = ? AND LastName = ? AND BirthDate = ?";
    db.query(sql, [req.body.fName, req.body.lName, req.body.bDate], (err, data) => {
        if(err) return res.json("Error");
        // return res.json(data);
        if(data.length > 0){
            return res.json("Login Successful!")
        } else {
            return res.json("Login Failed!")
        }
    });

});

app.get('/sites', (req, res) => {
    const sql = "SELECT SiteID as id, Name as Program from sites;";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);

    })
})

app.get('/programs', (req,res) => {
    const sql = "SELECT ProgramID as id, Name as Program from programs;";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);

    })
})

app.listen(3001, () => {
    console.log('Backend Server is working!!!');
});