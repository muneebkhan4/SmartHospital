import React from "react";
import "./DoctorCard.css";

const Card = ({ image, heading, content, buttonText }) => {
  return (
    <div className="doctor-card">
      <div className="doctor-center">
        <div className="doctor-avatar">
          <img src={image} alt="DoctorImage" />
        </div>
        <h2 className="doctor-name">{heading}</h2>
        <p className="doctor-text">{content}</p>
        <button className="btn btn-primary">{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
