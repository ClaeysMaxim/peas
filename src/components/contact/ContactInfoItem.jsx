import React from "react";

const ContactInfoItem = ({ icon, title, children }) => {
  return (
    <div className="contact-info__item">
      <div className="contact-info__icon">{icon}</div>
      <div className="contact-info__content">
        <h3 className="contact-info__subtitle">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default ContactInfoItem;
