import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import ContactInfoItem from "../components/contact/ContactInfoItem";
import ContactForm from "../components/contact/ContactForm";
import ContactSuccess from "../components/contact/ContactSuccess";
import { useTranslation } from "../hooks/useTranslation";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (formData) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <main className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">{t("contact.pageTitle")}</h1>
          <p className="page-header__subtitle">{t("contact.pageSubtitle")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info__card">
              <h2 className="contact-info__title">{t("contact.info.title")}</h2>

              <ContactInfoItem
                icon={<FaMapMarkerAlt />}
                title={t("contact.info.address")}
              >
                <address className="contact-info__address">
                  <p>{t("contact.info.company")}</p>
                  <p>{t("contact.info.street")}</p>
                  <p>{t("contact.info.city")}</p>
                </address>
              </ContactInfoItem>

              <ContactInfoItem
                icon={<FaPhone />}
                title={t("contact.info.phone")}
              >
                <p>
                  <a href="tel:+32475786048" className="contact-info__link">
                    +32 475 78 60 48
                  </a>
                </p>
                <p className="contact-info__note">
                  {t("contact.info.phoneNote")}
                </p>
              </ContactInfoItem>

              <ContactInfoItem
                icon={<FaEnvelope />}
                title={t("contact.info.email")}
              >
                <p>
                  <a href="mailto:peas@peas.be" className="contact-info__link">
                    peas@peas.be
                  </a>
                </p>
                <p className="contact-info__note">
                  {t("contact.info.emailNote")}
                </p>
              </ContactInfoItem>

              <ContactInfoItem
                icon={<FaClock />}
                title={t("contact.info.hours")}
              >
                <ul className="contact-hours__list">
                  <li className="contact-hours__item">
                    <span className="contact-hours__day">
                      {t("contact.info.mondayFriday")}
                    </span>
                    <span className="contact-hours__time">8:00 - 22:00</span>
                  </li>
                  <li className="contact-hours__item">
                    <span className="contact-hours__day">
                      {t("contact.info.saturday")}
                    </span>
                    <span className="contact-hours__time">9:00 - 21:00</span>
                  </li>
                  <li className="contact-hours__item">
                    <span className="contact-hours__day">
                      {t("contact.info.sunday")}
                    </span>
                    <span className="contact-hours__time">10:00 - 20:00</span>
                  </li>
                </ul>
              </ContactInfoItem>
            </div>

            <div className="contact-form-card">
              <h2 className="contact-form__title">{t("contact.form.title")}</h2>

              {isSubmitted ? (
                <ContactSuccess />
              ) : (
                <ContactForm
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
