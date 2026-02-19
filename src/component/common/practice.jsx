const data=["ram","syam","hari","siome"]

let listName=data.map((value)=>{
    return <ListItem title={value}/>
})


export default function Practice(){
    return (
        <>
{/* lifting state up 
props drilling  */}
        <div>
            <div>
                <li>title</li>
                <li>image</li>
                <li>product</li>
                <li>Price</li>
                <li>Buy</li>
               <ul>{listName}</ul>
            </div>
        </div>

        </>
    )
}


export function ListItem(props){
    return <li className="list_style">{props.title}</li>
}