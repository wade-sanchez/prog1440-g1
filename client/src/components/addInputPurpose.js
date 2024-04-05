import React from "react";
import '../components/style.css';
import '../pages/AddSites.css';

const Newpurpose = ({shortTitle, Title, onShortTitleChange, onTitleChange }) =>{
    return (
        <>
            <div> 
                <label className="label">Short title</label>
                <input className="input-field" type="text" value={shortTitle} onChange={(e)=> onShortTitleChange(e.target.value)} placeholder="enter short title" required/>
           </div>
            
            <div>
                <label className="label">Full title</label>
                <input className="input-field" type="text" value={Title} onChange={(e)=> onTitleChange(e.target.value)} placeholder="enter full title" required/>
            </div>
            
        </>
       
    )
        
    
}

export default Newpurpose;