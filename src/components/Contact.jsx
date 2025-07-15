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
        <span className="circle_text">ONLY 6 SLOTS LEFT</span>
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
