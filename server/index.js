const express = require('express') //express middleware
const app = express()
const bodyParser = require('body-parser');
const mysql = require('mysql2') //use mysql2 instead of mysql
//reasons why: MySQL 8.0.4 above uses SHA hashing so it cannot establish connection
const cors = require('cors')
var isMatch = "";
app.use(express.json());
app.use(bodyParser.json());
app.use(cors())

// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "UnixLover123@",
//     database: "claringtonsignin"
// });

const db = mysql.createPool({
    host: "localhost", 
    user: "root",
    password: "UnixLover123@",
    database: "claringtonsignin"
});

app.post('/api/youthLogin',(req, res)=>{
      const {firstName, lastName, birthDate,purpose} = req.body;
      const query = "SELECT * FROM profile WHERE FirstName = ? AND LastName = ? AND BirthDate = ?";

      db.query(query, [firstName, lastName, birthDate,purpose],(err, result_1) => {
        if (err) {
          res.send({err:err})
        }
    
        if (result_1.length > 0) {
          console.log("record found");
          db.query('INSERT INTO youth_visit(name,purposes) VALUES (?,?)',[firstName,purpose],(error,result_2)=>{
            if(error){
              console.log(error);
              res.send({err:error})   
            } 
            console.log("Visiters info added successfully",result_2)
            res.send({message:"Count Added"})

          }); 
          
         } 
        else {
         
          res.send({message:'Account not found ! Please enter correct info'})
        }
      });
    });


app.post('/api/youthRegister',(req, res) => {
  const {firstName, lastName, prefferedName, birthDate, city, streetAddress,
    postalCode, contact, email, emergContact, relativeName, relation} = req.body;


    const queryString = 'INSERT INTO profile ( FirstName, LastName, PreferredName, BirthDate, CityName, StreetAddress, PostalCode , Phone, EmailAddress, EmergContact, EmergName, EmergRelation) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    // db.getConnection((err , connection) =>{
    //   if(err){
    //       console.error('Error connecting:', err)
    //       res.status(500).json( {error: 'Error connecting to the database'})
    //       return; 
    //   }

    db.query(queryString,[firstName, lastName, prefferedName, birthDate, city, streetAddress, postalCode, contact, email, emergContact, relativeName,relation],
                      (err, result) => {

                      if(err){
                          console.log(err);
                          res.send({err:err})

                      }


                      //console.log("account registered successfully",result)
                      res.send({message:"account registeres"})
      });
  });

  app.post('/api/stafflogin', (req, res) => {
    const { email, password } = req.body;
    // const query = "SELECT (name) FROM staffdata WHERE emailId = ? AND password = ?";
    const query = "SELECT AdminName FROM configsetting WHERE AdminName = ? AND Password = ?";
    
    db.query(query, [email, password],(err, result) => {
      if (err) {
        //console.error(err);
        res.send({err:err})
        // res.status(500)
        // res.json({ message: 'Internal server error' });
        // return;
      }
  
      if (result.length > 0) {
        res.send(result);
        // res.json({ message: 'Login successful' });
      } else {
        // res.status(401).json({ message: 'Invalid email or password' });
        res.send({message:'wrong combination'})
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

app.post('/searchProfile', (req, res) => {
  const {firstName, lastName, birthDate} = req.body;
  const query = "Select FirstName, LastName, BirthDate from profile where FirstName=? AND LastName=? AND BirthDate=?;";
  db.query(query, [firstName, lastName, birthDate],(err, result) => {
    if (err) {
      //console.error(err);
      res.send({err:err})
      console.log("Error")
      // res.status(500)
      // res.json({ message: 'Internal server error' });
      // return;
    }
    console.log(result)
    if (result.length > 0) {
      res.send(result);
      console.log("MATCH FOUND!")
      isMatch=1;
      // res.json({ message: 'Login successful' });
    } else {
      // res.status(401).json({ message: 'Invalid email or password' });
      res.send({message:'wrong combination'})
    }
  });

})

app.post('/editProfile',(req,res) => {
  const { firstName, lastName, birthDate, prefferedName, city, streetAddress, postalCode, contact, email, emergContact, relativeName,relation} = req.body;
    console.log(firstName, lastName, birthDate)
      if (result_1.length > 0) {
        console.log("record found");
        db.query('update profile set FirstName=?, LastName=?, BirthDate =?, PreferredName=?, CityNam?, StreetAddres?, PostalCode=?, Phone=?, EmailAddress=?, EmergContact=?, EmergName=?, EmergRelation=?) where FirstName=? AND LastName=? AND BirthDate=?',
        [firstName, lastName, birthDate, prefferedName, city, streetAddress, postalCode, contact, email, emergContact, relativeName,relation],(error,result_2)=>{
          if(error){
            console.log(error);
            res.send({err:error})   
          } 
          console.log("Profile Edited Successfully!",result_2)
          res.send({message:"Count Added"})

        }); 
        
       } 
      else {
        res.send({message:'Account not found ! Please enter correct info'})
      }
    })


app.post('/api/groupRegister',(req, res) => {
      const {SiteName, ProgramName, nowDate, City, Name, Description,
        AttendanceCount, VolunteerCount, VolunteerHrs} = req.body;
        //const siteSQL = `SELECT SiteID from sites where Name='${SiteName}'`
        //const programSQL = `Select ProgramID from programs where Name='${ProgramName}'`
        const queryString = `INSERT INTO massevent ( SiteID, ProgramID, Date, CityName, Name, Description, AttendanceCount, VolunteeerCount, VolunteerHrs) VALUES ( '${SiteName}', '${ProgramName}', '${nowDate}', '${City}', '${Name}', '${Description}',
        '${AttendanceCount}', '${VolunteerCount}', '${VolunteerHrs}')`;
    
        // db.getConnection((err , connection) =>{
        //   if(err){
        //       console.error('Error connecting:', err)
        //       res.status(500).json( {error: 'Error connecting to the database'})
        //       return; 
        //   }
    
        db.query(queryString,[SiteName, ProgramName, nowDate, City, Name, Description,
          AttendanceCount, VolunteerCount, VolunteerHrs],
                          (err, result) => {
    
                          if(err){
                              console.log(err);
                              // res.send({err:err})
    
                          }
                          //console.log("account registered successfully",result)
                          res.send({message:"Group Event Registered"})
          });
      });    


app.get('/programs', (req,res) => {
    const {firstName,lastName, birthDate} = req.body
    const sql = "SELECT ProgramID as id, Name as Program from programs;";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);

    })

    
})

app.get('/', (req, res, next) => {
    // const sqlInsert = "INSERT INTO salespersons VALUES (4, 'Clarington', 'MEOW');"
    // db.query(sqlInsert, (err, result) => {
        res.send('IT WORKED!');
    //     // next(err);
    //     //throw error to console
    // })

});

app.listen(3001, () => {
    console.log('Backend Server is working!!!');
});