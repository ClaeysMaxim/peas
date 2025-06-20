import { Link } from "@tanstack/react-router";
import { useTranslation } from "../../hooks/useTranslation";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">{t("hero.title")}</h1>
          <p className="hero__subtitle">{t("hero.subtitle")}</p>
          <div className="hero__buttons">
            <Link
              to="/booking"
              className="button button--primary button--large"
            >
              {t("hero.bookNow")}
            </Link>
            <Link
              to="/services"
              className="button button--secondary button--large"
            >
              {t("hero.discoverService")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
