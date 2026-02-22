import { useState } from "react";



export default function Cart(){
    const [cart,setCart]=useState([])


    function addToCart(value){
        setCart([...cart,value])
    }
    function removeFromCart(prod){
        const updateCart=cart.filter((data)=>prod.id!==data.id)
        console.log(updateCart)
        setCart(updateCart)
    }

    function countToCart(value){
        setCart([...cart,value])
    }



    return(
        <>
           {data.map((data)=>{
            console.log(data)
            return (
                <div>
                 <div>
                    <img src={data.image} alt={data.title}/>
                    <h3>Title:{data.title}</h3>
                    <p>Price:{data.price}</p>
                    <p>Description:{data.description}</p>
                    <button onClick={()=>{addToCart(product)}}>Add To cart</button>
                    <button onClick={()=>{removeFromCart(product)}}>Remove From cart</button>
                  
                 </div>
                </div>
            )
           })}
        </>
    )
}