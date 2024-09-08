import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/data.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResults = listOfRestaurants.filter((res) => {
              return res?.info?.avgRating > 4.3;
            });
            console.log(filteredResults);
            setListOfRestaurants(filteredResults)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((resData) => {
          return <RestaurantCard key={resData?.info?.id} resData={resData} />;
        })}
      </div>
    </div>
  );
};

export default Body;
