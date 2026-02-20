import { useState } from "react";
import Header from "./header";
import Home from "../../pages/home";
import Contact from "../../pages/contact";
import About from "../../pages/about";

export default function Counter(){
    const [count,setCount]=useState(0)

    const [show,setShow]=useState(null)

    const homeShower=()=>{
       setShow(<Home/>)
    }

    const aboutShower=()=>{
        setShow(<About/>)
    }
    const contactShower=()=>{
        setShow(<Contact/>)
    }


    const incrementClick=()=>{
        setCount(count=>count+1)
    }
    const decrementClick=()=>{
        setCount(count=>count-1)
    }

    return(
        <>
          <button onClick={incrementClick}>+</button>
          <h2>{count}</h2>
          <button onClick={decrementClick}>-</button>
           <br />
           <hr />
           <button onClick={homeShower}>Home</button>
           <button onClick={aboutShower}>About</button> 
           <button onClick={contactShower}>Contact</button>

           <hr />

        </>
    )
}