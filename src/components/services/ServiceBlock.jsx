import React from "react";

const ServiceBlock = ({ icon, title, texts }) => {
  return (
    <div className="service-block">
      <div className="service-block__icon">{icon}</div>
      <h3 className="service-block__title">{title}</h3>
      <div className="service-block__content">
        {texts.map((text, index) => (
          <p key={index} className="service-block__paragraph">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ServiceBlock;
