//reports, show different reports
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import ReactDOM from "react-dom"
import Combo from '../components/ComboBox'
import { ReportTable } from '../components/ReportTable';
import './reports.css'


export const Reports = () => {
  const navigate = useNavigate();
  const [inputList, setInputList] = useState([]);
  const [inputTable, setInputTable] = useState([]);
  const removeAgeGroup = () => {
    const element = document.getElementById("newAgeGroup");
    element.remove();
  }
  const onAddBtnClick = event => {
    setInputList(inputList.concat(
    <div id="newAgeGroup">
    <label>From:</label>
    <input type="number"/>
    <label>To:</label>
    <input type="number"/>
    <img alt="xImage" src="redXImage.png" width="25" height="25" onClick={removeAgeGroup}></img>
    </div>
      
    ));
  };

 
  const generateReport = event => {
    // setInputTable(inputTable.concat(
    //   <ReportTable/>
    // ));
    navigate('/ReportsTable')
  }
  
  
  return (

  <>
     <div className='wrapper1'>
      <h1> Reports and Analytics :</h1>
        <div className='labelr'>
          <span>Pick Site: </span>
          <Combo className='label-spacing'/> 
          <span>Pick Program: </span>
          <Combo/>
        </div>
         <div>
          <label className='labeld'>Pick Date Range: </label>
        </div> 
        <div className='labels'>
          <label className='space'>From: </label><input type="date" className='label-spacing'/>
          <label className='space'>To: </label><input type="date"/>
        </div>
          <div>
            <button id='btnReports' className='button'>Fiscal Year</button>
            <button id='btnReports' className='button'>Calendar Year</button>
            <button id='btnReports' className='button'>Decrease Date by 1 Year</button>
            <button id='btnReports' className='button'>Increase Date by 1 Year</button>
          </div>
        <div> 
          <h2>Age Groups :</h2>
          <div className='para'>
        <div>Select the Age Range of the Clients you with to report on.</div>
        <div>You can enter multiple groups such as 12 to 15, 16 to 25,</div>
        <div>by using "Add another Age Grouping"</div>
        </div>
        </div>
        <div className='labels'>
        <label className='space'>From: </label>
        <input type="number" className='label-spacing'/>
        <label className='space'>To:</label><input type="number"/>
        {inputList}
        </div>
        <div>
        <button id='btnReports' className='button' onClick={onAddBtnClick}>
          Add another age grouping
        </button>
        <button id='btnReports' className='button' onClick={generateReport}>Generate Report</button>
      </div>
        </div>
          <div className='wrapper-registration'>
      {inputTable}

      {/* <ReportTable/> */}
      </div>
      </>
  )
}
