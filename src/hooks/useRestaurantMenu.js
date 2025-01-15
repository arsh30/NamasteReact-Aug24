import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../utils/constant";

const useRestaurantsMenu = (resId) => {
  const [restaurantMenus, setRestaurantMenus] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetch(RESTAURANT_MENU_API + resId);
      const resp = await data.json();
      console.log("response", resp.data);
      setRestaurantMenus(resp.data);
    } catch (error) {
      setLoading(false);
    }
  };
  return restaurantMenus;
};

export default useRestaurantsMenu;
