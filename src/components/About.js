import React from "react";
import menCl from "../images/men-clothing.jpeg";
import womCl from "../images/women-clothing.jpeg";
import jew from "../images/jewel.jpeg";
import electronics from "../images/elect.jpeg";
import "../styles/about.css";
export default function About() {
  return (
    <div className="about">
      <h1 className="item">About Us</h1>
      <p className="item">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga
        possimus sequi rem nisi nostrum excepturi aspernatur, iste placeat.
        Rdolor sit amet consectetur adipisicing elit. Accusamus fuga possimus
        sequi rem nisi nostrum excepturi aspernatur, iste placeat. Reiciendis
        ducimus aperiam, et vitae perferendis adipisci unde iste nam
        necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusamus fuga possimus sequi rem nisi nostrum excepturi aspernatur,
        iste placeat. Reiciendis ducimus aperiam, et vitae perferendis adipisci
        unde iste nam necessitatibus! Lo iste placeat. Reiciendis ducimus
        aperiam, et vitae perferendis adipisci unde iste nam necessitatibus!
      </p>
      <div className="about-products1 item">
        <h4>Men's Clothing</h4>
        <img src={menCl} width={"300px"} height={"300px"} />
      </div>
      <div className="about-products2 item">
        <h4>Women's Clothing</h4>
        <img src={womCl} width={"300px"} height={"300px"} />
      </div>
      <div className="about-products3 item">
        <h4>Jewelery</h4>
        <img src={jew} width={"300px"} height={"300px"} />
      </div>
      <div className="about-products4 item">
        <h4>Electronics</h4>
        <img src={electronics} width={"300px"} height={"300px"} />
      </div>
      \
    </div>
  );
}
