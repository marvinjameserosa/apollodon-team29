"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface WaterDataItem {
  id: string;
  stationId: string;
  timestamp: string;
  wqi: number;
  ph: number;
  temperature: number;
  dissolvedOxygen: number;
  turbidity: number;
}

interface WaterDataContextType {
  waterData: WaterDataItem[];
  loading: boolean;
  error: string | null;
  fetchWaterData: () => Promise<void>;
}

const WaterDataContext = createContext<WaterDataContextType | undefined>(
  undefined
);

interface WaterDataProviderProps {
  children: ReactNode;
}

export const WaterDataProvider: React.FC<WaterDataProviderProps> = ({
  children,
}) => {
  const [waterData, setWaterData] = useState<WaterDataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWaterData = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch("/api/water-data");
      if (!response.ok) {
        throw new Error("Failed to fetch water data");
      }
      const data = await response.json();
      setWaterData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWaterData();
  }, []);

  return React.createElement(
    WaterDataContext.Provider,
    { value: { waterData, loading, error, fetchWaterData } },
    children
  );
};

export const useWaterData = (): WaterDataContextType => {
  const context = useContext(WaterDataContext);
  if (context === undefined) {
    throw new Error("useWaterData must be used within a WaterDataProvider");
  }
  return context;
};
