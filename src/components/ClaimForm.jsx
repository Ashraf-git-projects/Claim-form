import React from "react";
import "../styles/ClaimForm.css";
import { FaCalendarAlt } from "react-icons/fa";

export default function ClaimForm() {
  return (
    <div className="claim_form_container">
      <h2 className="form_title">Claim Form</h2>
      <form className="claim_form">
        <div className="pt_1">
        <div className="form_row">
          <input type="text" placeholder="First Name *" />
          <input type="text" placeholder="Last Name *" />
        </div>

        <div className="form_row">
          <input type="text" placeholder="Phone Number *" />
          <input type="email" placeholder="Email ID *" />
        </div>

        <div className="form_row">
          <div className="custom_input">
            <div className="icon_field">
              <input type="text" placeholder="Date of birth*" />
              <FaCalendarAlt className="field_icon" />
            </div>
          </div>
          <input type="text" placeholder="Job Title *" />
        </div>

        <div className="form_row">
          <div className="custom_input">
            <div className="icon_field">
              <input type="text" placeholder="Date of Diagnosis *" />
              <FaCalendarAlt className="field_icon" />
            </div>
          </div>

          <div className="custom_input">
           
            <div className="icon_field">
              <select>
                <option>Type of Diagnosis*</option>
                <option>Type A</option>
                <option>Type B</option>
              </select>
            </div>
          </div>
        </div>

        <div className="text_area">
          <textarea placeholder="Tell us your story (optional)" />
        </div>
           </div>
        <div className="checkbox_group">
          <label>
            <input type="checkbox" />
            I agree to the privacy policy and disclaimer and give my express written consent to be contacted regarding my case options. I understand that I may be contacted using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
          </label>
          <label>
            <input type="checkbox" />
            Please check this box to verify you're a person.
          </label>
        </div>

        <button className="submit_btn" type="submit">
          Start your claim now
        </button>
      </form>
    </div>
  );
}
