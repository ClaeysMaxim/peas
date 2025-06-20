import { FaStar, FaClock, FaShieldAlt } from "react-icons/fa";
import { useTranslation } from "../../hooks/useTranslation";

const FeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="features">
      <div className="container">
        <h2 className="section__title section__title--centered">
          {t("features.title")}
        </h2>

        <div className="features__grid">
          <div className="feature">
            <div className="feature__icon">
              <FaStar />
            </div>
            <h3 className="feature__title">{t("features.premium.title")}</h3>
            <p className="feature__text">{t("features.premium.text")}</p>
          </div>

          <div className="feature">
            <div className="feature__icon">
              <FaClock />
            </div>
            <h3 className="feature__title">{t("features.punctual.title")}</h3>
            <p className="feature__text">{t("features.punctual.text")}</p>
          </div>

          <div className="feature">
            <div className="feature__icon">
              <FaShieldAlt />
            </div>
            <h3 className="feature__title">{t("features.safety.title")}</h3>
            <p className="feature__text">{t("features.safety.text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
