import React from "react";
import { useTranslation } from "../../hooks/useTranslation";

const BookingStep3 = ({
  formData,
  handleChange,
  handleBlur,
  formErrors,
  prevStep,
  isSubmitting,
}) => {
  const { t } = useTranslation();

  return (
    <div className="booking-step booking-step--active">
      <h2 className="booking-step__title">{t("booking.step3.title")}</h2>

      <div className="booking-section">
        <div className="form-group">
          <label className="form-label">
            {t("booking.step3.nameLabel")}{" "}
            <span className="required-field">{t("common.required")}</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${
              formErrors.name ? "form-input--error" : ""
            }`}
            placeholder={t("booking.step3.namePlaceholder")}
            required
          />
          {formErrors.name && (
            <span className="form-error">{formErrors.name}</span>
          )}
        </div>

        <div className="form-row">
          <div className="form-group form-group--half">
            <label className="form-label">
              {t("booking.step3.emailLabel")}{" "}
              <span className="required-field">{t("common.required")}</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${
                formErrors.email ? "form-input--error" : ""
              }`}
              placeholder={t("booking.step3.emailPlaceholder")}
              required
            />
            {formErrors.email && (
              <span className="form-error">{formErrors.email}</span>
            )}
          </div>

          <div className="form-group form-group--half">
            <label className="form-label">
              {t("booking.step3.phoneLabel")}{" "}
              <span className="required-field">{t("common.required")}</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${
                formErrors.phone ? "form-input--error" : ""
              }`}
              placeholder={t("booking.step3.phonePlaceholder")}
              required
            />
            {formErrors.phone && (
              <span className="form-error">{formErrors.phone}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            {t("booking.step3.specialRequestsLabel")}{" "}
            <span className="optional-label">
              {t("booking.step3.specialRequestsOptional")}
            </span>
          </label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            className="form-textarea"
            placeholder={t("booking.step3.specialRequestsPlaceholder")}
            rows="4"
          ></textarea>
        </div>

        <div className="form-group form-checkbox">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms || false}
            onChange={handleChange}
            onBlur={handleBlur}
            className={formErrors.terms ? "form-input--error" : ""}
          />
          <label htmlFor="terms" className="form-checkbox-label">
            {t("booking.step3.termsLabel")}{" "}
            <span className="required-field">{t("common.required")}</span>
          </label>
          {formErrors.terms && (
            <span className="form-error">{formErrors.terms}</span>
          )}
        </div>
      </div>

      <div className="form-navigation">
        <button
          type="button"
          className="button button--secondary"
          onClick={prevStep}
        >
          {t("booking.step3.prevButton")}
        </button>
        <button
          type="submit"
          className={`button button--primary ${
            isSubmitting ? "button--loading" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting
            ? t("booking.step3.submittingButton")
            : t("booking.step3.submitButton")}
        </button>
      </div>
    </div>
  );
};

export default BookingStep3;
