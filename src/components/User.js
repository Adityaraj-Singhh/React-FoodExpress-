 
import { useEffect, useState } from "react";

const User = (props) => {

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Hello");
        },1000);

        console.log("useEffect");

        return()=>{   //Gets called after unmounting
            clearInterval(timer);
            console.log("UseEffect Return");
        }
    },[]);
  


    const [count,setCount] = useState(0);
    const [count2] =useState(1);
    return (
        <div className="user-card">
             <button onClick={()=>{
                setCount(count+1);
             }}>Click here</button>
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>Name: {props.name}</h2>
            <h2>Location: Kolkata</h2>
            <h2>Contact: 9903605588</h2>
        </div>
    )
}

export default User;

//Functional component -> A function which returns a piece of JSX
