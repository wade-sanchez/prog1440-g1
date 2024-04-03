// same as register, but search for the entry first if it exists!
//import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
//import data from './components/DummyList.js';
import TextBox from '../components/Textbox';
import Combo from '../components/ComboBox';
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn';
// import { Fieldset } from '../components/Fieldset';
import {SearchBar, firstName, lastName, birthDate} from '../components/SearchProfile';
import '../components/style.css'
// import { useNavigate } from 'react-router-dom'
//import city from '../components/CityList';
//import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios'
import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell } from '@table-library/react-table-library/table';
import { usePagination } from '@table-library/react-table-library/pagination';

const EditProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [prefferedName, setPrefferedName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [city, setCity] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [contact, setContact] = useState('');
  const [email , setEmail] = useState('');
  const [emergContact, setEmergContact] = useState('');
  const[relativeName, setRelativeName] = useState('');
  const [relation, setRelation] = useState('');
  const [searchFName, setFNameSearch] = useState('');
  const [searchLName, setLNameSearch] = useState('');
  
  
  // console.log(tableData.nodes)

  const[data, setData] =useState([])
    useEffect(() => {
        fetch('http://localhost:3001/api/GetProfileTable')
        .then(res => res.json())
        .then(data => setData(data))
        .then(console.log(data))
        .catch(err => console.log(err));
        // getSite();
    }, [])


    // const getSite = async ()=>{
    //   //console.log(SearchBar.firstName)
    //   setSite(sessionStorage.getItem("siteName"))
    //   //console.log(site)
    //   //console.log(sessionStorage.getItem("siteName"))
    //     //e.preventDefault();
    //     try {
    //       const response = await Axios.post("http://localhost:3001/getsitename", {
    //         site: "4"
    //         });
    //         setSiteN(response.data)
    //         console.log(response.data)
    //         //setSite(response)
    //         //return response
            
    //         //return response  
    //     }
    //     catch(error){
    //       console.error("Error:", error);  
    
    //     }
    //   }

const register_form = async (e)=>{
  console.log(SearchBar.firstName)
    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:3001/editProfile", {
          firstName: SearchBar.firstName,
          lastName : lastName,
          prefferedName : prefferedName,
          birthDate: birthDate,
          city: city,
          streetAddress: streetAddress,
          postalCode: postalCode,
          contact: contact,
          email: email,
          emergContact: emergContact,
          relativeName : relativeName,
          relation: relation

        });
        console.log(response)
        
        window.location.href = '/'       
    }
    catch(error){
      console.error("Error:", error);  

    }
}

//vanilla data for React Table Component
const tableData = {nodes: data}


//set number of pages, number of items per page in the table
const pagination = usePagination(data, {
    state: {
      page:0,
      size:5,
    },
    onChange: onPaginationChange,
});



  function onPaginationChange(action, state){
    console.log(action,state);
  }
  function hideEdit() {
    var x = document.getElementById("editpage");
    var y = document.getElementById("editTable");
    var z = document.getElementById("title");
    var a = document.getElementById("pagination");
    var b = document.getElementById("search");
    
      x.style.display === "none" ?
        x.style.display = null :
      x.style.display = "none";

    y.style.display === "none" ?
      y.style.display = null :
    y.style.display = "none";

    z.style.display === "none" ?
      z.style.display = null :
    z.style.display = "none";

    a.style.display === "none" ?
      a.style.display = null :
    a.style.display = "none";

    b.style.display === "none" ?
      b.style.display = null :
    b.style.display = "none";
    

  }
  
  // function hideTable() {
  //   var x = document.getElementById("editTable");
  //   if (x.style.display === "none") {
  //       x.style.display = null;
  //     }
  //   else {
  //     x.style.display = "none";
  //   }
  
  //console.log(document.getElementById("searchFName").value)
  // }
  const handleFNameSearch = (event) => {
      setFNameSearch(event.target.value);
  };

  const handleLNameSearch = (event) => {
    setLNameSearch(event.target.value);
};

  

  //Data for search Data
  //no input = show all entries in table

  //if textbox for first name populated = pass to first name
  //if textbox for last name populated = pass to last name
  
  const searchData = {
    nodes: tableData.nodes.filter((item) =>{
      // console.log(searchFName.toLowerCase());
      // console.log(searchLName.toLowerCase())
      if (
        `${item.FirstName.toLowerCase()}`.includes(searchFName.toLowerCase()) 
        && `${item.LastName.toLowerCase()}`.includes(searchLName.toLowerCase())
      ) return true
      return false
    }
        
    ),
  };

  
  return (
    <>
    <div>
      <h1 id="title" className='headings'>Edit Profile</h1>
      <div id="search">
        <div style={{textAlign:"left", paddingLeft:"25px", paddingTop:"25px", paddingBottom:"10px"}}>
          <label className='label2' htmlFor="searchFName">
            Search by First Name:
          </label>
          <input id="searchFName" type="text" onChange={handleFNameSearch}/>
        </div>
        <div style={{textAlign:"left", paddingLeft:"25px", paddingBottom:"25px"}}>
          <label className='label2' htmlFor="searchLName">
            Search by Last Name:
          </label>
          <input id="searchLName" type="text" onChange={handleLNameSearch} />
        </div>
      </div>
            <Table id="editTable" data={searchData} pagination={pagination}>
        {(tableList) => (
            <>
            <Header>
                <HeaderRow>
                    <HeaderCell style={{textAlign:"center"}}>First Name</HeaderCell>
                    <HeaderCell style={{textAlign:"center"}}>Last Name</HeaderCell>
                    <HeaderCell style={{textAlign:"center"}}>Birthday</HeaderCell>
                    <HeaderCell style={{textAlign:"center"}}>Phone</HeaderCell>
                    <HeaderCell style={{textAlign:"center"}}>EmergContact</HeaderCell>
                    <HeaderCell></HeaderCell>
                </HeaderRow>
            </Header>
            <Body>
            {tableList.map((item) => (
                        <Row key={item.ProfileID} item={item}>
                            <Cell>{item.FirstName}</Cell>
                            <Cell>{item.LastName}</Cell>
                            <Cell>{item.BirthDate.substring(0,10)}</Cell>
                            <Cell>{item.Phone}</Cell>
                            <Cell>{item.EmergContactName}</Cell>
                            <Cell><button style={{width:"50%"}} className="buttons" onClick={hideEdit}>Edit</button></Cell>
                        </Row>
                    ))}
            </Body>
            </>
        )}
        
    </Table>

     <div>
        {/* <span>
         Total Pages: {pagination.state.getTotalPages(tableData.nodes)}
       </span> */}
       <span id="pagination">
          Page:{' '}
         {pagination.state.getPages(tableData.nodes).map((_, index) => (
            <button
              key={index}
              type="button"
             style={{
               fontWeight:
                 pagination.state.page === index
                   ? 'bold'
                   : 'normal',
             }}
             onClick={() => pagination.fns.onSetPage(index)}>
                {index+1}
            </button>
          ))}
        </span>
      </div>
    </div>






    <div id="editpage" style={{display:'none'}} className='homepage'>
    <h1 className='headings'>Edit Profile</h1>
    <div className="wrappers">
      <div>
        <h3 className='label'>Search for a profile:</h3>
        {/* <SearchBar firstName={firstName} lastName={lastName} birthDate={birthDate}/> */}
      </div>
      {/* <Fieldset> */}
      {/* <div>
      <TextBox tbType="text" placeholder="Search for entry to edit..." tbName="search"></TextBox>
      </div>
    <button type="submit"><i class="fa fa-search">Search</i></button> */}
    
    {/* next step: alert - entry found or not found */}
      <br/>
      <form onSubmit={register_form}>
      <div className='spacing'><label className="label">First Name:</label><TextBox className="input-field" onChange ={e => setFirstName(e.target.value)}/></div>
      <div className='spacing'><label className="label">Last Name:</label><TextBox className="input-field" onChange ={e => setLastName(e.target.value)}/></div>
      <div className='spacing'><label className="label">Birth Date:</label><TextBox className="input-field" tbType="date" onChange ={e => setBirthDate(e.target.value)}/></div>
      <div className='spacing'><label className="label">Preferred Name:</label><TextBox className="input-field" onChange ={e => setPrefferedName(e.target.value)}/></div>
      <div className='spacing'><label className="label">City: </label><TextBox className="input-field" onChange ={e => setCity(e.target.value)}/></div>
      <div className='spacing'><label className="label">Street Address:</label><TextBox className="input-field" onChange ={e => setStreetAddress(e.target.value)}/></div> 
      <div className='spacing'><label className="label">Postal Code:</label><TextBox className="input-field" onChange ={e => setPostalCode(e.target.value)}/></div>
      <div className='spacing'><label className="label">Phone:</label><TextBox className="input-field" onChange ={e => setContact(e.target.value)}/></div>
      <div className='spacing'><label className="label">Email Address:</label><TextBox className="input-field" onChange ={e => setEmail(e.target.value)}/></div>
      <div className='spacing'><label className="label">Emergency Contact:</label><TextBox className="input-field" onChange ={e => setRelativeName(e.target.value)}/></div>
      <div className='spacing'><label className="label">Relation:</label><TextBox className="input-field" onChange ={e => setRelation(e.target.value)}/></div>
      <div className='spacing'><label className="label">Emergency Contact #:</label><TextBox className="input-field" onChange ={e => setEmergContact(e.target.value)}/></div>
    
    <div className='registration-buttons'>
      <button type="submit" className="buttons">Edit Youth Profile</button>
      <ReturnToStaffMenu className="buttons"/>
    </div>
    <div className='registration-buttons'>
      <button style={{width:"50%"}} type="button" onClick={hideEdit} className="buttons">Return to Table</button>
    </div>
    </form>
    </div>
    </div>
    </>
  );
}

export default EditProfile;