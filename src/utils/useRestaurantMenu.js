
import { useEffect,useState } from "react";

const useRestaurantMenu = (resId) => {
    const[resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.00480&lng=75.94630&restaurantId="+resId);

        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    return resInfo;
};

export default useRestaurantMenu;