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
    <div className="image10">
      <div className='inner-wrapper'></div>
      <div className='wrapper-1'>
      <div className='block-box'>
      <h1>Reports and Analytics</h1>
      <div>
        <div>
          <div className='inner-wrapper'>
          <label className='label-spacing'>Pick Site: </label>
          <Combo/>
          </div>

          <div className='inner-wrapper'>
          <label className='label-spacing'>Pick Program: </label>
          <Combo/>
          </div>
        </div>
        
        <div>
        <div className='inner-wrapper'>
          <label className='label-spacing'>Pick Date Range: </label>
        </div> 
        <div className='inner-wrapper'>
          <label className='label-spacing'>From:</label><input type="date"/>
        </div>
        <div className='inner-wrapper'>
          <label className='label-spacing'>To:</label><input type="date"/>
        </div>
        </div>

        <div className='inner-wrapper'>
          <div className='inner-wrapper'>
            <button id='btnReports' className='button1'>Fiscal Year</button>
            <div className='button-spacing'/>
            <button id='btnReports' className='button1'>Calendar Year</button>
          </div>

          <div className='inner-wrapper'>
            <button id='btnReports' className='button1'>Decrease Date by 1 Year</button>
            <div className='button-spacing'/>
            <button id='btnReports' className='button1'>Increase Date by 1 Year</button>
          </div>
        </div>
        </div>
        
        <div>
        <div>
        <div className='smaller-heading'>Age Groups:</div>
        <div>Select the Age Range of the Clients you with to report on.</div>
        <div>You can enter multiple groups such as 12 to 15, 16 to 25,</div>
        <div>by using "Add another Age Grouping"</div>
        </div>
        <label className='label-spacing'>From: </label>
        <div className='inner-wrapper'>
        <input type="number"/>
        </div>
        <div className='inner-wrapper'>
        <label className='label-spacing'>To:</label><input type="number"/>
        {inputList}
        </div>
        <div>
        <button id='btnReports' className='button1' onClick={onAddBtnClick}>
          Add another age grouping
        </button>
        </div>
        <div>
        <button id='btnReports' className='button1' onClick={generateReport}>Generate Report</button>
      </div>
        </div>
      </div>
      </div>
      
      <div className='wrapper-registration'>
      {inputTable}
      {/* <ReportTable/> */}
      </div>
    </div>
  )
}
