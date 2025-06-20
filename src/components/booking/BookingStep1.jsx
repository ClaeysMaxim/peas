import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import {
  FaPlane,
  FaTrain,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaExchangeAlt,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

const BookingStep1 = ({
  formData,
  handleChange,
  handleBlur,
  formErrors,
  nextStep,
  getLocationOptions,
}) => {
  const { t } = useTranslation();

  return (
    <div className="booking-step booking-step--active">
      <h2 className="booking-step__title">{t("booking.step1.title")}</h2>

      {/* Stap 1: Selecteer de richting (naar/van/retour) */}
      <div className="booking-section">
        <h3 className="booking-section__title">
          {t("booking.step1.directionTitle")}{" "}
          <span className="required-field">{t("common.required")}</span>
        </h3>

        <div className="booking-direction-options">
          <label
            className={`booking-direction-option ${
              formData.direction === "toAirport"
                ? "booking-direction-option--active"
                : ""
            } ${formErrors.direction ? "form-input--error" : ""}`}
          >
            <input
              type="radio"
              name="direction"
              value="toAirport"
              checked={formData.direction === "toAirport"}
              onChange={handleChange}
              className="visually-hidden"
            />
            <div className="booking-direction-option__content">
              <div className="booking-direction-option__icon">
                <FaArrowRight />
              </div>
              <div className="booking-direction-option__text">
                <strong>{t("booking.step1.toAirport.title")}</strong>
                <span>{t("booking.step1.toAirport.subtitle")}</span>
              </div>
            </div>
          </label>

          <label
            className={`booking-direction-option ${
              formData.direction === "fromAirport"
                ? "booking-direction-option--active"
                : ""
            } ${formErrors.direction ? "form-input--error" : ""}`}
          >
            <input
              type="radio"
              name="direction"
              value="fromAirport"
              checked={formData.direction === "fromAirport"}
              onChange={handleChange}
              className="visually-hidden"
            />
            <div className="booking-direction-option__content">
              <div className="booking-direction-option__icon">
                <FaArrowLeft />
              </div>
              <div className="booking-direction-option__text">
                <strong>{t("booking.step1.fromAirport.title")}</strong>
                <span>{t("booking.step1.fromAirport.subtitle")}</span>
              </div>
            </div>
          </label>

          <label
            className={`booking-direction-option ${
              formData.direction === "roundTrip"
                ? "booking-direction-option--active"
                : ""
            } ${formErrors.direction ? "form-input--error" : ""}`}
          >
            <input
              type="radio"
              name="direction"
              value="roundTrip"
              checked={formData.direction === "roundTrip"}
              onChange={handleChange}
              className="visually-hidden"
            />
            <div className="booking-direction-option__content">
              <div className="booking-direction-option__icon">
                <FaExchangeAlt />
              </div>
              <div className="booking-direction-option__text">
                <strong>{t("booking.step1.roundTrip.title")}</strong>
                <span>{t("booking.step1.roundTrip.subtitle")}</span>
              </div>
            </div>
          </label>
        </div>
        {formErrors.direction && (
          <span className="form-error">{formErrors.direction}</span>
        )}
      </div>

      {/* Stap 2: Selecteer het type locatie */}
      <div className="booking-section">
        <h3 className="booking-section__title">
          {formData.direction === "fromAirport"
            ? t("booking.step1.locationTitleFrom")
            : t("booking.step1.locationTitle")}
          <span className="required-field">{t("common.required")}</span>
        </h3>

        <div className="booking-location-types">
          <label
            className={`booking-type-option ${
              formData.locationType === "airport"
                ? "booking-type-option--active"
                : ""
            } ${formErrors.locationType ? "form-input--error" : ""}`}
          >
            <input
              type="radio"
              name="locationType"
              value="airport"
              checked={formData.locationType === "airport"}
              onChange={handleChange}
              className="visually-hidden"
            />
            <span className="booking-type-option__icon">
              <FaPlane />
            </span>
            <span className="booking-type-option__text">
              {t("booking.step1.locationType.airport")}
            </span>
          </label>

          <label
            className={`booking-type-option ${
              formData.locationType === "station"
                ? "booking-type-option--active"
                : ""
            } ${formErrors.locationType ? "form-input--error" : ""}`}
          >
            <input
              type="radio"
              name="locationType"
              value="station"
              checked={formData.locationType === "station"}
              onChange={handleChange}
              className="visually-hidden"
            />
            <span className="booking-type-option__icon">
              <FaTrain />
            </span>
            <span className="booking-type-option__text">
              {t("booking.step1.locationType.station")}
            </span>
          </label>

          <label
            className={`booking-type-option ${
              formData.locationType === "custom"
                ? "booking-type-option--active"
                : ""
            } ${formErrors.locationType ? "form-input--error" : ""}`}
          >
            <input
              type="radio"
              name="locationType"
              value="custom"
              checked={formData.locationType === "custom"}
              onChange={handleChange}
              className="visually-hidden"
            />
            <span className="booking-type-option__icon">
              <FaMapMarkerAlt />
            </span>
            <span className="booking-type-option__text">
              {t("booking.step1.locationType.custom")}
            </span>
          </label>
        </div>
        {formErrors.locationType && (
          <span className="form-error">{formErrors.locationType}</span>
        )}

        {/* Toon de relevante selectie/input veld op basis van de locatie type */}
        <div className="booking-location-selection">
          {(formData.locationType === "airport" ||
            formData.locationType === "station") && (
            <div className="form-group">
              <label className="form-label">
                {formData.locationType === "airport"
                  ? t("booking.step1.selectAirport")
                  : t("booking.step1.selectStation")}
                <span className="required-field">{t("common.required")}</span>
              </label>
              <div className="form-select-wrapper">
                <select
                  name="locationId"
                  value={formData.locationId}
                  onChange={handleChange}
                  className={`form-select ${
                    formErrors.locationId ? "form-input--error" : ""
                  }`}
                  required
                >
                  <option value="">{t("booking.step1.makeChoice")}</option>
                  {getLocationOptions()}
                </select>
                <div className="form-select-icon">
                  {formData.locationType === "airport" ? (
                    <FaPlane />
                  ) : (
                    <FaTrain />
                  )}
                </div>
              </div>
              {formErrors.locationId && (
                <span className="form-error">{formErrors.locationId}</span>
              )}
            </div>
          )}

          {formData.locationType === "custom" && (
            <div className="form-group">
              <label className="form-label">
                {t("booking.step1.customLocationLabel")}{" "}
                <span className="required-field">{t("common.required")}</span>
              </label>
              <div className="form-input-wrapper">
                <input
                  type="text"
                  name="customLocation"
                  value={formData.customLocation}
                  onChange={handleChange}
                  placeholder={t("booking.step1.addressPlaceholder")}
                  className={`form-input ${
                    formErrors.customLocation ? "form-input--error" : ""
                  }`}
                  required
                />
                <div className="form-input-icon">
                  <FaMapMarkerAlt />
                </div>
              </div>
              {formErrors.customLocation && (
                <span className="form-error">{formErrors.customLocation}</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Stap 3: Ophaal/aflever locatie */}
      <div className="booking-section">
        <h3 className="booking-section__title">
          {formData.direction === "toAirport"
            ? t("booking.step1.pickupTitle")
            : t("booking.step1.dropoffTitle")}
        </h3>

        <div className="form-group">
          <label className="form-label">
            {t("booking.step1.addressLabel")}{" "}
            <span className="required-field">{t("common.required")}</span>
          </label>
          <div className="form-input-wrapper">
            <input
              type="text"
              name={
                formData.direction === "toAirport"
                  ? "pickupAddress"
                  : "dropoffAddress"
              }
              value={
                formData.direction === "toAirport"
                  ? formData.pickupAddress
                  : formData.dropoffAddress
              }
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t("booking.step1.addressPlaceholder")}
              className={`form-input ${
                (formData.direction === "toAirport" &&
                  formErrors.pickupAddress) ||
                (formData.direction !== "toAirport" &&
                  formErrors.dropoffAddress)
                  ? "form-input--error"
                  : ""
              }`}
              required
            />
            <div className="form-input-icon">
              <FaMapMarkerAlt />
            </div>
          </div>
          {formData.direction === "toAirport" && formErrors.pickupAddress && (
            <span className="form-error">{formErrors.pickupAddress}</span>
          )}
          {formData.direction !== "toAirport" && formErrors.dropoffAddress && (
            <span className="form-error">{formErrors.dropoffAddress}</span>
          )}
        </div>
      </div>

      {/* Stap 4: Datum en tijd selectie */}
      <div className="booking-section">
        <h3 className="booking-section__title">
          {t("booking.step1.dateTitle")}{" "}
          <span className="required-field">{t("common.required")}</span>
        </h3>

        <div className="form-row">
          <div className="form-group form-group--half">
            <label className="form-label">
              {formData.direction === "roundTrip"
                ? t("booking.step1.dateDepartureReturn")
                : t("booking.step1.dateDeparture")}
              <span className="required-field">{t("common.required")}</span>
            </label>
            <div className="form-input-wrapper">
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
                className={`form-input ${
                  formErrors.departureDate ? "form-input--error" : ""
                }`}
                required
                min={new Date().toISOString().split("T")[0]}
              />
              <div className="form-input-icon">
                <FaCalendarAlt />
              </div>
            </div>
            {formErrors.departureDate && (
              <span className="form-error">{formErrors.departureDate}</span>
            )}
          </div>

          <div className="form-group form-group--half">
            <label className="form-label">
              {formData.direction === "roundTrip"
                ? t("booking.step1.timeDepartureReturn")
                : t("booking.step1.timeDeparture")}
              <span className="required-field">{t("common.required")}</span>
            </label>
            <div className="form-input-wrapper">
              <input
                type="time"
                name="departureTime"
                value={formData.departureTime}
                onChange={handleChange}
                className={`form-input ${
                  formErrors.departureTime ? "form-input--error" : ""
                }`}
                required
              />
              <div className="form-input-icon">
                <FaClock />
              </div>
            </div>
            {formErrors.departureTime && (
              <span className="form-error">{formErrors.departureTime}</span>
            )}
          </div>
        </div>

        {formData.direction === "roundTrip" && (
          <div className="form-row">
            <div className="form-group form-group--half">
              <label className="form-label">
                {t("booking.step1.dateReturn")}{" "}
                <span className="required-field">{t("common.required")}</span>
              </label>
              <div className="form-input-wrapper">
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  className={`form-input ${
                    formErrors.returnDate ? "form-input--error" : ""
                  }`}
                  required
                  min={formData.departureDate}
                />
                <div className="form-input-icon">
                  <FaCalendarAlt />
                </div>
              </div>
              {formErrors.returnDate && (
                <span className="form-error">{formErrors.returnDate}</span>
              )}
            </div>

            <div className="form-group form-group--half">
              <label className="form-label">
                {t("booking.step1.timeReturn")}{" "}
                <span className="required-field">{t("common.required")}</span>
              </label>
              <div className="form-input-wrapper">
                <input
                  type="time"
                  name="returnTime"
                  value={formData.returnTime}
                  onChange={handleChange}
                  className={`form-input ${
                    formErrors.returnTime ? "form-input--error" : ""
                  }`}
                  required
                />
                <div className="form-input-icon">
                  <FaClock />
                </div>
              </div>
              {formErrors.returnTime && (
                <span className="form-error">{formErrors.returnTime}</span>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="form-navigation">
        <button
          type="button"
          className="button button--primary"
          onClick={nextStep}
        >
          {t("booking.step1.nextButton")}
        </button>
      </div>
    </div>
  );
};

export default BookingStep1;
