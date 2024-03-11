import React from "react";
import "../styles/nav.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import cartsvg from "../svg-icons/cart.svg";
import loginsvg from "../svg-icons/login.svg";
import { useSelector } from "react-redux";

export default function Navigation() {
  const numOfProdInCart = useSelector((state) => state.cart.numOfCartProducts);
  console.log("hello");
  return (
    <>
      <div className="nav">
        <div className="i i1">
          <h2 className="nav-heading">E Commerce</h2>
        </div>
        <div className="i i2">
          <ul className="nav-list">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"products"}>Products</NavLink>
            </li>
            <li>
              <NavLink to={"about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="i i3">
          <li>
            <Link to={"/login"}>
              <img src={loginsvg} alt="" height={"30px"} width={"30px"} />

              <span>Login</span>
            </Link>
          </li>
          <li>
            <NavLink to={"/register"}>
              <img src={loginsvg} alt="" height={"30px"} width={"30px"} />
              <span>Register</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>
              <img src={cartsvg} alt="" height={"30px"} width={"30px"} />
              <span> {"Cart" + `( ${numOfProdInCart})`}</span>
            </NavLink>
          </li>
        </div>
      </div>
      <Outlet />
    </>
  );
}
