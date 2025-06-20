import React from "react";

const FleetItem = ({ car }) => {
  return (
    <div className="fleet-item">
      <div className="fleet-item__image">
        <img src={car.image} alt={car.name} />
      </div>
      <div className="fleet-item__content">
        <h3 className="fleet-item__title">{car.name}</h3>
        <p className="fleet-item__description">{car.description}</p>

        <ul className="fleet-item__features">
          {car.features.map((feature, index) => (
            <li key={index} className="fleet-item__feature">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FleetItem;
