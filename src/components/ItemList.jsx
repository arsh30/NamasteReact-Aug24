// Accordion Body
const ItemList = ({ items }) => {
  return (
    <div className="mt-4">
      {items.map((elem, index) => {
        return (
          <div key={index} className="border-b-8 my-6">
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
