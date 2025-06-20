import React from "react";
import { useTranslation } from "../../hooks/useTranslation";

const BookingSuccess = () => {
  const { t } = useTranslation();

  return (
    <div className="booking-success">
      <div className="booking-success__icon">✓</div>
      <h2 className="booking-success__title">{t("booking.success.title")}</h2>
      <p className="booking-success__message">{t("booking.success.message")}</p>
      <p className="booking-success__details">{t("booking.success.details")}</p>
    </div>
  );
};

export default BookingSuccess;
