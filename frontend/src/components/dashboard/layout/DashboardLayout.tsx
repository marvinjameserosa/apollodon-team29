"use client";

import React from "react";
import { useApp } from "@/contexts/AppContext";
import { StationsProvider } from "@/contexts/StationsContext";
import Sidebar from "@/components/dashboard/layout/Sidebar";
import Header from "@/components/dashboard/layout/Header";
import Background from "@/components/dashboard/layout/Background";
import DashboardView from "@/components/dashboard/views/DashboardView";
import StationsView from "@/components/dashboard/views/StationsView";
import TeamView from "@/components/dashboard/views/TeamView";
import ReportsView from "@/components/dashboard/views/ReportsView";
import DownloadsView from "@/components/dashboard/views/DownloadsView";
import SettingsView from "@/components/dashboard/views/SettingsView";

const views = {
  dashboard: <DashboardView />,
  stations: <StationsView />,
  team: <TeamView />,
  reports: <ReportsView />,
  downloads: <DownloadsView />,
  settings: <SettingsView />,
};

export default function DashboardLayout() {
  const { currentView } = useApp();

  return (
    <StationsProvider>
      <div className="min-h-screen bg-black relative overflow-hidden">
        <Background />
        <div className="relative z-10 flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <div className="flex-1 p-6 overflow-auto">{views[currentView]}</div>
          </div>
        </div>
      </div>
    </StationsProvider>
  );
}
