import React, { useState } from "react";


let initialProductForm={
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
}

async function getProduct(){
    try {
        const resp=await fetch("https://fakestoreapi.com/products",{method:"POST"})
        if(!resp.ok){
            const errorText=await resp.text
            console.log(errorText)
        }
        const data=await resp.json()
        console.log(data)
    } catch (error) {
        console.log(error)
        alert(error)
        
    }
    
}


export default function ProductCrud(){
    const [userData,setUserData]=useState([])
    

}