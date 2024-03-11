import React from "react";
import ItemList from "./ItemList";
import Summary from "./Summary";
import "../../styles/cart.css";
import { useSelector } from "react-redux";
import CartEmpty from "./CartEmpty";
export default function CartContainer() {
  const numOfCartProducts = useSelector(
    (state) => state.cart.numOfCartProducts
  );
  return (
    <>
      {numOfCartProducts !== 0 && (
        <div className="cart-container">
          <h2 className="cart-item-child cart-heading"> Item List</h2>
          <ItemList />
          <Summary />
        </div>
      )}
      {numOfCartProducts === 0 && <CartEmpty />}
    </>
  );
}
