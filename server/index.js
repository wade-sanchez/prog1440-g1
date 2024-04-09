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

// const db = mysql.createPool({
//     host: "localhost", 
//     user: "root",
//     password: "Preeti@555",
//     database: "claringtonsignin"
// });

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "sjain28",
  database: "claringtonsignin"
});

//generting reports 
app.post('/api/reports', (req, res) => {

  try{
    const { fromDate, toDate , fromAge , toAge, site , program } = req.body;
    console.log('From Date:', fromDate);
    console.log('To Date:', toDate);
    console.log(fromAge , toAge);
    console.log(`site and progam = , ${site} and ${program}`)
    // const site_id = 3;
    // const program_id = 2;
  
    console.log('button was clicked');
  
    const sql = `Select s.site_Name, pg.Name as ProgramName ,v.visit_ProgramID,
                a.ShortTitle, vp.vPurposeReasonID, COUNT( vp.vPurposeVisitID) as 'VisitCounted',
                month (v.DateLogged) as 'month'
                from claringtonsignin.visitpurpose as vp
                inner join claringtonsignin.visits as v ON vp.vPurposeVisitID = v.VisitID
                INNER JOIN claringtonsignin.sites as s ON v.visit_SiteID = s.siteID
                INNER JOIN claringtonsignin.purposeforvisit AS a ON vp.vPurposeReasonID = a.purposeID 
                inner join claringtonsignin.profile as p ON v.visit_ProfileID = p.ProfileID
                inner join claringtonsignin.programs as pg ON v.visit_ProgramID = pg.ProgramID
                where v.visit_SiteID = ? and v.visit_ProgramID = ? AND
                p.age Between ? AND  ? and v.DateLogged Between ? AND ?
                group by vp.vPurposeReasonID, a.ShortTitle, month(v.DateLogged)
                ORDER BY Month, s.site_Name, a.ShortTitle;`
  
      const uniqueSql = `Select s.site_Name, pg.Name as ProgramName ,v.visit_ProgramID,
                    a.ShortTitle, vp.vPurposeReasonID, COUNT(distinct v.visit_ProfileID) as 'VisitCounted',
                    month (v.DateLogged) as 'month'
                    from claringtonsignin.visitpurpose as vp
                    inner join claringtonsignin.visits as v ON vp.vPurposeVisitID = v.VisitID
                    INNER JOIN claringtonsignin.sites as s ON v.visit_SiteID = s.siteID
                    INNER JOIN claringtonsignin.purposeforvisit AS a ON vp.vPurposeReasonID = a.purposeID 
                    inner join claringtonsignin.profile as p ON v.visit_ProfileID = p.ProfileID
                    inner join claringtonsignin.programs as pg ON v.visit_ProgramID = pg.ProgramID
                    where v.visit_SiteID = ? and v.visit_ProgramID = ? AND
                    p.age Between ? AND  ? and v.DateLogged Between ? AND ?
                    group by vp.vPurposeReasonID, a.ShortTitle, month(v.DateLogged)
                    ORDER BY Month, s.site_Name, a.ShortTitle;`

    let normalData = '';
    let uniqueData= '';
  
    db.query(sql,[site,program, fromAge, toAge, fromDate , toDate], (err, normalresults) => {
      if (err) {
        console.log('Error executing SQL query: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
        console.log('normal data fetched- ',normalresults);
        normalData = normalresults;
  
        db.query( uniqueSql,[site,program, fromAge, toAge, fromDate , toDate], (err, uniqueResults) => {
          if (err) {
            console.log('Error executing SQL query: ', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
          }
            console.log('normal data fetched- ', uniqueResults);
            uniqueData = uniqueResults;
  
            const response = {
              normalData: normalData,
              uniqueData: uniqueData
            };
            res.json(response);
        });
      });
    
  }
  catch(error){
    res.status(500).json({ error: error.message });
  }
});

// app.get('/sites', (req, res) => {
//   const sql = "SELECT siteID as id, site_Name as Program from sites where site_Active=1;";
//   db.query(sql, (err, data) => {
//       if (err) return res.json(err);
//       return res.json(data);

//     })
// })

// app.get('/programs', (req,res) => {
//   const {firstName,lastName, birthDate} = req.body
//   const sql = "SELECT ProgramID as id, Name as Program from programs where program_Active=1;";
//   db.query(sql, (err, data) => {
//       if (err) return res.json(err);
//       return res.json(data);
  
//       }) 
//   })

  app.post('/PostPrograms',(req,res) => {
    const {selectedSite} = req.body
    console.log('getting program for site - ' ,selectedSite)
    const sql = `Select ProgramID as id from sitejoinprogram where SiteID='${selectedSite}';`;
    db.query(sql, (err, data) => {
      if (err) {return res.json(err)};
      console.log('data - ',data);
      return res.json(data);
        
    })
  })
  
  //--------------------add sites------------------ 

//FETCHING all SITES and PROGRAMS  
app.get('/api/sites', (req, res) => {
  const fetchSites = "SELECT * from sites;"
  const fetchPrograms = "SELECT ProgramID,Name from programs;"
 
  db.query(fetchSites, (err, resultSites) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

  db.query(fetchPrograms, (errPurposes, resultProgram) => {
    if (errPurposes) {
      return res.status(500).json({ error: errPurposes.message });
    }
    const response = {
      message: 'sites and programs fetched successfully',
      sites: resultSites,
      programs: resultProgram
    };

    res.json(response); // Sending combined response
    //console.log('programs available -',resultSites);
    });
  });

});

//FETCHING PROGRAMS SPECIFIC TO SITES
app.get('/api/siteprograms/:id', async (req, res) => {
  try {

    const siteId = req.params.id;
    //console.log('site id to fetch programs -',siteId)
    const gettingProgramIDs = "SELECT * from sitejoinprogram where SiteID = ?;" // getting join id and Site ID from joining table
    const programIDs = await new Promise((resolve, reject) => {
      db.query(gettingProgramIDs, [siteId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          //console.log('trying getting joinid-',result)
          resolve(result);
        }
      });
    });
    
    const joins = programIDs;
    const programQueries = programIDs.map(item => {
      const query = 'SELECT * from programs where ProgramID = ?';
      return new Promise((resolve, reject) => {
        db.query(query, [item.ProgramID], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result[0]);
          }
        });
      });
    });
    
    
    const programs = await Promise.all(programQueries);

    // Joining joins and programs based on ProgramID
    const joinedData = joins.map(join => {
      const program = programs.find(program => program.ProgramID === join.ProgramID);
      return { ...join, program };
    });

    res.json({ message: 'programs for site fetched',  data: joinedData });
    //console.log('programs fetch for siteid - ',joinedData)

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//CREATING SITES
app.post('/api/createSites', async (req, res) => {
  const { newSiteName, selectedPrograms } = req.body;
    
  try{

    const currentDate = new Date().toISOString().split('T')[0];

    const insertSite = 'INSERT INTO sites (site_Name, site_DateCreated) VALUES ( ?,?)';
    const siteInsertResult = await new Promise((resolve, reject) => {
      db.query(insertSite, [newSiteName,currentDate], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    const siteId = siteInsertResult.insertId;
    const insertProgram = 'INSERT INTO sitejoinprogram (SiteID, ProgramID) VALUES ?';
    const siteProgramValues = selectedPrograms.map(program =>[siteId , program.value])
    
      //console.log('value of programs-',siteProgramValues)
      await new Promise((resolve, reject) => {
        db.query(insertProgram, [siteProgramValues], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });

      res.json({ message: 'Site created successfully' });
    
  }

  catch(error){
    console.error('Error creating site:', error);
    res.status(500).json({ error: error.message });
  }

});
 
//ADDING PROGRAMS TO EXISTING SITES
app.post('/api/addprograms', async (req, res) => {
  
  try{
    const {selectedPrograms,siteID} = req.body;
    console.log( selectedPrograms,siteID);

    const insertProgram = 'INSERT INTO sitejoinprogram (SiteID, ProgramID) VALUES ?';
    const siteProgramValues = selectedPrograms.map(program =>[siteID, program.value])
      
    //console.log('value of programs-',siteProgramValues)
    await new Promise((resolve, reject) => {
      db.query(insertProgram, [siteProgramValues], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });  
    });

      res.json({ message: 'Site created successfully' });
  }

  catch(error){
    console.error('Error creating site:', error);
    res.status(500).json({ error: error.message });
  }
  
});   
  
//CHANGIN SITE STATUS
app.put('/api/sites/activate', async(req , res) =>{

  const {newSiteStatus, siteID} = req.body;
  //console.log('SITE ID TO CHANGE  - ',newSiteStatus , siteID)
  query = 'Update sites set site_Active = ? where siteID = ?';
  db.query(query, [newSiteStatus,siteID], (err , result)=>{

    if (err){
      console.log('error while updating status',err);
      return (res.status(500).json({ error: errPrograms.message }));  
    }
    else{ 
      console.log(result);
      return res.status(200).json({message : 'status updated'});
    }

  })
})

//CHANGIN RUNNING STATUS FOR PROGRAMS UNDER SPECIFIC SITES 
app.put('/api/sites/programs/activate', async(req , res) =>{

  const {newRunningStatus, joinId} = req.body;
  console.log(newRunningStatus, joinId)
  query = 'Update sitejoinprogram set runningStatus = ? where joinID = ?';
  db.query(query, [newRunningStatus, joinId], (err , result)=>{

    if (err){
      console.log('error while updating programs status for joins',err);
      return (res.status(500).json({ error: errPrograms.message }));  
    }
    else{ 
      //console.log(result);
      return res.status(200).json({message : 'status updated'});
    }

  })
})
  



//------------------addprograms----------------------- 

//CHANGING PROGRAM STATUS
app.put('/api/programs/activate', async(req , res) =>{

  const {newProgramStatus ,  programId} = req.body;
 //console.log(newProgramStatus , programId);
  query = 'Update programs set program_Active = ? where ProgramID = ?;'
  db.query(query, [newProgramStatus, programId], (err , result)=>{

    if (err){
      //console.log('error while updating programs status',err);
      return (res.status(500).json({ error: errPrograms.message })); 
    }
    else{ 
      //console.log(result);
      return res.status(200).json({message : 'status updated'});  
    }
  })
})


//CHANGING PURPOSE STATUS SPECIFICLLY
app.put('/api/purpose/activate', async(req , res) =>{

  const {newReasonStatus ,  purposeId} = req.body;
  //console.log( newReasonStatus , purposeId);
  query = 'Update purposeforvisit set purpose_Active = ? where purposeID = ?;'
  db.query(query, [ newReasonStatus, purposeId], (err , result)=>{

    if (err){
      //console.log('error while updating programs status',err);
      return (res.status(500).json({ error: err })); 
    }
    else{ 
      //console.log(result);
      return res.status(200).json({message : 'status updated'});  
    }
  })
})

//FETCHING PROGRAM AND PURPOSES DATA IN ONE GO --
app.get('/api/Programs', (req, res) => {
  const fetchPrograms = "SELECT ProgramId as ID, Name as Name,program_Active as status from programs;"
  const fetchPurposes = "SELECT purposeID as ID, ShortTitle as Title from purposeforvisit;"
  db.query(fetchPrograms, (errPrograms, resultPrograms) => {
    if (errPrograms) {
      return res.status(500).json({ error: errPrograms.message });
    }
      db.query(fetchPurposes, (errPurposes, resultPurposes) => {
        if (errPurposes) {
          return res.status(500).json({ error: errPurposes.message });
        }
        const response = {
          message: 'Data fetched successfully',
          programs: resultPrograms,
          purposes: resultPurposes
        };

        // Assuming result is an array of program objects
        res.json(response); // Sending combined response
      });
  })

})

//FETCHING SPECIFIC PURPOSES -- 
app.get('/api/Purposes/:id', (req, res) => {
  const programId = req.params.id;
  const sql = "SELECT purposeID, ShortTitle as Title,purpose_Active from purposeforvisit where purpose_ProgramID = ?;";
  db.query(sql, [programId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message }); // Sending error response
    }
 
    // Assuming result is an array of program objects
    res.json({ message: 'data fetched', purposes: result }); // Sending combined response
  });
});


//ADDING PURPOSES TO EXISTING PROGRAM --
app.post('/api/addPurpose',(req, res) => {
  
  const {inputPurpose,programid} = req.body;
  const shortTitle = inputPurpose[0].shortTitle;
  const Title =inputPurpose[0].Title;
  console.log(inputPurpose)
  console.log(programid)
  console.log(shortTitle)
  console.log(Title)
  const currentDate = new Date().toISOString().split('T')[0];
  console.log( shortTitle, Title, programid,currentDate)
  
  query = 'INSERT INTO purposeforvisit (ShortTitle, Title, purpose_ProgramID, purpose_DateCreated ) VALUES (?, ?, ?, ?)';
  db.query(query, [shortTitle, Title, programid, currentDate],(err, purposeResult) => {
    if (err) {
        console.error('Unable to store purposes', err);
        return res.status(500).json({ error: 'An error occurred while inserting purpose data' });
    }
});
res.json({ message: 'Program and purpose(s) created successfully' });
});

//CREATING NEW PROGRAM AND PURPOSES --
app.post('/api/createProgram',(req, res) => {
    
  const { programName, inputPurpose } = req.body;
  console.log(programName)
  console.log(inputPurpose)
  const currentDate = new Date().toISOString().split('T')[0];
  const queryString = 'INSERT INTO programs (Name, DateCreated) VALUES (?,?);'
  db.query(queryString,[programName, currentDate],(err, ProgramResult) => {
    
      if(err){
          console.log(err);
          res.send({err:err})
          
      }
      const programId = ProgramResult.insertId;
      //console.log(ProgramResult)
      console.log('purposes to enter - ', inputPurpose)
      inputPurpose.forEach(purpose => {
        query = 'INSERT INTO purposeforvisit (ShortTitle, Title, purpose_ProgramID, purpose_DateCreated) VALUES (?, ?, ?, ?)';
        db.query(query, [purpose.shortTitle, purpose.Title, programId, currentDate],(err, purposeResult) => {
          if (err) {
              console.error('Unable to store purposes', err);
              return res.status(500).json({ error: 'An error occurred while inserting purpose data' });
          }
        });
    });
});
res.json({ message: 'Program and purpose(s) created successfully' });
});
  








//WADE'S Code Parts

app.post('/api/youthLogin',(req, res)=>{
      const {firstName, lastName, birthDate, selectedPurposes, site, program} = req.body;
      let firstTime = 1;
      let visitIDArray =[]
      const profileIDValue = 'SELECT ProfileID FROM profile WHERE FirstName=? AND LastName=? AND BirthDate=?';
      //const date = "SELECT CURDATE()"
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
        


app.post('/api/youthRegister',(req, res) => {
  const {firstName, lastName, prefferedName, birthDate, city, streetAddress,
    postalCode, contact, email, emergContact, relativeName, relation} = req.body;


    const queryString = `INSERT INTO profile ( FirstName, LastName, PreferredName, BirthDate, CityName, StreetAddress, PostalCode , Phone, EmailAddress,
      EmergNumber,EmergContactName, EmergRelation, AddressUpdateDate, EmergContactDate, DateCreated)
      VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURDATE(), CURDATE(), CURDATE())`;

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
    //const query = `SELECT AdminUserName FROM configsetting WHERE AdminUserName = ? AND Password = aes_encrypt(?, '${result1}')`;
    const getKey = "Select * from keytable";
    const passDecrypt = `SELECT CAST(aes_decrypt(Password, 'key') as CHAR) FROM configsetting where AdminUserName = ${email} `;
    let key
    db.query(getKey, (err1, result1) => {
        key = Object.values(result1[0])
        //console.log(key)
        db.query(`SELECT AdminUserName, AdminName FROM configsetting WHERE AdminUserName = '${email}' AND Password = aes_encrypt('${password}', '${key}')`, (err, result2) => {
          //console.log(err)
          if (err) {
            //console.error(err);
            res.send({err:err})
            // res.status(500)
            // res.json({ message: 'Internal server error' });
            // return;
          }
      
          if (result2.length > 0) {
            
            res.send(result2);
            // res.json({ message: 'Login successful' });
          } else {
            // res.status(401).json({ message: 'Invalid email or password' });
            res.send({message:'Invalid Login Details! Please Try Again!'})
          }
          });
          
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
  const sql = 'SELECT ProfileID, FirstName, LastName, BirthDate, PreferredName, CityName, StreetAddress, PostalCode, Phone, EmailAddress, EmergContactName, EmergNumber, EmergRelation from profile'
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    // db.query(``,(error1,data1) => {
      //why is the date Data being converted to 1996-02-13T05:00:00.000Z format when being passed to EXPRESS JS
    //console.log(Object.values(data))
    // })
    return res.json(data);
    
  })
})





//shreyansh task, update using his files
app.post('/editProfile',(req,res) => {
  const {firstName, lastName, birthDate, prefferedName, city, streetAddress, postalCode, contact, email, emergContact, relativeName,relation, profileID} = req.body;
        db.query(`update profile set FirstName=?, LastName=?, BirthDate=?, PreferredName=?, CityName=?, StreetAddress=?, PostalCode=?, Phone=?, EmailAddress=?, EmergNumber=?, EmergContactName=?, EmergRelation=? where ProfileID='${profileID}'`,
        [firstName, lastName, birthDate, prefferedName, city, streetAddress, postalCode, contact, email, emergContact, relativeName,relation],(error,result_2)=>{
          if(error){
            console.log(error);
            //res.send({err:error})   
          }
          if(result_2){
          console.log("Profile Edited Successfully!",result_2)
          res.send({message:"Count Added"})
          }
          else{
            res.send({message:'Account not found ! Please enter correct info'})
          }
        });  
        
    })


app.post('/api/groupRegister',(req, res) => {
      const {SiteName, ProgramName, nowDate, City, Name, Description,
        AttendanceCount, VolunteerCount, VolunteerHrs} = req.body;
        //const siteSQL = `SELECT SiteID from sites where Name='${SiteName}'`
        //const programSQL = `Select ProgramID from programs where Name='${ProgramName}'`
        const queryString = `INSERT INTO massevent ( mass_SiteID, mass_ProgramID, mass_Date, mass_City, mass_Name, mass_Description, mass_AttendanceCount, mass_VolunteeerCount, mass_VolunteerHrs) VALUES ( '${SiteName}', '${ProgramName}', '${nowDate}', '${City}', '${Name}', '${Description}',
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
//get Site name for Edit Profile or anywhere that site name needs to be shown
// app.post('/getsitename', (req, res) => {
//   const {site} = req.body
//   const sql = "SELECT site_Name from sites where siteID=?";
//   db.query(sql, [site], (err, data) => {
//       if (err) return res.json(err);
//       console.log(data)
//       return res.json(Object.values(data[0]));

//   })
// })

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
      //console.log(data);
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