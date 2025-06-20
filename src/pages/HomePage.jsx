import HeroSection from "../components/homepage/HeroSection";
import ExperienceBanner from "../components/homepage/ExperienceBanner";
import ServicesSection from "../components/homepage/ServicesSection";
import FeaturesSection from "../components/homepage/FeaturesSection";
import CtaSection from "../components/homepage/CtaSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ExperienceBanner />
      <ServicesSection />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
};

export default HomePage;
