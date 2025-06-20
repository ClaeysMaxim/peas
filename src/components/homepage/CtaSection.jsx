import { Link } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";

const CtaSection = () => {
  const { t } = useTranslation();

  return (
    <section className="cta">
      <div className="container">
        <div className="cta__content">
          <h2 className="cta__title">{t("cta.title")}</h2>
          <p className="cta__text">{t("cta.text")}</p>
          <Link to="/booking" className="button button--primary button--large">
            {t("cta.button")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
