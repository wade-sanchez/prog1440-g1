//import Combobox from "react-widgets/Combobox";
//import { Combobox } from "react-widgets";
import data from "./DummyList";
import siteData from "./SiteList";
//import siteData from "./SiteList";
import { useState } from "react";


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

export default function Combo(){
    const [selected, setSelected] = useState(null);
    let changeChoice = (e) => {
        setSelected(e.target.value)
    }
    const selectData = () => {
        
    }
        return(
            <>
                {/* {selected} */}
                {/* <br/> */}
                <select onChange={changeChoice}>
                    <option value="Select Option!">
                        Select Option
                    </option>
                    {data.map((data) => <option key={data.id} value={data.id}>{data.Program}</option>)}
                       {/* edit when backend is ready */}
                </select>
            </>
        );
}