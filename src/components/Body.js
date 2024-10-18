import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
// import { json } from "express";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () =>{

    console.log("Body rendered");
    //Hooks are normal JS utility functions
    //local state variable -> Super powerful variable
    //Array destructuring
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);  //creating copy of the original list
    
    const [searchText,setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // Normal JS variable
    // let listOfRestaurantsJS= [
    //     {
    //         "info": {
    //           "id": "590305",
    //           "name": "PizzaExpress",
    //           "cloudinaryImageId": "fibwdnm5sa9m1a6ll3qs",
    //           "deliveryTime": 53,
    //           "costForTwo": "₹150 for two",
    //           "cuisines": ["Pizzas", "Fast Food"],
    //               "avgRating": 3.7,
    //         }   
    //     },
    //     {
    //         "info": {
    //             "id": "5903",
    //             "name": "Dominos",
    //             "cloudinaryImageId": "fibwdnm5sa9m1a6ll3qs",
    //             "deliveryTime": 33,
    //             "costForTwo": "₹150 for two",
    //             "cuisines": ["Pizzas", "Fast Food"],
    //             "avgRating": 4.7,
    //           }   
    //     },
    //     {
    //         "info": {
    //             "id": "77903",
    //             "name": "MCD",
    //             "cloudinaryImageId": "fibwdnm5sa9m1a6ll3qs",
    //             "deliveryTime": 33,
    //             "costForTwo": "₹150 for two",
    //             "cuisines": ["Pizzas", "Fast Food"],
    //             "avgRating": 4.2,
    //           }   
    //     }
    // ];

    // callback function is called, after rendering -> so here we can use method 2 of API calling
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        console.log(json);

        // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);

        setListOfRestaurants(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const OnlineStatus = useOnlineStatus();

    if(OnlineStatus===false){
        return(
            <h1>
                Looks like you're offline!! Please check your internet connection
            </h1>
        );
    }

    //conditional rendering
    // if(listOfRestaurants.length == 0){
    //     return <Shimmer/>;
    // }

    // return listOfRestaurants?.length == 0 ? <Shimmer/> :(
    //     <div className='body'>
    //         <div className='filter flex'>

    //         <div className="search m-4 p-4">
    //             <input type="text" data-testid="searchInput" placeholder="Search" className="border border-solid border-black" value={searchText}
    //             onChange={(e)=>{
    //                 setSearchText(e.target.value);
    //             }}
    //             />
    //             <button className="px-5 py-1 bg-green-400 m-4 rounded-lg" onClick={()=>{
    //                 console.log(searchText);

    //                 const filteredRestaurant = listOfRestaurants.filter((res)=>{
    //                     return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    //                 });
    //                 setFilteredRestaurant(filteredRestaurant);
    //             }}>

    //             Search</button>
    //         </div>
    //             <div className=" flex items-center m-3 p-3">
    //             <button className="px-4 bg-blue-300 py-2 rounded-lg" onClick={()=>{
    //                 //filter logic here
    //                 const filteredList = listOfRestaurants.filter(
    //                     (res) => res.info.avgRating > 4
    //                 )
    //                 //console.log(listOfRestaurants);
    //                 setFilteredRestaurant(filteredList);
    //             }}>Top Rated Restaurant</button>
    //             </div>

                
    //         </div>

    //         <div className='flex flex-wrap'>
            

    //             {filteredRestaurant.map((restaurant,index)=>(

    //               <Link
    //               key={restaurant.info.id}
    //               to={"/restaurant/"+restaurant.info.id}
    //               >
    //               {restaurant.info.isOpen ? (<RestaurantCardPromoted resList={restaurant}/>) :(<RestaurantCard resList={restaurant}/>)}
    //               </Link>

    //               //Adding key is imp when using map : if we don't add key, when any new card tries to get inserted in any position, it will have to render alll the res-cards, if key is present it will have to render all the cards.
    //               //key should be unique --> It increases the performance

    //               //We may think, index can also be used as keys, but react documentation itself says, dont use indexes as keys.

    //               //Not using keys <<< using keys as index <<<<<<< Unique id (Best practice)
    //             ))}

    //         </div>
    //     </div>
    // )

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="min-h-screen bg-gray-50 p-6">
          {/* Filter and Search Section */}
          <div className="flex justify-between items-center mb-6">
            {/* Search Box */}
            <div className="flex items-center gap-4">
              <input
                type="text"
                data-testid="searchInput"
                placeholder="Search restaurants..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all"
                onClick={() => {
                  console.log(searchText);
                  const filteredRestaurant = listOfRestaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurant(filteredRestaurant);
                }}
              >
                Search
              </button>
            </div>
      
            {/* Top Rated Filter */}
            <button
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestaurant(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
      
          {/* Restaurant Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredRestaurant.map((restaurant, index) => (
              <Link
                key={restaurant.info.id}
                to={`/restaurant/${restaurant.info.id}`}
                className="transform hover:scale-105 transition-transform"
              >
                {restaurant.info.isOpen ? (
                  <RestaurantCardPromoted resList={restaurant} />
                ) : (
                  <RestaurantCard resList={restaurant} />
                )}
              </Link>
            ))}
          </div>
        </div>
      );
      
}


export default Body;

//Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

//explaining Array destructuting
    // const arr = useState(resList); //useState is returning array

    // const listOfRestaurants = arr[0];
    // const setListOfRestaurants = arr[1];

    // above two lines can be written as 
    //const [listOfRestaurants,setListOfRestaurants] = arr;
