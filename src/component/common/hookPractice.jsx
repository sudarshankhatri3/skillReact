import { useState } from "react";



export default function CounterData(){
    const [count,setCount]=useState(0)

    function incrementer(){
        console.log(`Before increment:${count}`)
        setCount((value)=>value+1)
        console.log(`After count:${count}`)
    }
    function decrementer(){
        console.log(`Before increment:${count}`)
        setCount((value)=>value-1)
        console.log(`After decrement:${count}`)
    }


    return (
        <>
          <button onClick={incrementer}>Increment</button>
          <h3>{count}</h3>
          <button onClick={decrementer}>Decrement</button>          
        </>
    )
}