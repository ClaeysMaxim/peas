import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { LanguageProvider } from "../contexts/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingExperienceBadge from "../components/FloatingExperienceBadge";
import "../styles/main.css";

export const Route = createRootRoute({
  component: () => (
    <LanguageProvider>
      <Header />
      <Outlet />
      <Footer />
      <FloatingExperienceBadge />
      <TanStackRouterDevtools />
    </LanguageProvider>
  ),
});
