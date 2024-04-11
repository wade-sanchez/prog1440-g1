import React, {useState, useEffect} from 'react'
import '../index'
// import BlueButton from '../components/Button';
import './home.css';
import Combo from '../components/ComboBox';
import { useNavigate, Route, Routes } from 'react-router-dom';
import YouthLogin from './YouthLogin';
import { Home } from './Home';
import Axios from 'axios';

//import { Fieldset } from '../components/Fieldset';

export const SiteSelect = (props) => {
    const navigate = useNavigate();
    const navigateToSignIn = () => {
    navigate('/Home');
  }

    const[siteData, setSiteData] = useState([]);
    const[programData, setProgramData] = useState([]);
    const[selectedSite, setSelectedSite] = useState([]);
    const[selectedProgram, setSelectedProgram] = useState([]);
 
    console.log(selectedSite)
    console.log(selectedProgram)
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
    // console.log(programData)
    //console.log(sessionStorage.getItem("siteName"));

    const selectSite= () => {
      var siteName = sessionStorage.getItem("siteName")
      //initialize session storate
      siteName=selectedSite;
      //update session storage
      sessionStorage.setItem("siteName", siteName);

        return(
    siteData.map(siteData => 
        (<option key={siteData.id} value={siteData.id}>{siteData.Program}</option>))
    )}

    const selectProgram= () => {
      var progName = sessionStorage.getItem("progName");
      //initialize session storate
          progName=selectedProgram;
        //update session storage
        sessionStorage.setItem("progName", progName);
      return(
        filteredProg.map(filteredProg => 
          (<option key={filteredProg.id} value={filteredProg.id}>{filteredProg.Program}</option>))
  )}

  //print sites only associated with program
  const [filteredProg, setFilteredProg] = useState(programData);
  const selectP = async (e)=>{

    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:3001/PostPrograms", {
          selectedSite: selectedSite
        });
        //const object = array.find(obj => obj.id === 3);
        const progVar = response.data;
        console.log(progVar)
        // setProgramData => response.data;
       // setProgramData(programData => programData.filter((progVar)=> programData.id != progVar.id ))
        //console.log(programData)
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
  //console.log(sessionStorage.getItem("siteName"))
  //console.log(sessionStorage.getItem("progName"))
  // console.log(document.getElementById('selectSite'))
  const nextPage = () => {
    if (document.getElementById('selectSite') !== null){
      if (document.getElementById('selectProgram') !== null){
        navigateToSignIn()
      }
    }
  }

  //disable back
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
  window.history.go(1);
  };

  if(!sessionStorage.getItem("StaffLogged")){
    navigate('/');
  }
  else{
    return (
        
      <div className='image'>
        <div className='box-container'>
          <form onSubmit={navigateToSignIn}>
          <h1>Please select the appropriate Site and Program:</h1>
          <br/>
          <div>
            <div>
              <label class="lblHome" for="siteSelect"><b> Site Selection: </b></label>
              {/* <Combo className="sites" dataType="data" id="siteSelect" value={selectProgram()} ></Combo> */}
              <select className="sites" dataType="data" id="siteSelect" onClick={selectP} onChange ={e => setSelectedSite(e.target.value)} required><option value="" selected="selected" disabled="disabled">Select option:</option>{selectSite()}</select>
            </div>
            <div>
              <label class="lblHome" for="programSelect"> <b>Program Selection:</b> </label>
              {/* <Combo name="programs" className="programs" dataType="siteData" id="programSelect"> </Combo> */}
              <select className="sites" dataType="data" onClick={selectP} onChange ={e => setSelectedProgram(e.target.value)} id="programSelect" required><option id="a" value="" selected="selected" disabled="disabled">Select option:</option>{selectProgram()}</select>
            </div>
              <br/>
              
              {/* <BlueButton onClick={navigateToSignIn} btnText={'Go to Sign-In'}/> */}
              {/* Component Button^ */}
              <button class="button1" type="submit" value="Submit">Go to Sign-In</button>
              {/* Hard Coded Button^ */}
              <Routes>
                  <Route path='home' element={<Home/>} />
              </Routes>
              
          </div>
          </form>
        </div>
        </div>
    )
  }
}