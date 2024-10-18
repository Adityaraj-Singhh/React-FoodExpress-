import { useEffect, useState } from "react";


const useOnlineStatus = ()=>{

    const [OnlineStatus, setOnlineStatus] = useState(true);

    //check if online
    useEffect(()=>{ //executes only once

        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })

        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })

    },[]);


    //boolean
    return OnlineStatus;
}

export default useOnlineStatus;