import TextBox from '../components/Textbox';
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn';
import '../components/style.css'
import { useState, useEffect } from 'react';
import Axios from 'axios'
import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell } from '@table-library/react-table-library/table';
import { usePagination } from '@table-library/react-table-library/pagination';
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [profileID, setProfileID] = useState('');
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
  const[data, setData] =useState([])
  useEffect(() => {
      fetch('http://localhost:3001/api/GetProfileTable')
      .then(res => res.json())
      .then(data => setData(data))
      .then(console.log(data))
      .catch(err => console.log(err));
  }, [])

  function onPaginationChange(action, state){
    console.log(action,state);
  }

  const pagination = usePagination(data, {
    state: {
      page:0,
      size:5,
    },
    onChange: onPaginationChange,
});


const navigate = useNavigate();
 
//AUTHORIZATION
 if(!sessionStorage.getItem("StaffLogged")){
  navigate('/');
  }
  else{ 
  const handleSearch = (data) => {
    // Update state with retrieved data
      // console.log("Item: " + data) //check if data was cleared
      const timestamp = data[profileID-1].BirthDate;
      const datepart = timestamp.split('T')[0];
      console.log(datepart)
      console.log(data)
      setFirstName(data[profileID-1].FirstName)
      setLastName(data[profileID-1].LastName)
      setPrefferedName(data[profileID-1].PreferredName);
      setBirthDate(datepart)
      setCity(data[profileID-1].CityName);
      setStreetAddress(data[profileID-1].StreetAddress);
      setPostalCode(data[profileID-1].PostalCode);
      setContact(data[profileID-1].Phone);
      setEmail(data[profileID-1].EmailAddress);
      setEmergContact(data[profileID-1].EmergNumber);
      setRelativeName(data[profileID-1].EmergContactName);
      setRelation(data[profileID-1].EmergRelation);
  };

  // console.log(tableData.nodes)

const register_form = async (e)=>{

    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:3001/editProfile", {
          firstName: firstName,
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
          relation: relation,
          profileID: profileID
        });
        console.log(response)
        
        window.location.href = '/EditProfile'  
    }
    catch(error){
      console.error("Error:", error);  

    }
}

//vanilla data for React Table Component
const tableData = {nodes: data}


//set number of pages, number of items per page in the table

  function hideEdit() {
    if(profileID>0){
    var x = document.getElementById("editpage");
    var y = document.getElementById("editTable");
    var z = document.getElementById("title");
    var a = document.getElementById("pagination");
    var b = document.getElementById("search");
    handleSearch(data)
    
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
  else{
    alert("Please click the row you want to edit first!")
  }
  }

console.log(profileID)
  function goBack() {
   
    var x = document.getElementById("editpage");
    var y = document.getElementById("editTable");
    var z = document.getElementById("title");
    var a = document.getElementById("pagination");
    var b = document.getElementById("search");
    setFirstName('');
      setLastName('');
      setPrefferedName('');
      setBirthDate('');
      setCity('');
      setStreetAddress('');
      setPostalCode('');
      setContact('');
      setEmail('');
      setEmergContact('');
      setRelativeName('');
      setRelation('');
      setProfileID('');
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
                        
                        <Row id="row-id" key={item.ProfileID} item={item} onClick={(item) => setProfileID(item.ProfileID)}> 
                            <Cell>{item.FirstName}</Cell>
                            <Cell>{item.LastName}</Cell>
                            <Cell>{item.BirthDate.substring(0,10)}</Cell>
                            <Cell>{item.Phone}</Cell>
                            <Cell>{item.EmergContactName}</Cell>
                            <Cell><div ><button style={{width:"50%", padding:0}} className="buttons" onClick={hideEdit}>Edit</button></div></Cell>
                        </Row>
                    ))}
            </Body>
            </>
        )}
        
    </Table>
    <div id="pagination">
     <div>
        {/* <span>
         Total Pages: {pagination.state.getTotalPages(tableData.nodes)}
       </span> */}
       <span>
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
      <ReturnToStaffMenu style={{padding:7, width:"20%"}} className="buttons"/>
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
      <div className='spacing'><label className="label">First Name:</label><TextBox className="input-field" value={firstName} onChange ={e => setFirstName(e.target.value)}/></div>
      <div className='spacing'><label className="label">Last Name:</label><TextBox className="input-field" value={lastName} onChange ={e => setLastName(e.target.value)}/></div>
      <div className='spacing'><label className="label">Birth Date:</label><TextBox className="input-field" value={birthDate} tbType="date" onChange ={e => setBirthDate(e.target.value)}/></div>
      <div className='spacing'><label className="label">Preferred Name:</label><TextBox className="input-field" value={prefferedName} onChange ={e => setPrefferedName(e.target.value)}/></div>
      <div className='spacing'><label className="label">City: </label><TextBox className="input-field" value={city} onChange ={e => setCity(e.target.value)}/></div>
      <div className='spacing'><label className="label">Street Address:</label><TextBox className="input-field" value={streetAddress} onChange ={e => setStreetAddress(e.target.value)}/></div> 
      <div className='spacing'><label className="label">Postal Code:</label><TextBox className="input-field" value={postalCode} onChange ={e => setPostalCode(e.target.value)}/></div>
      <div className='spacing'><label className="label">Phone:</label><TextBox className="input-field" value={contact} onChange ={e => setContact(e.target.value)}/></div>
      <div className='spacing'><label className="label">Email Address:</label><TextBox className="input-field" value={email} onChange ={e => setEmail(e.target.value)}/></div>
      <div className='spacing'><label className="label">Emergency Contact:</label><TextBox className="input-field" value={relativeName} onChange ={e => setRelativeName(e.target.value)}/></div>
      <div className='spacing'><label className="label">Relation:</label><TextBox className="input-field" value={relation} onChange ={e => setRelation(e.target.value)}/></div>
      <div className='spacing'><label className="label">Emergency Contact #:</label><TextBox className="input-field" value={emergContact} onChange ={e => setEmergContact(e.target.value)}/></div>
    
    <div className='registration-buttons'>
      <button type="submit" className="buttons">Save Youth Profile</button>
      <ReturnToStaffMenu className="buttons"/>
    </div>
    <div className='registration-buttons'>
      <button style={{width:"50%"}} type="button" onClick={goBack} className="buttons">Return to Table</button>
    </div>
    </form>
    </div>
    </div>
    </>
  );
  }
}
export default EditProfile;

