import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantMenus, setRestaurantMenus] = useState([]);
  const [loading, setLoading] = useState(false);
  //   console.log(restaurantMenus?.cards?.[2].card?.card?.info);
  const info = restaurantMenus?.cards?.[2].card?.card?.info ?? {};
  const { name, costForTwoMessage, cuisines, avgRating, sla: slaString } = info;

  const { itemCards } =
    restaurantMenus?.cards?.[4]?.groupedCard?.cardGroupMap.REGULAR.cards?.[1]
      ?.card.card ?? {};
  console.log("Item cards", itemCards);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139298&lng=77.2088282&restaurantId=" +
          resId
      );
      const resp = await data.json();
      console.log("response", resp.data);
      setRestaurantMenus(resp.data);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div className="restaurantMenu">
      <h2 className="restaurantHeading">{name}</h2>
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
