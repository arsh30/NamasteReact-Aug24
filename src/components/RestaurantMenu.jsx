import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../hooks/useRestaurantMenu";
import RestaurantCategoryAccordion from "./RestaurantCategoryAccordion";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenus = useRestaurantsMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  const info = restaurantMenus?.cards?.[2].card?.card?.info ?? {};
  const { name, cuisines, avgRating, sla: slaString, costForTwoMessage } = info;

  const { itemCards } =
    restaurantMenus?.cards?.[4]?.groupedCard?.cardGroupMap.REGULAR.cards?.[1]
      ?.card.card ?? {};

  const categories =
    restaurantMenus?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (elem) => {
        return elem?.card?.card?.["@type"].includes("ItemCategory");
      }
    );

  const handleCategoryClick = (index) => {
    setShowIndex(index === showIndex ? null : index);
  };
  return (
    <div className="max-w-[50%] mx-auto mt-8 p-5 rounded-xl text-left">
      {/* CATEGORIES ACCORDION - EACH ACCORDION HAS TITLE, AND THE BODY, WHICH IS COLLAPSABLE */}
      {categories &&
        categories.map((elem, index) => {
          return (
            // Controll component (because parent is controlling)
            <RestaurantCategoryAccordion
              key={index}
              data={elem?.card?.card}
              // isDisplay={index === 0 ? true : false} // means agr index 0 hai toh true pass hoye baki false
              isDisplay={index === showIndex ? true : false}
              setShowIndex={() => handleCategoryClick(index)} // means jis bhi card par click krege to vo expand ho jayega and is function ko call krege child se, for eg: child 2 par click kiya to uska index number set hojayega
            />
          );
        })}
    </div>
  );
};

export default RestaurantMenu;
