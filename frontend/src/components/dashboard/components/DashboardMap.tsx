"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X, Layers } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import dynamic from "next/dynamic";

// Dynamically import LeafletMap to prevent SSR issues
const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-slate-800 rounded-xl border border-slate-600 flex items-center justify-center">
      <div className="text-slate-400">Loading map...</div>
    </div>
  ),
});

interface Station {
  id: string;
  name: string;
  location: string;
  coordinates: { lat: number; lng: number };
  status: string;
  wqi: number;
  lastUpdate: string;
  alerts: number;
  health: string;
  parameters: {
    ph: { value: number; status: string; unit: string };
    temperature: { value: number; status: string; unit: string };
    dissolvedOxygen: { value: number; status: string; unit: string };
    turbidity: { value: number; status: string; unit: string };
  };
}

interface DashboardMapProps {
  stations: Station[];
  onStationClick?: (stationId: string) => void;
  className?: string;
}

export default function DashboardMap({
  stations,
  onStationClick,
  className = "",
}: DashboardMapProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStations, setFilteredStations] = useState(stations);
  const [showLayers, setShowLayers] = useState(false);
  const [activeLayer, setActiveLayer] = useState("street");
  const { setCurrentView } = useApp();
  useEffect(() => {
    if (searchTerm) {
      const filtered = stations.filter((station) => {
        const searchLower = searchTerm.toLowerCase();
        return (
          station.name.toLowerCase().includes(searchLower) ||
          station.location.toLowerCase().includes(searchLower) ||
          station.id.toLowerCase().includes(searchLower) ||
          station.status.toLowerCase().includes(searchLower) ||
          station.health.toLowerCase().includes(searchLower) ||
          station.wqi.toString().includes(searchLower) ||
          // Search in parameters
          Object.values(station.parameters).some(
            (param) =>
              param.status.toLowerCase().includes(searchLower) ||
              param.value.toString().includes(searchLower)
          )
        );
      });
      setFilteredStations(filtered);
    } else {
      setFilteredStations(stations);
    }
  }, [searchTerm, stations]);

  const handleStationClick = (stationId: string) => {
    // Navigate to stations view for detailed information
    setCurrentView("stations");
    if (onStationClick) {
      onStationClick(stationId);
    }
  };
  return (
    <div className={`relative h-full w-full ${className}`}>
      {/* Search Control - moved to bottom left */}
      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-50 bg-slate-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-600 p-3 sm:p-4 min-w-[280px] sm:min-w-[320px]">
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          <Search className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
          <Input
            type="text"
            placeholder="Search stations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-slate-700 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded border border-slate-600 focus:border-cyan-400 focus:outline-none"
          />
          {searchTerm && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setSearchTerm("")}
              className="text-slate-400 hover:text-white text-xs p-1 h-6 w-6"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>

        {/* Search Results Info */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>
            {searchTerm
              ? `Found ${filteredStations.length}`
              : `${stations.length} stations`}
          </span>
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-xs">Good</span>
            <div className="w-2 h-2 bg-amber-500 rounded-full ml-1 sm:ml-2"></div>
            <span className="text-xs">Fair</span>
            <div className="w-2 h-2 bg-red-500 rounded-full ml-1 sm:ml-2"></div>
            <span className="text-xs">Poor</span>
          </div>
        </div>
      </div>{" "}
      {/* Layer Control */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-50">
        <Button
          onClick={() => setShowLayers(!showLayers)}
          className="bg-slate-800/95 backdrop-blur-sm border border-slate-600 text-white hover:bg-slate-700 p-2 sm:p-3"
        >
          <Layers className="h-4 w-4" />
        </Button>{" "}
        {showLayers && (
          <div className="absolute top-full right-0 mt-2 bg-slate-800/95 backdrop-blur-sm border border-slate-600 rounded-lg p-3 min-w-[200px] z-50">
            <div className="space-y-2">
              <div className="text-white text-sm font-medium mb-2">
                Map Layers
              </div>
              {["street", "satellite"].map((layer) => (
                <label
                  key={layer}
                  className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="layer"
                    value={layer}
                    checked={activeLayer === layer}
                    onChange={(e) => setActiveLayer(e.target.value)}
                    className="accent-cyan-400"
                  />
                  <span className="capitalize">{layer}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>{" "}
      {/* Map Container */}
      <div className="h-full w-full bg-slate-800 rounded-xl sm:rounded-2xl border border-slate-600 relative overflow-hidden">
        <LeafletMap
          stations={filteredStations}
          onStationClick={handleStationClick}
          activeLayer={activeLayer}
        />
      </div>
    </div>
  );
}
