//reports, show different reports
import React, {useState,useEffect} from 'react'
import './newReports.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn';


//import { ExportToExcel } from './ExportToExcel';

export const Reports = () => {
  
  const navigate = useNavigate() 
  const [fromAge , setFromAge] = useState('12');
  const [toAge , setToAge] = useState('15')
  const [inputList, setInputList] = useState([
    <div>
      <label id='ageFrom' className='space'>From: </label>
      <input type="number" className='label-spacing' />
      <label id='ageTo' className='space'>To:</label>
      <input type="number" />
    </div>
  ]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString()); // Default to current year

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  useEffect(() => {
    if (!sessionStorage.getItem('StaffLogged')) {
      navigate('/');
    }
  }, [navigate]);
  //axios route  
  const generateReport = async () => {
    try{ 
      const from = document.getElementById('from').value;
      const to = document.getElementById('to').value;
      navigate(`/generateReports?site=${selectedSite}&program=${selectedProgram}&fromDate=${from}&toDate=${to}&fromAge=${fromAge}&toAge=${toAge}`)
  
    }
    catch(error){
      console.log('error while retriving the data',error)
    }
  }
  

//---------------------------------getting data for sitesselect -------------------------

    const[siteData, setSiteData] = useState([]);
    const[programData, setProgramData] = useState([]);
    const[selectedSite, setSelectedSite] = useState([]);
    const[selectedProgram, setSelectedProgram] = useState([]);
    const[siteName, setSiteName] = useState([]);
    const[programName, setProgramName] = useState([]);
    useEffect(() => {
        var link1 = 'http://localhost:3001/sites'
        // var link2 = link1+className
        // console.log(className)
        
        fetch(link1)
        .then(res1 => res1.json())
        .then(siteData => setSiteData(siteData))
        .catch(err1 => console.log(err1));

        var link2 = 'http://localhost:3001/programs'
        // var link2 = link1+className
        // console.log(className)
        fetch(link2)
        .then(res2 => res2.json())
        .then(programData => setProgramData(programData))
        .catch(err2 => console.log(err2));
        
    }, [])
  

    const selectSite= () => {
      var siteName = sessionStorage.getItem("siteName")
      //initialize session storate
      siteName=selectedSite;
      //update session storage
      sessionStorage.setItem("siteName", siteName); //id
      sessionStorage.setItem("site", programName); //name

        return(
    siteData.map(siteData => 
        (<option key={siteData.id} value={siteData.id}>{siteData.Program}</option>))
        
    )
  }

    const selectProgram= () => {
      var progName = sessionStorage.getItem("progName");
      //initialize session storate
          progName=selectedProgram;
        //update session storage
        sessionStorage.setItem("progName", progName); //id
        sessionStorage.setItem("program", programName); //name
      return(
        filteredProg.map(filteredProg => 
          (<option key={filteredProg.id} value={filteredProg.id}>{filteredProg.Program}</option>))
  )}

  //print sites only associated with program
  const [filteredProg, setFilteredProg] = useState(programData);
  const selectP = async (e)=>{

    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/PostPrograms", {
          selectedSite: selectedSite
        });
        const progVar = response.data;
        console.log(progVar)
       
        setFilteredProg(programData.filter(function(cItem) {
          return progVar.find(function(aItem) {
            return cItem.id === aItem.id
          })
        }))
        console.log(filteredProg)
      }
    catch(error){
      console.error("Error:", error);  

    }
  }
  //check session data if stored
  console.log(sessionStorage.getItem("siteName"))
  console.log(sessionStorage.getItem("progName"))

  if(!sessionStorage.getItem("StaffLogged")){
    navigate('/');
  }
else{

    return (

    <>
      <div className='wrapper1'>
        <form >
            <h1> Reports and Analytics :</h1>
              <div className='labelr'>
                <div>
                  <label className="lblHome" for="siteSelect"><b> Site Selection: </b></label>
                
                  <select className="sites" dataType="data" id="siteSelect" onClick={selectP} onSelect={e=>setSiteName(e.target.key)} onChange ={e => setSelectedSite(e.target.value)}><option>Select option:</option>{selectSite()}</select>
                </div>


                <div>
                  <label className="lblHome" for="programSelect"> <b>Program Selection:</b> </label>
                
                  <select className="sites" dataType="data" onSelect={e=>setProgramName(e.target.key)} onChange ={e => setSelectedProgram(e.target.value)} id="programSelect"><option id="a">Select option:</option>{selectProgram()}</select>
                </div>
              </div>
              <br/>
              <br/>
              <h3>Pick Date Range:</h3>
          
          <div className="newSelection">

              <label className="lblHome">Year:</label>
              <input dataType="data" id="yearSelect" onChange={handleYearChange}
                value={selectedYear}
                required />
                
            <br/> <br/>
            <div className="labels">
              <label className="lblHome">From:</label>
              <input
                id="from"
                type="date"
                className="label-spacing"
                min={`${selectedYear}-01-01`}
                max={`${selectedYear}-12-31`}
                required
              />
              <label className="lblHome">To:</label>
              <input 
                id="to"
                type="date"
                className="label-spacing"
                min={`${selectedYear}-01-01`}
                max={`${selectedYear}-12-31`}
                required
              />
            </div>
          </div>
                
              <br/>
              <h3>Age Groups :</h3>
              <div className='newSelection'> 
                <div className='para'>
                  <div>Select the Age Range of the Clients you with to report on.</div>
                  
                  </div>
              </div>
                  <div className='labels'>
                  {inputList.map((group, index) => (
                    <div key={index}>
                      <div>
                        <label className="lblHome">From: </label>
                        <input id={`ageFrom-${index}`}  value={fromAge} type="number"  className='label-spacing' onChange={ e => setFromAge(e.target.value) } required/>
                      </div>
                       
                      <div>
                        <label className="lblHome">To:</label>
                        <input id={`ageTo-${index}`} type="number" value= {toAge}   className='label-spacing' onChange={ e => setToAge(e.target.value) } required/>
                      </div>
                    </div>
                  ))}
                </div>

              <div>
                <div><button type="submit" className='button' onClick={generateReport}>Generate Report</button> </div> <br/>
                <div><ReturnToStaffMenu className="button"/></div>
                
              </div>
      
        </form>
      </div>
      </>
    )
  }
}
