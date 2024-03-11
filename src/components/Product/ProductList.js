import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

export default function ProductList({ products }) {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  console.log(cartProducts, " cartp");
  return (
    <div className="product-list">
      {products.map((item, index) => {
        return (
          <ProductItem
            key={item.id}
            product={item}
            prodNum={
              cartProducts &&
              cartProducts[item.id] &&
              cartProducts[item.id]["num"]
            }
          />
        );
      })}
    </div>
  );
}
