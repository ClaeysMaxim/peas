import React from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "../../hooks/useTranslation";

const ServicesCta = () => {
  const { t } = useTranslation();

  return (
    <div className="services-cta">
      <h2 className="services-cta__title">{t("cta.title")}</h2>
      <p className="services-cta__text">{t("cta.text")}</p>
      <div className="services-cta__buttons">
        <Link to="/booking" className="button">
          {t("cta.button")}
        </Link>
        <Link to="/contact" className="button button--outline">
          {t("header.contact")}
        </Link>
      </div>
    </div>
  );
};

export default ServicesCta;
