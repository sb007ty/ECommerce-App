import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/home.css";
import Products from "./Product/Products";
export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home2">
          <p>New Season Arrivals</p>
          <br />
          <p>100 Years of Fashion - Cruise 2024 Collection</p>
        </div>
      </div>
      <Products />
    </>
  );
}
