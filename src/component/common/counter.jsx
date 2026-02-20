import { useState } from "react";


export default function Counter(){
    const [count,setCount]=useState(0)


    const incrementClick=()=>{
        setCount(prev=>prev+1)
    }
    const decrementClick=()=>{
        setCount(prev=>prev-1)
    }

    return(
        <>
          <button onClick={incrementClick}>+</button>
          <h2>{count}</h2>
          <button onClick={decrementClick}>-</button>

        </>
    )
}