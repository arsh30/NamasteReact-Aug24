import React from "react";
import { imageCDNUrl } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props; // props are object

  // const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;

  // if (!resData || !resData.info) {
  //   return <h1>Loading....</h1>;
  // }
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;

  return (
    <div
      data-testid="resCard"
      className="w-[300px] h-[410px] shadow-xl cursor-pointer bg-[#f0f0f0] p-5 overflow-hidden
    mx-[5px] my-5 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
    >
      <img
        className="w-full h-[50%] rounded-tl-lg rounded-tr-lg transition-all duration-300 hover:scale-110"
        src={`${imageCDNUrl}/${resData?.info?.cloudinaryImageId}`}
        alt="foodImg"
      />
      <h3 className="mb-[10px] mt-[15px]">{name}</h3>
      <h4 className="mb-[10px]">{cuisines.join(", ")}</h4>
      <h4 className="mb-[10px]">{avgRating} stars</h4>
      <h4 className="mb-[10px]"> {costForTwo}</h4>
      <h4 className="mb-[10px]">{sla?.slaString}</h4>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    // Here we are returning a new component
    return (
      // here we are return the JSX, because a component return piece of JSX.
      <div>
        <label className="absolute bg-black text-white rounded-lg p-2 z-40">
          Promoted
        </label>
        <RestaurantCard {...props} />{" "}
        {/* passing the same data jo jo pehle Restaurant card recieve krra tha*/}
      </div>
    );
  };
};
export default RestaurantCard;
