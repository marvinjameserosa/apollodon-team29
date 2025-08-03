"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { stations } from "@/components/mock";

export interface Station {
  id: string;
  name: string;
  location: string;
  coordinates: { lat: number; lng: number };
  status: string;
  lastUpdate: string;
  wqi: number;
  health: string;
  parameters: Record<
    string,
    {
      value: number;
      status: string;
      unit: string;
      threshold: { min: number; max: number };
    }
  >;
  alerts: number;
  description: string;
  installDate: string;
  lastMaintenance: string;
  nextMaintenance: string;
  calibration: {
    lastCalibrated: string;
    nextCalibration: string;
    status: string;
  };
}

interface StationsContextType {
  stations: Station[];
}

const StationsContext = createContext<StationsContextType>({
  stations: [],
});

export const useStations = () => {
  return useContext(StationsContext);
};

interface StationsProviderProps {
  children: ReactNode;
}

export function StationsProvider({ children }: StationsProviderProps) {
  return (
    <StationsContext.Provider value={{ stations: stations as Station[] }}>
      {children}
    </StationsContext.Provider>
  );
}
