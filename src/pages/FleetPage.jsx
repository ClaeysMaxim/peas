import React from "react";
import FleetItem from "../components/fleet/FleetItem";
import FleetCta from "../components/fleet/FleetCta";
import { useTranslation } from "../hooks/useTranslation";

const FleetPage = () => {
  const { t } = useTranslation();

  // Updated car data using translations
  const car = {
    id: 1,
    name: t("fleet.car.name"),
    image: "https://placehold.co/600x400/333/fff?text=Mercedes+E-Klasse",
    description: t("fleet.car.description"),
    features: [
      t("fleet.car.features.seats"),
      t("fleet.car.features.luggage"),
      t("fleet.car.features.passengers"),
    ],
  };

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">{t("fleet.pageTitle")}</h1>
          <p className="page-header__subtitle">{t("fleet.pageSubtitle")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="fleet">
            <p className="fleet__intro">{t("fleet.intro")}</p>

            <div className="fleet__single">
              <FleetItem car={car} />
            </div>
          </div>

          <FleetCta />
        </div>
      </section>
    </main>
  );
};

export default FleetPage;
