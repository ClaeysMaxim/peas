import { useTranslation } from "../../hooks/useTranslation";

const ExperienceBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="experience-banner">
      <div className="container">
        <div className="experience-banner__content">
          <p className="experience-banner__text">{t("experience.banner")}</p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceBanner;
