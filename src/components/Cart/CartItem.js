import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  updateProdNum,
  updateTotalProducts,
} from "../../redux/features/cartProductSlice";

export default function CartItem({ product, prodNum }) {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => {
    return state.cart.cartProducts;
    // return cartArr;
  });
  let cartArr = [];
  for (let i in cartProducts) {
    cartArr.push(cartProducts[i]);
  }
  return (
    <div className="cart-item">
      <div className="cart-item-child item-img">
        <img src={product.image} alt="" width={"100px"} height={"100px"} />
      </div>
      <p className="cart-item-child item-title">{product.title}</p>
      <div className="cart-item-child item-price">
        <button
          onClick={(e) => {
            dispatch(updateTotalProducts(1));
            if (cartProducts[product.id]) {
              console.log("first");
              dispatch(updateProdNum({ productId: product.id, num: 1 }));
            } else {
              dispatch(addToCart({ ...product, num: 1 }));
            }
          }}
        >
          +
        </button>
        {product.num}
        <button
          onClick={(e) => {
            if (cartProducts[product.id].num == 1) {
              alert("Are you sure You want to remove it");
              dispatch(updateTotalProducts(-1));
              dispatch(updateProdNum({ productId: product.id, num: -1 }));
            } else {
              dispatch(updateTotalProducts(-1));
              dispatch(updateProdNum({ productId: product.id, num: -1 }));
            }
          }}
        >
          -
        </button>
        <p>{product.price}</p>
      </div>
    </div>
  );
}
