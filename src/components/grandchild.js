import { useContext } from "react";
import { colorcontext } from "../context";
function GrandChild(){
  const color=  useContext(colorcontext)
    return (
        <p style={{color:color}}>Color: {color}</p>
    )
}

export default GrandChild;