import React, { useEffect, useState } from "react";

let initialProductForm = {
  title: "",
  price: "",
  description: "",
  category: "",
  image: "",
};

export default function ProductCrud() {
    const [userData, setUserData] = useState([]);

    async function getProduct() {
        try {
        const resp = await fetch("https://fakestoreapi.com/products", {
            method: "GET",
        });
        if (!resp.ok) {
            const errorText = await resp.text;
            console.log(errorText);
        }
        const data = await resp.json();
        setUserData(data);
        } catch (error) {
        console.log(error);
        alert(error);
        }
    }
    useEffect(() => getProduct(),[]);



    return (
        <>
          <div>
            {userData.map((product)=>(
                <div key={product.id}>
                    <img src={product.image} alt={product.title} height={200} width={250}/>
                    {/* <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                    <p>{product.description}</p> */}
                </div>
                

            ))}
          </div>
        </>
        
     
    )

    
}
