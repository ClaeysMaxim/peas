import { createFileRoute } from "@tanstack/react-router";
import FleetPage from "../pages/FleetPage";

export const Route = createFileRoute("/fleet")({
  component: FleetPage,
});

