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
      const {firstName, lastName, birthDate, selectedPurposes, site, program} = req.body;
      let firstTime = 1;
      let visitIDArray =[]
      const profileIDValue = 'SELECT ProfileID FROM profile WHERE FirstName=? AND LastName=? AND BirthDate=?';
      //const date = "SELECT CURDATE()"
      const testValue = "";
      //console.log(birthDate)
      //const purposeArray = str.split(',')
      //check profileID
      //purposes 
      //first time
      const purposeInsert = (item) => {
        db.query(`Insert into visitpurpose(vPurposeVisitID, vPurposeReasonID) values(${VisitIDValue}, ${item})`, (error,result_5) => {
          //console.log(result_5)
        })
      }



      //QUERY 1: Check if the account exists!
      db.query(profileIDValue,[firstName, lastName, birthDate],(err, result_1) => {
        if (err) {
          console.log(err)
          res.send({err:err})
        }
          
        //console.log("Selected Purposes: " + selectedPurposes)
        if (result_1.length > 0) {
          //console.log("record found");
          console.log('Account found!')
          //Query 2: Check if First Time - Check Length of result_2. If greater than or equal to one = not the first time visiting
          var profileIDValue = Object.values(result_1[0]);
          db.query(`SELECT visit_ProfileID from visits where visit_ProfileID=${profileIDValue}`, (error, result_2) => {
            //console.log(result_2)
            //console.log(result_2.length)
            if (result_2.length >= 1){
              firstTime=0
            }
            //console.log(firstTime)
            //Query 3: Insert Records to the Visit Table
            db.query(`INSERT INTO visits(visit_SiteID, visit_ProgramID, visit_ProfileID, DateLogged, FirstTime) VALUES (${site},${program},${profileIDValue}, CURDATE(), ${firstTime})`, (error,result_3)=>{
              if(error){
                console.log(error);
                // res.send({err:error})   
              }
              else{
                console.log("Visit Entry Successfully Inserted in Visits Table!")
              }
              //Query 4: Insert the Purposes into the visitpurpose table
              //Each purpose should be inserted in respective rows! (MultiSelect Problem)
              console.log("Purposes:" +selectedPurposes)
              const visitID = `Select VisitID from visits where visit_SiteID=${site} AND visit_ProgramID=${program} and visit_ProfileID=${profileIDValue} AND datelogged=CURDATE()`;
              db.query(visitID, (error,result_4) =>{
                var len = result_4.length-1
                VisitIDValue=Object.values(result_4[len])
                console.log("Length: "+ len)
                console.log("Visit ID: " + VisitIDValue)
                selectedPurposes.forEach(purposeInsert);
                res.send({message:'Logged Successfully!'})
                //Check if the reason for visit is exactly the same. If same = don't allow entry, else = allow entry
              })
            
            });
          })
        }
        //send Error message if account not found
        else {
          res.send({message:'Account not found ! Please enter correct info'})
        }

      });
    })
        
        //     for (const element of selectedPurposes) {
        //       const newItem = element;
        //       const purposeQuery = `Insert into visitpurpose(vPurposeVisitID, vPurposeReason) values(${newItem}, ${testValue})`;
        //     }
        //     console.log("Visiters info added successfully",result_2)
        //     res.send({message:"Count Added"})

        //   }); 
          
        //  } 
        


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
    const query = "SELECT AdminUserName FROM configsetting WHERE AdminUserName = ? AND Password = ?";
    
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

  //shreyansh task update using his files
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

app.get('/api/GetProfileTable',(req,res) => {
  const sql = 'SELECT FirstName, LastName, BirthDate from profile'
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    // db.query(``,(error1,data1) => {
      //why is the date Data being converted to 1996-02-13T05:00:00.000Z format when being passed to EXPRESS JS
    console.log(Object.values(data))
    // })
    return res.json(data);
    
  })
})





//shreyansh task, update using his files
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
        const queryString = `INSERT INTO massevent ( mass_SiteID, mass_ProgramID, mass_Date, mass_CityName, mass_Name, mass_Description, mass_AttendanceCount, mass_VolunteeerCount, mass_VolunteerHrs) VALUES ( '${SiteName}', '${ProgramName}', '${nowDate}', '${City}', '${Name}', '${Description}',
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


app.get('/sites', (req, res) => {
    const sql = "SELECT siteID as id, site_Name as Program from sites where site_Active=1;";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);

    })
})

app.get('/programs', (req,res) => {
    const {firstName,lastName, birthDate} = req.body
    const sql = "SELECT ProgramID as id, Name as Program from programs where program_Active=1;";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);

    }) 
})

app.post('/PostPrograms',(req,res) => {
    const {selectedSite} = req.body
    const sql = `Select ProgramID as id from sitejoinprogram where SiteID='${selectedSite}';`;
    db.query(sql, (err, data) => {
      if (err) return res.json(err);
      console.log(data);
      return res.json(data);
      
  })
})

app.post('/ReasonForVisit',(req,res) => {
  const {program} = req.body
  const sql = `SELECT ShortTitle as label, CAST(purposeID as char(1)) as value from purposeforvisit where purpose_Active=1 AND purpose_ProgramID=${program};`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    //console.log(data);
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