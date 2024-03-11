// import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CartEmpty() {
  const navigate = useNavigate();
  let newTime = useRef();
  const [redirectTime, setRedirectTime] = useState(10);

  function decreaseTime() {
    if (newTime.current === 0) {
      navigate("/products");
    }
    console.log(newTime.current, " new");
    // setRedirectTime(newTime.current - 1);
    setRedirectTime((redirectTime) => redirectTime - 1);
    newTime.current--;
  }
  useEffect(() => {
    let a = setInterval(decreaseTime, 1000);
    newTime.current = 10;
    return () => {
      clearInterval(a);
    };
  }, []);
  return (
    <div className="cart-empty">
      <h2>Your Cart is Empty</h2>
      <button
        onClick={() => {
          navigate("/products");
        }}
      >
        Continue Shopping
        {/* <Link to={"/"}></Link> */}
      </button>
      <p>Redirecting to Products page in {redirectTime} seconds...</p>
    </div>
  );
}
