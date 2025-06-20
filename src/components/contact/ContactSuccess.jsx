import React from "react";
import { useTranslation } from "../../hooks/useTranslation";

const ContactSuccess = () => {
  const { t } = useTranslation();

  return (
    <div className="form-success">
      <div className="form-success__icon">✓</div>
      <h3 className="form-success__title">{t("contact.form.success.title")}</h3>
      <p className="form-success__message">
        {t("contact.form.success.message")}
      </p>
    </div>
  );
};

export default ContactSuccess;
