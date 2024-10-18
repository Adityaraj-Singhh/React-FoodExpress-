
import { CDN_URL } from "../utils/constants"; //importing named export

// const RestaurantCard = (props)=>{ //react wraps it as objects: prop
//     const {resList} = props;

//     //Array destructuring for cleaner code

//     const{                //option chaining
//       cloudinaryImageId,
//       name,
//       avgRating,
//       cuisines,
//       costForTwo,
//       sla,
//     } = resList?.info;

//     return (
//         <div className='res-card m-4 p-4 w-[300px] bg-slate-200 hover:bg-slate-300 rounded-lg mx-5'>

//             <img className='restaurant-image h-[250px] w-[300px] rounded-lg' src={CDN_URL+resList.info.cloudinaryImageId}/>
//             <div className='restaurant-info'>

//             <h3 className='font-bold py-4 text-lg'>{name}</h3>
//             <h4>{cuisines}</h4>
//             <h4>{avgRating} Stars</h4>
//             <h4>{costForTwo}</h4>
//             <h4>{sla?.deliveryTime} Minutes</h4>
            
//             </div>
            
//         </div>
        
//     )
// }

const RestaurantCard = (props) => {
    const { resList } = props;

    // console.log(resList);
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    } = resList?.info;
  
    return (
      <div data-testid = "resCard"
        className="res-card m-3 p-6 w-[300px] bg-white shadow-md hover:shadow-xl transition-all 
                   rounded-xl mx-2 border border-gray-200 hover:border-gray-300"
      >
        <img
          className="restaurant-image h-[220px] w-full object-cover rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <div className="restaurant-info mt-4">
          <h3 className="font-semibold text-xl text-gray-800">{name}</h3>
          <h4 className="text-sm text-gray-600 mt-2">{cuisines.join(", ")}</h4>
          <div className="flex items-center justify-between mt-3">
            <h4 className="text-sm text-yellow-500 font-medium">
              ⭐ {avgRating} Stars
            </h4>
            <h4 className="text-sm text-gray-500">{costForTwo}</h4>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            ⏱ {sla?.deliveryTime} Minutes
          </div>
        </div>
      </div>
    );
  };
  
//Higher Order Component

//Input - Restaurant Card ==>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) =>{
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;