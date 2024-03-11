import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  updateProdNum,
  updateTotalProducts,
} from "../../redux/features/cartProductSlice";

export default function ProductItem({ product, prodNum }) {
  const dispatch = useDispatch();
  const eachProdNum = useSelector((state) => state.cart.eachProdNum);
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  return (
    <div className="product-item">
      <img src={product.image} alt="" height={"200px"} width={"200px"} />
      <p>
        {product.title.substring(0, 10) +
          (product.title.length > 10 ? "..." : "")}
      </p>
      <p>
        {product.description.substring(0, 50) +
          (product.description.length > 50 ? "..." : "")}
      </p>
      <p>{"Price: " + product.price + " $"} </p>
      <p className="button-p">
        <button>Buy</button>
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
          Add to Cart
        </button>
        {Boolean(prodNum) === true && <button>{prodNum}</button>}
      </p>
    </div>
  );
}
