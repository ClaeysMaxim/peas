import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaCommentAlt } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation"; // Import missing translation hook

const ContactForm = () => {
  // Get location to detect navigation
  const location = useLocation();
  const { t } = useTranslation(); // Add translation hook

  // Initial form data - factored out to allow reset
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Reset form when user navigates away and back
  useEffect(() => {
    // Save the success state to prevent overriding when component remounts while on success state
    const wasSubmitted = isSubmitted;

    // Reset form if navigating back to form (not just a refresh)
    return () => {
      if (!wasSubmitted) {
        setFormData(initialFormData);
        setError(null);
      }
    };
  }, [location.key]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Simuleer een succesvolle verzending (tijdelijke oplossing)
      console.log("Formulier data zou verzonden worden:", formData);

      // Wacht 1,5 seconde om een verzending te simuleren
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Toon succesbericht - geen timeout meer
      setIsSubmitted(true);
    } catch (error) {
      setError("Er is iets misgegaan. Probeer het later opnieuw.");
      console.error("Formulier verzendingsfout:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="form-success">
        <div className="form-success__icon">✓</div>
        <h3 className="form-success__title">
          {t("contact.form.success.title")}
        </h3>
        <p className="form-success__message">
          {t("contact.form.success.message")}
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">
          <FaUser />
          {t("contact.form.name")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">
          <FaEnvelope />
          {t("contact.form.email")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">
          <FaPhone />
          {t("contact.form.phone")}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">
          <FaCommentAlt />
          {t("contact.form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className="btn" disabled={isSubmitting}>
        {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
      </button>
    </form>
  );
};

export default ContactForm;
