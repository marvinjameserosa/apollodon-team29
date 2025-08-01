"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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
}

interface LeafletMapProps {
  stations: Station[];
  onStationClick?: (stationId: string) => void;
  activeLayer?: string;
}

export default function LeafletMap({
  stations,
  onStationClick,
  activeLayer = "street",
}: LeafletMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const baseLayersRef = useRef<{ [key: string]: L.TileLayer }>({});
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Fix for default markers in Leaflet
    delete (L.Icon.Default.prototype as unknown as { _getIconUrl: unknown })
      ._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "/leaflet/marker-icon-2x.png",
      iconUrl: "/leaflet/marker-icon.png",
      shadowUrl: "/leaflet/marker-shadow.png",
    }); // Initialize map
    const map = L.map(mapContainerRef.current, {
      center: [1.3521, 103.8198], // Singapore coordinates
      zoom: 11,
      zoomControl: false, // Disable default zoom control
    });

    // Create base layers
    const streetLayer = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: "© OpenStreetMap contributors",
      }
    );

    const satelliteLayer = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "Tiles &copy; Esri",
      }
    );

    // Store layers in ref
    baseLayersRef.current = {
      street: streetLayer,
      satellite: satelliteLayer,
    };

    // Add initial layer
    streetLayer.addTo(map);

    // Add zoom control to bottom right to avoid conflict with search
    L.control.zoom({ position: "bottomright" }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Handle layer switching
  useEffect(() => {
    if (!mapRef.current || !baseLayersRef.current) return;

    const map = mapRef.current;
    const layers = baseLayersRef.current;

    // Remove current layers
    map.eachLayer((layer: L.Layer) => {
      if (layer instanceof L.TileLayer) {
        map.removeLayer(layer);
      }
    });

    // Add the selected layer
    if (activeLayer === "satellite" && layers.satellite) {
      layers.satellite.addTo(map);
    } else if (layers.street) {
      layers.street.addTo(map);
    }
  }, [activeLayer]);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current; // Clear existing markers
    map.eachLayer((layer: L.Layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    // Add station markers
    stations.forEach((station) => {
      const color = getStationColor(station);

      // Create custom icon
      const icon = L.divIcon({
        className: "custom-station-marker",
        html: `
          <div style="
            background-color: ${color};
            width: 32px;
            height: 32px;
            border: 3px solid white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
            font-size: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          ">${station.wqi}</div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });
      const marker = L.marker(
        [station.coordinates.lat, station.coordinates.lng],
        { icon }
      )
        .bindTooltip(
          `
          <div style="color: black; min-width: 200px;">
            <h3 style="font-weight: bold; margin-bottom: 4px; font-size: 14px;">${station.name}</h3>
            <p style="font-size: 12px; color: #666; margin-bottom: 6px;">${station.location}</p>
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px; font-size: 12px;">
              <span>WQI:</span>
              <span style="font-weight: bold; color: ${color};">${station.wqi}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px; font-size: 12px;">
              <span>Status:</span>
              <span style="text-transform: capitalize;">${station.status}</span>
            </div>
            <div style="font-size: 10px; color: #999; margin-top: 4px;">
              Updated: ${station.lastUpdate}
            </div>
            <div style="font-size: 10px; color: #0066cc; margin-top: 4px; text-align: center; font-style: italic;">
              Click to view details
            </div>
          </div>
        `,
          {
            permanent: false,
            direction: "top",
            offset: [0, -10],
            className: "custom-tooltip",
          }
        )
        .on("click", () => {
          if (onStationClick) {
            onStationClick(station.id);
          }
        });

      marker.addTo(map);
    });
    if (stations.length > 0) {
      const markers = stations.map((station) =>
        L.marker([station.coordinates.lat, station.coordinates.lng])
      );
      const group = L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.1));
    }
  }, [stations, onStationClick]);

  const getStationColor = (station: Station) => {
    if (station.status === "offline") return "#ef4444";
    if (station.wqi >= 90) return "#10b981";
    if (station.wqi >= 70) return "#3b82f6";
    if (station.wqi >= 50) return "#f59e0b";
    return "#ef4444";
  };
  return (
    <>
      <style jsx global>{`
        .custom-tooltip {
          background: white !important;
          border: 1px solid #ccc !important;
          border-radius: 8px !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
          font-family: system-ui, -apple-system, sans-serif !important;
          z-index: 1000 !important;
        }

        .custom-tooltip .leaflet-tooltip-content {
          margin: 0 !important;
          padding: 8px !important;
        }

        .custom-tooltip:before {
          border-top-color: white !important;
        }

        .leaflet-tooltip-top:before {
          border-top-color: white !important;
        }

        .leaflet-container {
          z-index: 1 !important;
        }

        .leaflet-control-container {
          z-index: 5 !important;
        }

        .leaflet-popup {
          z-index: 1000 !important;
        }
      `}</style>
      <div
        ref={mapContainerRef}
        className="h-full w-full relative"
        style={{ minHeight: "400px", zIndex: 1 }}
      />
    </>
  );
}
