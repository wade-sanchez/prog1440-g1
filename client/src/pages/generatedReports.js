import React,  {useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../pages/table.css';
import { ReportTable } from '../components/ReportTable';
import { useNavigate } from "react-router-dom";


const GeneratedReports = () => {


  const [data ,setData] = useState('');
  const location = useLocation();
  const[paramtersFetched,setParameterFetched] = useState({ });
  const[uniqueData, setUniqueData] = useState('');
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const fromDate = queryParams.get('fromDate');
  const toDate = queryParams.get('toDate');
  const fromAge = queryParams.get('fromAge');
  const toAge = queryParams.get('toAge');
  const site = queryParams.get('site');
  const program = queryParams.get('program');


  useEffect(()=>{
   
  //displaying heading 
  if(fromDate && toDate && fromAge && toAge && site && program){
   setParameterFetched({fromDate:fromDate , toDate: toDate , age: `${fromAge} - ${toAge}` , site:site , program: program})}

  //axios req
  axios.post('http://localhost:3001/api/reports', {
        fromDate,
        toDate,
        fromAge,
        toAge,
        site,
        program
      }).then(d => {
        console.log(d.data)
        setData(d.data.normalData);
        setUniqueData(d.data.uniqueData)
  }).catch(e => console.log(e));
  }, [])

    //-----------------------------------------------------------------table code ----------------------------------------------------------------------------
  return (
    <>
      {Object.keys(paramtersFetched).length === 0 ? (
        <div>
          <h1>Please go back and select all required parameters</h1>
          <button className="buttons small"   onClick={() => {navigate('/Reports')}}>Return to reports</button>
        </div>
      ) : (
        <div>
          <h1>Welcome to reports page</h1>
          <h2>Reports generated for site - {paramtersFetched.site} and program {paramtersFetched.program}</h2>
          <h3>{paramtersFetched.fromDate} to {paramtersFetched.toDate}</h3>
          <h3>Age group: {paramtersFetched.age}</h3>
          <button className="buttons small "  style={{ width: '30vw' }} onClick={() => {navigate('/Reports')}}>Return to reports</button>
          <hr/>

          {data.length > 0 && (
            <div className='tableview'>
              <h2>All Visits</h2>
              <ReportTable data={data} fromDate={fromDate} toDate={toDate} />
            </div>
          )}

          <hr/>
          {uniqueData.length > 0 && (
            <div className='tableview'>
              <h2>Unique Visits</h2>
              <ReportTable data={uniqueData} fromDate={fromDate} toDate={toDate} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default GeneratedReports;
