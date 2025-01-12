import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/data.js";
import { API_URL } from "../utils/constant.js";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState(
    []
  );
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null); // null because we dont know ki error me kya aayega ho skta hai object, string kuch bhi ho isliye null liya

  const [searchTxt, setSearchTxt] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API_URL);
      const response = await data.json();
      const restaurants =
        response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurants(restaurants);
      setOriginalListOfRestaurants(restaurants);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  };

  const handleSearch = () => {
    if (searchTxt.trim()) {
      const updatedResturants = originalListOfRestaurants?.filter((elem) => {
        return elem?.info?.name
          .toLowerCase()
          .includes(searchTxt?.toLowerCase());
      });
      setListOfRestaurants(updatedResturants);
    } else {
      setListOfRestaurants(originalListOfRestaurants);
    }
  };

  if (errorMessage !== null) {
    return <h1 style={{ textAlign: "center" }}>{errorMessage}</h1>;
  }

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResults = listOfRestaurants?.filter((res) => {
              return res?.info?.avgRating > 4.3;
            });
            console.log(filteredResults);
            setListOfRestaurants(filteredResults);
          }}
        >
          Top Rated Restaurants
        </button>

        <div className="search-container">
          <input
            type="text"
            className="searchInput"
            placeholder="Enter search"
            name="search"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button onClick={handleSearch} className="searchBtn">
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((resData) => {
          return (
            <Link
              to={`restaurants/${resData?.info?.id}`}
              key={resData?.info?.id}
            >
              <RestaurantCard resData={resData} />
            </Link>
          );
        })}
      </div>

      <div>
        {listOfRestaurants.length === 0 ? <h1>Nothing is Found....</h1> : null}
      </div>
    </div>
  );
};

export default Body;
