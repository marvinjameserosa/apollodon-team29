import React from "react";
import type { Metadata } from "next";
import { AppProvider } from "@/contexts/AppContext";
import { StationsProvider } from "@/contexts/StationsContext";
import { TeamProvider } from "@/contexts/TeamContext";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

export const metadata: Metadata = {
  title: "Dashboard | Apollodon",
  description: "The swiss army knife for water quality monitoring.",
};

export default function WaterMonitoringDashboard() {
  return (
    <div className="relative">
      <AppProvider>
        <StationsProvider>
          <TeamProvider>
            <DashboardLayout />
          </TeamProvider>
        </StationsProvider>
      </AppProvider>
    </div>
  );
}
