import React from "react";
import "../styles/ClaimForm.css";

export default function ClaimForm() {
  return (
    <div className="claim_form_container">
      <h2 className="form_title">Claim Form</h2>
      <form className="claim_form">
        <div className="form_row">
          <input type="text" placeholder="First Name *" />
          <input type="text" placeholder="Last Name *" />
        </div>
        <div className="form_row">
          <input type="text" placeholder="Phone Number *" />
          <input type="email" placeholder="Email ID *" />
        </div>
        <div className="form_row">
          <div className="icon_input">
            <input type="date" placeholder="Date of birth *" />
            <span className="icon">📅</span>
          </div>
          <input type="text" placeholder="Job Title *" />
        </div>
        <div className="form_row">
          <div className="icon_input">
            <input type="date" placeholder="Date of Diagnosis *" />
            <span className="icon">📅</span>
          </div>
          <div className="icon_input">
            <select>
              <option>Type of Diagnosis *</option>
              <option>Type A</option>
              <option>Type B</option>
            </select>
            <span className="icon">▾</span>
          </div>
        </div>
        <div className="form_row full_width">
          <textarea placeholder="Tell us your story (optional)" />
        </div>

        <div className="checkbox_group">
          <label>
            <input type="checkbox" />
            I agree to the <span className="link">privacy policy</span> and <span className="link">disclaimer</span> and give my express written consent to be contacted...
          </label>
          <label>
            <input type="checkbox" />
            Please check this box to verify you’re a person.
          </label>
        </div>

        <button className="submit_btn" type="submit">Start your claim now</button>
      </form>
    </div>
  );
}
