import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function ItemList() {
  const cartProducts = useSelector((state) => {
    return state.cart.cartProducts;
    // return cartArr;
  });
  let cartArr = [];
  for (let i in cartProducts) {
    cartArr.push(cartProducts[i]);
  }
  return (
    <div className="cart-list">
      {cartArr.map((item, index) => {
        if (item.num > 0) return <CartItem key={item.id} product={item} />;
      })}
    </div>
  );
}
