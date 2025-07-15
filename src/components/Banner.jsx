import React from 'react';
import '../styles/Banner.css';
import { MdOutlineShield } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { HiOutlineScale } from "react-icons/hi";

function Banner() {
  return (
    <div className="banner_container" >
            <div className="banner_txt" >
                <h2>Free <br /> <span className='case'>Case <br /> Review</span></h2>
            </div>
            <div className='list_items'>
              <ul style={{listStyle:'none'}}>
                <li><div className='icn_a'><MdOutlineShield /></div>100% Confidential</li>
                <li><div className='icn_b'><IoMdCheckmark /></div>No Win, No Fee</li>
                <li><div className='icn_c'><HiOutlineScale /></div>Free Case Evaluation</li>
              </ul>
            </div>
        </div>
  );
}

export default Banner;
