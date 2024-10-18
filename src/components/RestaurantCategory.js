
import React, { useState } from 'react';
import ItemList from "./ItemList";


const Accordion = ({ data, dummy }) => {
    // Step 1: Create a state variable to manage the accordion's open/close state
    const [showItems, setShowItems] = useState(false);

    // Step 2: Define the handleClick function to toggle the accordion state
    const handleClick = () => {
        setShowItems((prevShowItems) => !prevShowItems); // Toggle the state
    };

    return (
        <div>
            {/* Header */}
            <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto my-4 bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-xl">
                <div className="flex justify-between items-center cursor-pointer p-4" onClick={handleClick}>
                    <span className="font-bold text-xl text-gray-800">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span className="text-gray-600 transition-transform duration-300 hover:rotate-180">
                        {showItems ? "▲" : "⬇️"} {/* Change the icon based on state */}
                    </span>
                </div>
                {/* Accordion Body */}
                {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
            </div>
        </div>
    );
};

export default Accordion;
















// import ItemList from "./ItemList";
// import {useState} from "react";

// const RestaurantCategory = ({data, showItems, setShowIndex,dummy})=>{  //Now this is a controlled component -> It is in control of Resmenu


//     // const [showItems,setShowItems] = useState(false); //The control should be given to parent Resmen u-> for proper working of accordian
//     const handleClick = () => {
//         // setShowItems(!showItems);
//         setShowIndex();
//     } 

//     // console.log(data);
//     // return (
//     //     <div>
//     //         {/* Header */}
//     //         <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
//     //             <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
//     //             <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
//     //             <span>⬇️</span>
//     //             </div>
//     //             {/* Accordian Body */}
//     //           {showItems && <ItemList items={data.itemCards} dummy= {dummy}/>}
              
//     //         </div>
            
           
//     //     </div>
//     // )
//     return (
//         <div>
//             {/* Header */}
//             <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto my-4 bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-xl">
//                 <div className="flex justify-between items-center cursor-pointer p-4" onClick={handleClick}>
//                     <span className="font-bold text-xl text-gray-800">{data.title} ({data.itemCards.length})</span>
//                     <span className="text-gray-600 transition-transform duration-300 hover:rotate-180">⬇️</span>
//                 </div>
//                 {/* Accordion Body */}
//                 {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
//             </div>
//         </div>
//     );
    
// }

// export default RestaurantCategory;