function Greeting(props){
  return (
    <>
       <div>
         <p>{props.name}</p>
       </div>
    </>
  )
}


export default function Greet(){
  const data="sudarshan khatri"
  return <Greeting  name={data}/>
}