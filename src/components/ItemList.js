import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";



const ItemList = ({items,dummy})=>{
    // console.log(dummy);//this dummy is coming from ResMenu->.. ResMenu -> ResCategory -> ItemList | -> This concept is known as props drilling.

    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        //dispatch an action
        console.log(`Adding item to cart: ${item.card.info.name}`);
        dispatch(addItem(item));
    };
   
    // return(
    //     <div>
    //        {items.map((item)=>(
    //         <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2 border-grey-200 border-b-2">
    //         {/* <img src={CDN_URL + item.card.info.imageId} className="w-14" /> */}

    //             <div className="p-2 w-9/12">
    //                 <span>{item.card.info.name} - </span>
    //                 <span>₹ {item.card.info.price 
    //                 ? item.card.info.price/100 : item.card.info.defaultPrice/100}
    //                 </span>
    //             </div>
    //             <p className="text-xs">{item.card.info.description}</p>
    //             <div className="w-3/12 p-4 mx-96">
    //                 <button className="p-1 bg-yellow-300 absolute m-auto my--10" 
    //                 onClick={()=>handleAddItem(item)}
    //                 >Add</button>
    //             </div>
    //         </div>
    //        ))}
    //     </div>
    // )

    return (
        <div className="max-w-4xl mx-auto p-4">
          {items.map((item) => (
            <div
              data-testid="foodItems"
              key={item.card.info.id}
              className="flex items-start p-4 mb-4 bg-white shadow-md rounded-lg border border-gray-200"
            >
              {/* Uncomment if you want to display the image */}
              {/* <img 
                src={CDN_URL + item.card.info.imageId} 
                alt={item.card.info.name} 
                className="w-16 h-16 object-cover rounded-lg" 
              /> */}
      
              <div className="flex-grow p-2">
                <h2 className="font-semibold text-lg text-gray-800">
                  {item.card.info.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  ₹ {item.card.info.price 
                      ? item.card.info.price / 100 
                      : item.card.info.defaultPrice / 100}
                </p>
                <p className="text-xs text-gray-600 mt-2">{item.card.info.description}</p>
              </div>
      
              <div className="flex-shrink-0 p-2">
                <button
                  className="px-4 py-2 text-sm bg-yellow-400 hover:bg-yellow-500 text-white font-medium rounded-md transition-all duration-300"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              
              </div>
            </div>
          ))}
        </div>
      );
      
}


export default ItemList;