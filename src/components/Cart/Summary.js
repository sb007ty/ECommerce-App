import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  updateProdNum,
  updateTotalProducts,
} from "../../redux/features/cartProductSlice";

export default function Summary() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  let productCost = 0;
  console.log(cartProducts);
  for (let item in cartProducts) {
    const price = cartProducts[item]["price"];
    const num = cartProducts[item]["num"];
    productCost = productCost + num * price;
  }
  productCost = productCost.toFixed(2);
  const totalCost = +productCost + 30;
  return (
    <div className="summary">
      <div className="sum-item">
        <h2>Summary</h2>
      </div>
      <div className="sum-item">
        <span>Products</span>
        <span>{productCost}</span>
      </div>
      <div className="sum-item">
        <span>Shipping</span>
        <span>30$</span>
      </div>
      <div className="sum-item">
        <span>Total Amount</span>
        <span> {totalCost + "$"}</span>
      </div>
    </div>
  );
}
