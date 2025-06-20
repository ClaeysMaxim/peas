import { Link } from "@tanstack/react-router";
import { FaPlane, FaCarAlt, FaUsers } from "react-icons/fa";
import { useTranslation } from "../../hooks/useTranslation";

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title section__title--centered">
          {t("services.pageTitle")}
        </h2>
        <p className="section__subtitle section__subtitle--centered">
          {t("services.pageSubtitle")}
        </p>

        <div className="services">
          <div className="service-card">
            <div className="service-card__icon">
              <FaPlane />
            </div>
            <h3 className="service-card__title">
              {t("services.airport.title")}
            </h3>
            <p className="service-card__text">{t("services.airport.text1")}</p>
            <Link to="/services" className="link-arrow">
              {t("common.moreInfo")}
            </Link>
          </div>

          <div className="service-card">
            <div className="service-card__icon">
              <FaCarAlt />
            </div>
            <h3 className="service-card__title">
              {t("services.limousine.title")}
            </h3>
            <p className="service-card__text">
              {t("services.limousine.text1")}
            </p>
            <Link to="/services" className="link-arrow">
              {t("common.moreInfo")}
            </Link>
          </div>

          <div className="service-card">
            <div className="service-card__icon">
              <FaUsers />
            </div>
            <h3 className="service-card__title">
              {t("services.business.title")}
            </h3>
            <p className="service-card__text">{t("services.business.text1")}</p>
            <Link to="/services" className="link-arrow">
              {t("common.moreInfo")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
