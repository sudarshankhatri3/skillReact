import { useState } from "react";



export default function CounterData(){
    const [count,setCount]=useState(0)

    function incrementer(){
        setCount((value)=>value+1)
    }
    function decrementer(){
        setCount((value)=>value-1)
    }


    return (
        <>
          <button onClick={incrementer}>Increment</button>
          <h3>count</h3>
          <button onClick={decrementer}>Decrement</button>          
        </>
    )
}