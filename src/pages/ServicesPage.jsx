import React from "react";
import ServiceBlock from "../components/services/ServiceBlock";
import ServiceFeature from "../components/services/ServiceFeature";
import ServicesCta from "../components/services/ServicesCta";
import { useTranslation } from "../hooks/useTranslation";

const ServicesPage = () => {
  const { t } = useTranslation();

  // Service blocks data using translations
  const serviceBlocksData = [
    {
      icon: "✈️",
      title: t("services.airport.title"),
      texts: [t("services.airport.text1"), t("services.airport.text2")],
    },
    {
      icon: "🚗",
      title: t("services.limousine.title"),
      texts: [t("services.limousine.text1"), t("services.limousine.text2")],
    },
    {
      icon: "🚐",
      title: t("services.business.title"),
      texts: [t("services.business.text1"), t("services.business.text2")],
    },
    {
      icon: "🌍",
      title: t("services.longDistance.title"),
      texts: [
        t("services.longDistance.text1"),
        t("services.longDistance.text2"),
      ],
    },
  ];

  // Service features data using translations
  const featuresData = [
    {
      title: t("services.features.reliability.title"),
      text: t("services.features.reliability.text"),
    },
    {
      title: t("services.features.comfort.title"),
      text: t("services.features.comfort.text"),
    },
    {
      title: t("services.features.experience.title"),
      text: t("services.features.experience.text"),
    },
    {
      title: t("services.features.safety.title"),
      text: t("services.features.safety.text"),
    },
    {
      title: t("services.features.personal.title"),
      text: t("services.features.personal.text"),
    },
  ];

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">{t("services.pageTitle")}</h1>
          <p className="page-header__subtitle">{t("services.pageSubtitle")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-intro">
            <p className="services-intro__text">{t("services.intro")}</p>
          </div>

          <div className="service-blocks">
            {serviceBlocksData.map((block, index) => (
              <ServiceBlock
                key={index}
                icon={block.icon}
                title={block.title}
                texts={block.texts}
              />
            ))}
          </div>

          <div className="service-why">
            <h2 className="service-why__title">{t("services.whyChoose")}</h2>

            <div className="service-features">
              {featuresData.map((feature, index) => (
                <ServiceFeature
                  key={index}
                  title={feature.title}
                  text={feature.text}
                />
              ))}
            </div>
          </div>

          <ServicesCta />
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
