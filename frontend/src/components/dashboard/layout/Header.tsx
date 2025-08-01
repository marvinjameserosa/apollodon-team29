"use client";

import React, { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { useStations } from "@/contexts/StationsContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Settings,
  Gauge,
  MapPin,
  AlertTriangle,
  Activity,
  X,
  Clock,
  Zap,
} from "lucide-react";

const mockNotifications = [
  {
    id: 1,
    title: "pH Level Warning",
    message: "Industrial Park Monitor - pH below optimal range",
    time: "5 min ago",
    type: "warning",
    read: false,
  },
  {
    id: 2,
    title: "High Conductivity Alert",
    message: "Downtown Station - Conductivity exceeds threshold",
    time: "12 min ago",
    type: "critical",
    read: false,
  },
  {
    id: 3,
    title: "System Update Complete",
    message: "All sensors calibrated successfully",
    time: "1 hour ago",
    type: "info",
    read: true,
  },
];

export default function Header() {
  const { currentView, setCurrentView } = useApp();
  const { stations } = useStations();
  const [showNotifications, setShowNotifications] = useState(false);

  const selectedStation = stations.find((s) => s.id === "WS001");

  const getViewTitle = () => {
    switch (currentView) {
      case "dashboard":
        return "Dashboard";
      case "stations":
        return selectedStation?.name || "Station Management";
      case "team":
        return "Team Management";
      case "reports":
        return "Reports & Analytics";
      case "downloads":
        return "Downloads & Updates";
      case "settings":
        return "System Settings";
      default:
        return "Dashboard";
    }
  };

  const getViewDescription = () => {
    switch (currentView) {
      case "dashboard":
        return "Welcome back! Monitor your water quality network.";
      case "stations":
        return selectedStation
          ? `${selectedStation.id} • ${selectedStation.location} • ${selectedStation.description}`
          : "Focus on individual stations with data visualization, predictive modeling, and readings";
      case "team":
        return "Manage team members and access permissions";
      case "reports":
        return "Generate comprehensive water quality reports and insights";
      case "downloads":
        return "Download firmware updates, software tools, and documentation";
      case "settings":
        return "Configure system preferences and monitoring parameters";
      default:
        return "Real-time water quality monitoring system";
    }
  };

  const getWQIColor = (wqi: number) => {
    if (wqi >= 90) return "text-emerald-400";
    if (wqi >= 70) return "text-blue-400";
    if (wqi >= 50) return "text-amber-400";
    return "text-red-400";
  };

  const handleSettingsClick = () => {
    setCurrentView("settings");
  };

  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertTriangle className="h-4 w-4 text-red-400" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-amber-400" />;
      case "info":
        return <Zap className="h-4 w-4 text-cyan-400" />;
      default:
        return <Clock className="h-4 w-4 text-slate-400" />;
    }
  };
  return (
    <>
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700 p-4 sm:p-6">
        <div className="flex items-start sm:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
              <h1 className="text-xl sm:text-2xl font-bold text-white truncate">
                {getViewTitle()}
              </h1>

              {currentView === "stations" && selectedStation && (
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    className={`${getWQIColor(
                      selectedStation.wqi
                    )} bg-slate-800 border-slate-600 text-xs`}
                  >
                    <Gauge className="h-3 w-3 mr-1" />
                    WQI: {selectedStation.wqi}
                  </Badge>
                  <Badge
                    className={`text-xs ${
                      selectedStation.status === "online"
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-400 border-amber-500/30"
                    }`}
                  >
                    <Activity className="h-3 w-3 mr-1" />
                    {selectedStation.health}
                  </Badge>
                  {selectedStation.alerts > 0 && (
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      {selectedStation.alerts} Alert
                      {selectedStation.alerts > 1 ? "s" : ""}
                    </Badge>
                  )}
                </div>
              )}

              {currentView === "dashboard" && (
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-slate-800 border-slate-600 text-slate-300 text-xs">
                    <MapPin className="h-3 w-3 mr-1" />
                    {stations.length} Stations
                  </Badge>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs">
                    <Activity className="h-3 w-3 mr-1" />
                    {stations.filter((s) => s.status === "online").length}{" "}
                    Online
                  </Badge>
                  {stations.some((s) => s.alerts > 0) && (
                    <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 text-xs">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      {stations.reduce((sum, s) => sum + s.alerts, 0)} Alerts
                    </Badge>
                  )}
                </div>
              )}
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-full sm:max-w-2xl">
              {getViewDescription()}
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-slate-300 text-sm font-medium">
                System Online
              </span>
            </div>

            <div className="relative">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setShowNotifications(!showNotifications)}
                className="text-slate-400 hover:text-white hover:bg-slate-800 relative"
              >
                <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
                {unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {unreadCount}
                    </span>
                  </div>
                )}
              </Button>
            </div>

            <Button
              size="icon"
              variant="ghost"
              onClick={handleSettingsClick}
              className="text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>

        {currentView === "stations" && selectedStation && (
          <div className="mt-4 pt-4 border-t border-slate-700">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Last Update:</span>
                  <span className="text-white font-medium">
                    {selectedStation.lastUpdate}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Next Maintenance:</span>
                  <span className="text-white font-medium">
                    {selectedStation.nextMaintenance}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Install Date:</span>
                  <span className="text-white font-medium">
                    {selectedStation.installDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Notification Portal - Renders outside header, at document level */}
      {showNotifications && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          <div
            className="absolute inset-0 bg-black/20 pointer-events-auto"
            onClick={() => setShowNotifications(false)}
          />
          <div className="absolute right-4 top-20 w-80 sm:w-96 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl pointer-events-auto">
            <div className="p-4 border-b border-slate-700 flex items-center justify-between">
              <h3 className="text-white font-semibold">Notifications</h3>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setShowNotifications(false)}
                className="text-slate-400 hover:text-white h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {mockNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-slate-700 last:border-b-0 hover:bg-slate-800 transition-colors ${
                    !notification.read ? "bg-slate-800/50" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">
                        {notification.title}
                      </p>
                      <p className="text-slate-400 text-xs mt-1">
                        {notification.message}
                      </p>
                      <p className="text-slate-500 text-xs mt-2">
                        {notification.time}
                      </p>
                    </div>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0 mt-1"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-slate-700">
              <Button
                variant="ghost"
                className="w-full text-slate-400 hover:text-white text-sm"
              >
                View All Notifications
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
