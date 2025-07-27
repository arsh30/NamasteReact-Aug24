import React, { use, useContext, useEffect, useState } from "react";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import { resData } from "../utils/data.js";
import { API_URL } from "../utils/constant.js";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState(
    []
  );
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null); // null because we dont know ki error me kya aayega ho skta hai object, string kuch bhi ho isliye null liya

  const RestaurantCardWithPromotedLabel = WithPromotedLabel(RestaurantCard); // with promoted label is HOC, passing the RestaurantCard component, it will return the new component which has label inside that,
  //  so basically RestaurantCardWithPromotedLabel component has a label inside this

  const [searchTxt, setSearchTxt] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API_URL);
      const response = await data.json();
      const restaurants =
        response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ?? [];

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

  if (onlineStatus === false) {
    return (
      <h1>Something went wrong... Please check your Internet connection</h1>
    );
  }

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="m-5 flex items-center gap-16">
        <button
          className="p-3 outline-none rounded-xl border-none cursor-pointer bg-[crimson] text-white transition-all duration-300"
          onClick={() => {
            const filteredResults = listOfRestaurants?.filter((res) => {
              return res?.info?.avgRating > 4.3;
            });
            
            setListOfRestaurants(filteredResults);
          }}
        >
          Top Rated Restaurants
        </button>

        <div className="flex">
          <input
            type="text"
            className="p-2 outline-none mr-3 rounded-lg border-2 w-[100%]"
            placeholder="Enter search"
            data-testid="SearchInput"
            name="search"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button onClick={handleSearch} className="searchBtn">
            Search
          </button>
        </div>

        <div className="flex">
          <label>User Name</label>
          <input
            type="text"
            className="p-2 outline-none mr-3 rounded-lg border-2 w-[100%]"
            placeholder="Set UserName"
            name="loggedInUser"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="px-10 flex flex-wrap items-center gap-6">
        {listOfRestaurants?.map((resData) => {
          return (
            <Link
              to={`restaurants/${resData?.info?.id}`}
              key={resData?.info?.id}
            >
              {resData?.info?.avgRating > 4.3 ? (
                <RestaurantCardWithPromotedLabel resData={resData} />
              ) : (
                <RestaurantCard resData={resData} />
              )}
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
