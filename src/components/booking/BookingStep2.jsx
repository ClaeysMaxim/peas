import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import {
  FaCalendarAlt,
  FaUsers,
  FaSuitcase,
  FaBriefcase,
} from "react-icons/fa";

const BookingStep2 = ({
  formData,
  handleChange,
  formErrors,
  prevStep,
  nextStep,
  adjustLuggage,
  totalLuggage,
  luggageError,
  getTripDescription,
}) => {
  const { t } = useTranslation();

  return (
    <div className="booking-step booking-step--active">
      <h2 className="booking-step__title">{t("booking.step2.title")}</h2>

      {/* Reis overzicht */}
      <div className="trip-summary">
        <div className="trip-summary__header">
          <h3 className="trip-summary__title">
            {t("booking.step2.tripSummary")}
          </h3>
        </div>
        <div className="trip-summary__content">
          <p className="trip-summary__route">{getTripDescription()}</p>
          <div className="trip-summary__details">
            <div className="trip-summary__item">
              <div className="trip-summary__icon">
                <FaCalendarAlt />
              </div>
              <div className="trip-summary__text">
                <strong>
                  {formData.departureDate
                    ? new Date(formData.departureDate).toLocaleDateString()
                    : t("booking.step2.dateNotSelected")}
                </strong>
                <span>
                  {formData.departureTime || t("booking.step2.timeNotSelected")}
                </span>
              </div>
            </div>

            {formData.direction === "roundTrip" && (
              <div className="trip-summary__item">
                <div className="trip-summary__icon">
                  <FaCalendarAlt />
                </div>
                <div className="trip-summary__text">
                  <strong>
                    {formData.returnDate
                      ? new Date(formData.returnDate).toLocaleDateString()
                      : t("booking.step2.dateNotSelected")}
                  </strong>
                  <span>
                    {formData.returnTime || t("booking.step2.timeNotSelected")}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Passagiers en bagage */}
      <div className="booking-section">
        <h3 className="booking-section__title">
          {t("booking.step2.passengersTitle")}
        </h3>

        <div className="form-row">
          <div className="form-group form-group--half">
            <label className="form-label">
              {t("booking.step2.passengersLabel")}
            </label>
            <div className="form-select-wrapper">
              <select
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                className={`form-select ${
                  formErrors.passengers ? "form-input--error" : ""
                }`}
                required
              >
                {/* Maximaal 4 passagiers */}
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num}{" "}
                    {num === 1
                      ? t("booking.step2.passenger")
                      : t("booking.step2.passengers")}
                  </option>
                ))}
              </select>
              <div className="form-select-icon">
                <FaUsers />
              </div>
            </div>
            {formErrors.passengers && (
              <span className="form-error">{formErrors.passengers}</span>
            )}
          </div>
        </div>

        {/* Bagage selectie met grote en kleine koffers */}
        <div className="luggage-section">
          <h4 className="form-sublabel">{t("booking.step2.luggageTitle")}</h4>

          {luggageError && (
            <div className="luggage-error">
              {t("booking.step2.luggageError")}
            </div>
          )}

          <div className="luggage-counters">
            {/* Grote koffers */}
            <div className="luggage-counter">
              <div className="luggage-counter__icon">
                <FaSuitcase />
                <span>{t("booking.step2.largeLuggage")}</span>
              </div>
              <div className="luggage-counter__controls">
                <button
                  type="button"
                  className="counter-button"
                  onClick={() => adjustLuggage("largeLuggage", -1)}
                  disabled={formData.largeLuggage <= 0}
                >
                  -
                </button>
                <span className="counter-value">{formData.largeLuggage}</span>
                <button
                  type="button"
                  className="counter-button"
                  onClick={() => adjustLuggage("largeLuggage", 1)}
                  disabled={totalLuggage >= 4}
                >
                  +
                </button>
              </div>
            </div>

            {/* Kleine valiezen */}
            <div className="luggage-counter">
              <div className="luggage-counter__icon">
                <FaBriefcase />
                <span>{t("booking.step2.smallLuggage")}</span>
              </div>
              <div className="luggage-counter__controls">
                <button
                  type="button"
                  className="counter-button"
                  onClick={() => adjustLuggage("smallLuggage", -1)}
                  disabled={formData.smallLuggage <= 0}
                >
                  -
                </button>
                <span className="counter-value">{formData.smallLuggage}</span>
                <button
                  type="button"
                  className="counter-button"
                  onClick={() => adjustLuggage("smallLuggage", 1)}
                  disabled={totalLuggage >= 4}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="luggage-total">
            <span>
              {t("booking.step2.totalLuggage").replace("{count}", totalLuggage)}
            </span>
          </div>
        </div>
      </div>

      <div className="form-navigation">
        <button
          type="button"
          className="button button--secondary"
          onClick={prevStep}
        >
          {t("booking.step2.prevButton")}
        </button>
        <button
          type="button"
          className="button button--primary"
          onClick={nextStep}
        >
          {t("booking.step2.nextButton")}
        </button>
      </div>
    </div>
  );
};

export default BookingStep2;
