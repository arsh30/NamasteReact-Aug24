import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenus = useRestaurantsMenu(resId);

  const info = restaurantMenus?.cards?.[2].card?.card?.info ?? {};
  const { name, cuisines, avgRating, sla: slaString } = info;

  const { itemCards } =
    restaurantMenus?.cards?.[4]?.groupedCard?.cardGroupMap.REGULAR.cards?.[1]
      ?.card.card ?? {};
  console.log("Item cards", itemCards);

  return (
    <div className="max-w-[80%] shadow-lg mx-auto mt-8 p-5 rounded-xl">
      <h2 className="mb-8 font-[700] text-xl">{name}</h2>
      <h3>{avgRating}</h3>

      <p>{cuisines?.join(", ")}</p>
      <h2 style={{ margin: "1rem 0" }}>Menu:</h2>
      <ul style={{ listStyleType: "none" }}>
        {itemCards?.map((elem, index) => {
          return (
            <div key={index}>
              <li>
                {elem?.card?.info?.name} -{" "}
                {elem?.card?.info?.price || elem?.card?.info?.defaultPrice}
              </li>{" "}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
