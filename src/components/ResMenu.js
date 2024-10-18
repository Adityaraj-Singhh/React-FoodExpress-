import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const ResMenu = () => {

    // const [resInfo, setResInfo] = useState(null);

    const {resId} =useParams();

    const resInfo = useRestaurantMenu(resId); //Custom hook -> made for fetching data, to decrease the burden of Restaurant menu component.(Following SRF-> Single responsibility fashion)

    const [showIndex,setShowIndex] = useState(null);

    // useEffect(()=>{
    //     fetchMenu();
    // },[]) 
 
    // const fetchMenu = async()=>{
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.00480&lng=75.94630&restaurantId="+resId);
    //     const json = await data.json();
    //     // console.log(json);
    //     setResInfo(json.data);
    // }; 

    if(resInfo == null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);

    const dummy = "dummy data";
    

    // return (
    //     <div className="text-center">
    //         <h1 className="m-6 font-bold text-2xl">{name}</h1>
    //         <h3 className="font-bold texl-lg">{cuisines.join(" , ")}</h3>
    //         <h3 className="font-bold texl-lg">{costForTwoMessage}</h3>
          
    //       {/*categories accordians*/}
    //       {categories.map((category, index)=>(
    //         //controlled component
    //             <RestaurantCategory
    //             key={index}
    //             data={category?.card?.card}
    //             showItems={index === showIndex ? true:false} // Update showItems based on the current showIndex state
    //             setShowIndex={()=>setShowIndex(index)} //We are inderectly changing the index of state variable using child component
    //             dummy = {dummy}
    //             />))}
                
    //     </div>
    // ) 

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
          {/* Restaurant Name */}
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">{name}</h1>
      
          {/* Cuisines */}
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            {cuisines.join(', ')}
          </h3>
      
          {/* Cost for Two */}
          <h3 className="text-lg font-medium text-gray-600 mb-6">
            {costForTwoMessage}
          </h3>
      
          {/* Categories Accordion */}
          <div className="space-y-4">
            {categories.map((category, index) => (
              <RestaurantCategory
                key={index}
                data={category?.card?.card}
                showItems={index === showIndex}
                setShowIndex={() => setShowIndex(index)}
                dummy={dummy}
              />
            ))}
          </div>
        </div>
      );
      
}

export default ResMenu;