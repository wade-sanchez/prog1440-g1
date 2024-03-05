//reports, show different reports
import React, {useState} from 'react'
// import ReactDOM from "react-dom"
import Combo from '../components/ComboBox'
import { ReportTable } from '../components/ReportTable';


export const Reports = () => {
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
    setInputTable(inputTable.concat(
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
      <tr>
        <td>Wade</td>
        <td>Sanchez</td>
      </tr>
    </table>
    ));
  }
  
  
  return (
    <>
      <h1>Reports</h1>
      <div>
        <div>
          <label>Pick Site: </label>
          <Combo/>
          <label>Pick Program: </label>
          <Combo/>
        </div>
        
        <div>
          <label>Pick Date Range: </label>
          <label>From:</label><input type="date"/>
          <label>To:</label><input type="date"/>
        </div>

        <div className='wrapper-registration'>
          <div>
            <button>Fiscal Year</button>
            <button>Calendar Year</button>
          </div>
        
          <div>
            <button>Decrease Date by 1 Year</button>
            <button>Increase Date by 1 Year</button>
          </div>
        </div>
        
        <div>Age Groups:</div>
        <div>Select the Age Range of the Clients you with to report on.</div>
        <div>You can enter multiple groups such as 12 to 15, 16 to 25, by using "Add another Age Grouping"</div>
        <label>From: </label><input type="number"/> <label>To:</label><input type="number"/>
        {inputList}
      </div>
      <div>
        <button onClick={onAddBtnClick}>
          Add another age grouping
        </button>
      </div>
      <div>
        <button onClick={generateReport}>Generate Report</button>
      </div>
      <div className='wrapper-registration'>
      {inputTable}
      <ReportTable/>
      </div>
    </>
  )
}
