import React from "react";
import coder from "../images/coder.jpg";
import "../styles/contact.css";
export default function Contact() {
  return (
    <div className="contact">
      <div className="img">
        <img src={coder} alt="" srcset="" height={"300px"} width={"300px"} />
      </div>
      <ul>
        <h3>Made By Spandan </h3>
        <li> 👀 I’m interested in MERN Stack</li>
        <li>🌱 I’m currently learning React</li>
        <li>
          📫 How to reach me
          <ol>
            <li>
              <a
                href="https://www.linkedin.com/in/spandan-banerjee-1119b5172/ "
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/sb007ty" target="_blank">
                Github
              </a>
            </li>
          </ol>
        </li>
      </ul>
    </div>
  );
}
