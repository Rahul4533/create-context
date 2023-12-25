import {  useState } from "react";
import { colorcontext } from "../context";
import Children from "./children";
 const ParentComponent=(props)=>{
    console.log(colorcontext);
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
        <colorcontext.Provider value={color}>
      <Children />       
 

</colorcontext.Provider>
        </>
        
    )
}

export default ParentComponent;