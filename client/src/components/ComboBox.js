//import Combobox from "react-widgets/Combobox";
//import { Combobox } from "react-widgets";
// import data from "./DummyList";
// import siteData from "./SiteList";
//import siteData from "./SiteList";
import { useState, useEffect } from "react";
import { Component } from "react";
import YouthLogin from "../pages/YouthLogin";
import { SiteSelect } from "../pages/SiteSelect";
// import classnames from 'classnames'

// const ACombobox = () => {
//     return (
//         <Combobox defaultValue="Yellow"
//         data={["Red", "Yellow", "Blue", "Orange"]}></Combobox>
//         // pull data from database, put an Array, object, or list?
//     )
    
// }

// const ACombobox = ({dummyData}) => {
//     return (
//         <Combobox defaultValue="Yellow"
//         data={data.map(...{dummyData})}></Combobox>
//         // pull data from database, put an Array, object, or list?
//         //for now, pull data from object into the combobox    
//     )
// }

// export default ACombobox

export default function Combo({className}){
    const [selected, setSelected] = useState('');
    let changeChoice = (e) => {
        setSelected(e.target.value)
    }
    const aClassName = (e) => {
        className(e.target.value);
    };
    const[siteData, setSiteData] = useState([])
    useEffect(() => {
        var link1 = 'http://localhost:3001/'
        var link2 = link1+className
        // console.log(className)
        fetch(link2)
        .then(res => res.json())
        .then(siteData => setSiteData(siteData))
        .catch(err => console.log(err));
    }, [])
    const selectProgram= () => {
        return(
    siteData.map(siteData => 
        (<option key={siteData.id} value={siteData.id}>{siteData.Program}</option>))
    )}
        
    

    
        return(
            <>
                {/* {selected} */}
                {/* <br/> */}
                <select className={className} onChange={changeChoice}>
                    <option value="Select Option!">
                        Select Option
                    </option>
                    {selectProgram()}
                       {/* edit when backend is ready */}
                </select>   
            </>
        );
}