import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategoryAccordion = ({ data, isDisplay, setShowIndex }) => {
  //   const [isDisplay, setIsDisplay] = useState(false);
  const { title, itemCards } = data;
  return (
    <div className="w-full shadow-md mb-8 py-2 px-4 rounded-xl bg-gray-100">
      {/* Header */}
      <div onClick={setShowIndex} className="w-full flex justify-between">
        <span className="font-bold cursor-pointer">
          {title} {itemCards?.length > 0 ? `(${itemCards?.length})` : null}
        </span>
        <span>{itemCards?.length > 0 ? "⬇️" : null}</span>
      </div>
      {/* Accordion Body */}
      {itemCards?.length > 0 && isDisplay ? (
        <ItemList items={itemCards} />
      ) : null}
    </div>
  );
};

export default RestaurantCategoryAccordion;
