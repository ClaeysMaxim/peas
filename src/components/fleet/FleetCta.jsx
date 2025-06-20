import React from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "../../hooks/useTranslation";

const FleetCta = () => {
  const { t } = useTranslation();

  return (
    <div className="fleet__cta">
      <h2 className="fleet__cta-title">{t("fleet.cta.title")}</h2>
      <p className="fleet__cta-text">{t("fleet.cta.text")}</p>
      <Link to="/booking" className="button">
        {t("fleet.cta.button")}
      </Link>
    </div>
  );
};

export default FleetCta;
