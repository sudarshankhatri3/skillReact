import { useState } from "react";


export default function FormCmp(){
    const [field,setField]=useState({email:"",phone:"",desc:""})
    // const [email,setEmail]=useState("")
    // const [phone,setPhone]=useState("")
    // const [desc,setDesc]=useState("")

    function onsubmit(){
        console.log(field)
    }
    

    return (
        <>
          <div>
            <div>
                <label >Email:
                    <input type="text"  value={field.email} onChange={(e)=>{setField({...field,email:e.target.value})}} />
                </label><br />
                {field.email}
                <label >PhoneNumber:
                    <input type="phone-number" value={field.phone} onChange={(e)=>(setField({...field,phone:e.target.value}))}/>
                </label><br />
                {field.phone}
                <label>Description:
                    <textarea value={field.desc} onChange={(e)=>{setField({...field,desc:e.target.value})}}/>
                </label><br />
                <button type="submit" onClick={onsubmit()}>Submit</button>
            </div>
          </div>
        
        </>
    )
}