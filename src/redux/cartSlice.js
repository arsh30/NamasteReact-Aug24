import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // addItemToCart is basically "ACTION",
      // Reducer function is the arrow function (jo hum use kr rahe hai)
      // so jo reducer function hai isme logic to update our state.
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      // write the logic properly, multiple items honge to action.payload filter krke remove krege
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer; 