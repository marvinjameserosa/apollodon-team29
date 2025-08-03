"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type ViewType =
  | "dashboard"
  | "stations"
  | "team"
  | "reports"
  | "downloads"
  | "settings";

interface AppContextType {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [currentView, setCurrentView] = useState<ViewType>("dashboard");

  return (
    <AppContext.Provider value={{ currentView, setCurrentView }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
