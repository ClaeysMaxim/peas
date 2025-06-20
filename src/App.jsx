import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./styles/main.css";

// Import pages
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import FleetPage from "./pages/FleetPage";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
