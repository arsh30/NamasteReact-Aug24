import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

// Accordion Body
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleCart = (item) => {
    dispatch(addItem(item));
    // {payload: "data"}
  };
  return (
    <div className="mt-4">
      {items.map((elem, index) => {
        return (
          <div data-testid="foodItems" key={index} className="border-b-8 my-6">
            <div className="flex justify-end mb-2h">
              <button
                onClick={() => handleCart(elem)}
                className="p-1 rounded-xl text-sm bg-black text-white"
              >
                Add to cart
              </button>
            </div>

            <div className="flex justify-between">
              <span className="font-bold">{elem?.card?.info?.name}</span>
              <span className="font-bold">{elem?.card?.info?.price}</span>
            </div>
            <p className="">{elem.card.info.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
