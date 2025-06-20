import React from "react";
import { useTranslation } from "../../hooks/useTranslation";

const BookingProgress = ({ currentStep }) => {
  const { t } = useTranslation();

  return (
    <div className="booking-progress">
      <div
        className={`booking-progress__step ${
          currentStep >= 1 ? "booking-progress__step--active" : ""
        }`}
      >
        <div className="booking-progress__step-number">1</div>
        <div className="booking-progress__step-text">
          {t("booking.progress.route")}
        </div>
      </div>
      <div className="booking-progress__line"></div>
      <div
        className={`booking-progress__step ${
          currentStep >= 2 ? "booking-progress__step--active" : ""
        }`}
      >
        <div className="booking-progress__step-number">2</div>
        <div className="booking-progress__step-text">
          {t("booking.progress.details")}
        </div>
      </div>
      <div className="booking-progress__line"></div>
      <div
        className={`booking-progress__step ${
          currentStep >= 3 ? "booking-progress__step--active" : ""
        }`}
      >
        <div className="booking-progress__step-number">3</div>
        <div className="booking-progress__step-text">
          {t("booking.progress.contact")}
        </div>
      </div>
    </div>
  );
};

export default BookingProgress;
