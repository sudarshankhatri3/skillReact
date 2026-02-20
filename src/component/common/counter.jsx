import { useState } from "react";
import Header from "./header";

export default function Counter(){
    const [count,setCount]=useState(0)


    const incrementClick=()=>{
        setCount(count=>count+1)
    }
    const decrementClick=()=>{
        setCount(count=>count-1)
    }

    return(
        <>
          <button onClick={incrementClick()}>+</button>
          <h2>{count}</h2>
          <button onClick={decrementClick()}>-</button>

        </>
    )
}