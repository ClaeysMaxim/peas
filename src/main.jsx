import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Verander naar HashRouter
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter> {/* Geen basename meer nodig */}
      <App />
    </HashRouter>
  </StrictMode>
);
