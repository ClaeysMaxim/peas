import React from "react";

const ServiceFeature = ({ title, text }) => {
  return (
    <div className="service-feature">
      <h3 className="service-feature__title">{title}</h3>
      <p className="service-feature__text">{text}</p>
    </div>
  );
};

export default ServiceFeature;
