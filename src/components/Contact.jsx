import React from "react";
import "../styles/Contact.css";
import { IoIosArrowForward } from "react-icons/io";
import Banner from "./Banner";

export default function Contact() {
  return (
    <div className="contact_content">
      {/* Top Right Help Text */}
      <p className="help_text">We are here <br />to help!</p>

      {/* Banner Glass Card */}
      <Banner />

      {/* Purple Semi-circle Badge */}
      <div className="circle_badge">
       <svg viewBox="0 0 250 230" className="circle_svg">
  <defs>
    <path
      id="textCurve"
      d="M 125,125 m -100,0 a 100,100 0 1,1 200,0"
    />
  </defs>
  <text fill="#e8d9cc" fontSize="29" fontWeight="bold">
    <textPath href="#textCurve" startOffset="50%" textAnchor="middle">
      ONLY 6 SLOTS LEFT
    </textPath>
  </text>
</svg>

      </div>

      {/* Contact Buttons */}
      <div className="contact_btn_wrapper">
        <button className="contact_btn">Contact us</button>
        <button className="arrow_btn">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
