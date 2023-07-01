import React from "react";
import "./Testimonial.css"; // Import CSS file for styling

const Testimonial = ({ avatar, name, text }) => (
  <div style={{ margin: "20px" }} className="testimonial">
    <div className="testimonial-avatar">
      <img src={avatar} alt="Avatar" />
    </div>
    <h4 className="testimonial-name">{name}</h4>
    <p className="testimonial-text">{text}</p>
  </div>
);

export default Testimonial;
