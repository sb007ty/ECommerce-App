import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import "../../styles/product.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get("https://fakestoreapi.com/products/");
      // setProducts(resp.data);
      // setFilterProducts(resp.data);
      setTimeout(() => {
        setProducts(resp.data);
        setFilterProducts(resp.data);
      }, 1000);
    }
    fetchData();
  }, []);
  return (
    <div className="products">
      <h2>Latest Products</h2>
      <ul
        className="products-filter"
        onClick={(e) => {
          console.log(e.target.id, "e");
          const id = e.target.id;
          let category = "";
          switch (id) {
            case "0":
              category = "all";
              break;
            case "1":
              category = "men's clothing";
              break;
            case "2":
              category = "women's clothing";
              break;
            case "3":
              category = "jewelery";
              break;
            case "4":
              category = "electronics";
              break;
            default:
              category = null;
          }
          if (category === "all") {
            setFilterProducts(products);
          } else if (category) {
            const newProducts = products.filter(
              (item) => item.category === category
            );
            // setProducts(newProducts);
            setFilterProducts(newProducts);
          }
        }}
      >
        <li>
          <button id="0"> All</button>
        </li>
        <li>
          <button id="1"> Men's Clothing</button>
        </li>
        <li>
          <button id="2"> Women's Clothing</button>
        </li>
        <li>
          <button id="3"> Jewellery</button>
        </li>
        <li>
          <button id="4"> Electronics</button>
        </li>
      </ul>
      {filterProducts.length === 0 && (
        <div>
          Loading <br />
          <span style={{ textAlign: "center", fontSize: "50px" }}>😊</span>
        </div>
      )}
      {filterProducts.length !== 0 && <ProductList products={filterProducts} />}
    </div>
  );
}
