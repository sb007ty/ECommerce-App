import { configureStore } from "@reduxjs/toolkit";
import cartProdCakeSlice from "../features/cartProductSlice";

const store = configureStore({
  reducer: {
    cart: cartProdCakeSlice.reducer,
  },
});
console.log("initialstate", store.getState());

export default store;
