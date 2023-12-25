import { useState } from "react";

 const ParentComponent=(props)=>{
    const [color,setColor]=useState('#0000000');

    return(
        <>
        <h1>Pick a color</h1>
        <input type="color"
        onChange={(e)=>{
            setColor(e.target.value);
            
        } } 
        value={color}
        />
        
        </>
    )
}

export default ParentComponent;