import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const ApiKey = '7dfcfb736685c8b7';
const EDUCORS_URL = 'https://educorssolver.host/api/getData';

const ResMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(null);

  const Target = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.00480&lng=75.94630&restaurantId=${resId}`;

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          `${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(Target)}`
        );
        const json = await response.json();
        setResInfo(json?.data);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      }
    };

    fetchMenu();
  }, [resId]);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const dummy = "dummy data";

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Restaurant Name */}
      <h1 className="text-3xl font-extrabold text-gray-800 mb-4">{name}</h1>

      {/* Cuisines */}
      <h3 className="text-lg font-medium text-gray-600 mb-2">
        {cuisines.join(", ")}
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
};

export default ResMenu;


