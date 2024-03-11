import { ceateSlice, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: {},
  numOfCartProducts: 0,
  eachProdNum: {},
};
const cartProdCakeSlice = createSlice({
  name: "cartProd",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      state.cartProducts[action.payload.id] = action.payload;
    },
    updateProdNum: (state, action) => {
      console.log(action.payload.num);
      let change = action.payload.num;
      state.cartProducts[action.payload.productId]["num"] += change;
    },
    updateTotalProducts: (state, action) => {
      state.numOfCartProducts += action.payload;
    },
  },
});

export const { addToCart, updateProdNum, updateTotalProducts } =
  cartProdCakeSlice.actions;
// const { addToCartReducer } = cartProdCakeSlice.reducer;
//  { addToCart };
// export { addToCartReducer };
export default cartProdCakeSlice;
