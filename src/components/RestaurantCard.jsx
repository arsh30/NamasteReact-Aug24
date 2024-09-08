import React from "react";
import { imageCDNUrl } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props; // props are object
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="food-img"
        src={`${imageCDNUrl}/${resData?.info?.cloudinaryImageId}`}
        alt="foodImg"
      />
      <h3 className="mb mt">{name}</h3>
      <h4 className="mb">{cuisines.join(", ")}</h4>
      <h4 className="mb">{avgRating} stars</h4>
      <h4 className="mb"> {costForTwo}</h4>
      <h4 className="mb">{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
