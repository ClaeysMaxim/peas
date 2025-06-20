import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaComment } from "react-icons/fa";
import { useTranslation } from "../../hooks/useTranslation";

const ContactForm = ({ onSubmit, isSubmitting }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form__group">
        <div className="form__input-wrapper">
          <div className="form__icon">
            <FaUser />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            className="form__control"
            placeholder={t("contact.form.name")}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name" className="form__label">
            {t("contact.form.name")} {t("common.required")}
          </label>
        </div>
      </div>

      <div className="form__group">
        <div className="form__input-wrapper">
          <div className="form__icon">
            <FaEnvelope />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            className="form__control"
            placeholder={t("contact.form.email")}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className="form__label">
            {t("contact.form.email")} {t("common.required")}
          </label>
        </div>
      </div>

      <div className="form__group">
        <div className="form__input-wrapper">
          <div className="form__icon">
            <FaPhone />
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form__control"
            placeholder={t("contact.form.phone")}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone" className="form__label">
            {t("contact.form.phone")} {t("common.required")}
          </label>
        </div>
      </div>

      <div className="form__group">
        <div className="form__input-wrapper">
          <div className="form__icon form__icon--textarea">
            <FaComment />
          </div>
          <textarea
            id="message"
            name="message"
            className="form__control form__control--textarea"
            placeholder={t("contact.form.message")}
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <label htmlFor="message" className="form__label">
            {t("contact.form.message")} {t("common.required")}
          </label>
        </div>
      </div>

      <div className="form__group">
        <button
          type="submit"
          className={`button button--primary button--block ${
            isSubmitting ? "button--loading" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
