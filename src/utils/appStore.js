import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";

const appStore = configureStore({
  reducer: { // this reducer is whole app reducer, it contains multiple reducer, jo slice se return krege
    // we will add the slices in this
    // it contains multiple slices
    cart: cartReducer,
    // user:userReducer
  },
});
export default appStore;
