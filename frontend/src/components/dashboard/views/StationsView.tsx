"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertTriangle,
  Gauge,
  Calendar,
  Wifi,
  WifiOff,
  TestTube,
  Database,
  Filter,
  Download,
  RefreshCw,
  Eye,
  Edit,
  ChevronDown,
  Check,
  X,
  LineChart,
  Brain,
  TrendingUp,
  TrendingDown,
  BarChart,
  ChevronLeft,
  ChevronRight,
  Settings,
  Save,
  Target,
  Wrench,
} from "lucide-react";
import {
  stations,
  historicalReadings,
  predictiveData,
} from "@/components/mock";

export default function StationsView() {
  const [selectedStationId, setSelectedStationId] = useState("WS001");
  const [stationSelectorOpen, setStationSelectorOpen] = useState(false);
  const [readingsFilter, setReadingsFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showManageStation, setShowManageStation] = useState(false);
  const itemsPerPage = 10;

  const selectedStation = stations.find((s) => s.id === selectedStationId);

  const filteredReadings = useMemo(() => {
    const stationReadings = historicalReadings.filter(
      (r) => r.stationId === selectedStationId
    );

    const filtered = stationReadings.filter((reading) => {
      if (!readingsFilter) return true;

      const searchTerm = readingsFilter.toLowerCase();
      return (
        reading.timestamp.toLowerCase().includes(searchTerm) ||
        reading.ph.toString().includes(searchTerm) ||
        reading.temperature.toString().includes(searchTerm) ||
        reading.wqi.toString().includes(searchTerm)
      );
    });

    return filtered.sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  }, [selectedStationId, readingsFilter]);

  const paginatedReadings = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredReadings.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredReadings, currentPage]);

  const totalPages = Math.ceil(filteredReadings.length / itemsPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-emerald-500";
      case "warning":
        return "bg-amber-500";
      case "offline":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getWQIColor = (wqi: number) => {
    if (wqi >= 90) return "text-emerald-400";
    if (wqi >= 70) return "text-blue-400";
    if (wqi >= 50) return "text-amber-400";
    return "text-red-400";
  };

  const getParameterStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "text-emerald-400";
      case "warning":
        return "text-amber-400";
      case "high":
      case "low":
        return "text-red-400";
      default:
        return "text-slate-400";
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "increasing":
        return "text-emerald-400";
      case "decreasing":
        return "text-red-400";
      case "stable":
        return "text-blue-400";
      default:
        return "text-slate-400";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "increasing":
        return <TrendingUp className="h-4 w-4" />;
      case "decreasing":
        return <TrendingDown className="h-4 w-4" />;
      case "stable":
        return <BarChart className="h-4 w-4" />;
      default:
        return <BarChart className="h-4 w-4" />;
    }
  };
  const renderManageStationDialog = () => (
    <Dialog open={showManageStation} onOpenChange={setShowManageStation}>
      <DialogContent className="w-[95vw] max-w-4xl bg-slate-900 border-slate-700 text-white max-h-[90vh] overflow-y-auto mx-auto">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Wrench className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
            Manage Station - {selectedStation?.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6">
          {/* Station Info */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="p-3 sm:p-4 lg:p-6">
              <CardTitle className="text-white text-sm sm:text-base lg:text-lg">
                Station Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 lg:p-6 pt-0 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label className="text-slate-300 text-xs sm:text-sm lg:text-base">
                    Station ID
                  </Label>
                  <Input
                    defaultValue={selectedStation?.id}
                    className="mt-1 sm:mt-2 bg-slate-700 border-slate-600 text-white text-xs sm:text-sm lg:text-base"
                  />
                </div>
                <div>
                  <Label className="text-slate-300 text-xs sm:text-sm lg:text-base">
                    Station Name
                  </Label>
                  <Input
                    defaultValue={selectedStation?.name}
                    className="mt-1 sm:mt-2 bg-slate-700 border-slate-600 text-white text-xs sm:text-sm lg:text-base"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label className="text-slate-300 text-xs sm:text-sm lg:text-base">
                    Location
                  </Label>
                  <Input
                    defaultValue={selectedStation?.location}
                    className="mt-1 sm:mt-2 bg-slate-700 border-slate-600 text-white text-xs sm:text-sm lg:text-base"
                  />
                </div>
                <div>
                  <Label className="text-slate-300 text-xs sm:text-sm lg:text-base">
                    Install Date
                  </Label>
                  <Input
                    defaultValue={selectedStation?.installDate}
                    className="mt-1 sm:mt-2 bg-slate-700 border-slate-600 text-white text-xs sm:text-sm lg:text-base"
                  />
                </div>
              </div>
              <div>
                <Label className="text-slate-300 text-xs sm:text-sm lg:text-base">
                  Description
                </Label>
                <Textarea
                  defaultValue={selectedStation?.description}
                  className="mt-1 sm:mt-2 bg-slate-700 border-slate-600 text-white text-xs sm:text-sm lg:text-base"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Parameter Configuration */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="p-3 sm:p-4 lg:p-6">
              <CardTitle className="text-white text-sm sm:text-base lg:text-lg flex items-center gap-2">
                <Settings className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-cyan-400" />
                Parameter Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
              <div className="space-y-3 sm:space-y-4">
                {selectedStation &&
                  Object.entries(selectedStation.parameters).map(
                    ([key, param]) => (
                      <div
                        key={key}
                        className="bg-slate-700 rounded-lg p-3 sm:p-4"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3">
                          <h3 className="text-white font-medium capitalize text-xs sm:text-sm lg:text-base">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </h3>
                          <Badge
                            className={`${getParameterStatusColor(
                              param.status
                            )} bg-slate-800 text-xs sm:text-sm self-start sm:self-auto`}
                          >
                            {param.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                          <div>
                            <Label className="text-slate-400 text-xs sm:text-sm">
                              Current Value
                            </Label>
                            <Input
                              defaultValue={param.value}
                              className="mt-1 bg-slate-600 border-slate-500 text-white text-xs sm:text-sm"
                            />
                          </div>
                          <div>
                            <Label className="text-slate-400 text-xs sm:text-sm">
                              Min Threshold
                            </Label>
                            <Input
                              defaultValue={param.threshold.min}
                              className="mt-1 bg-slate-600 border-slate-500 text-white text-xs sm:text-sm"
                            />
                          </div>
                          <div>
                            <Label className="text-slate-400 text-xs sm:text-sm">
                              Max Threshold
                            </Label>
                            <Input
                              defaultValue={param.threshold.max}
                              className="mt-1 bg-slate-600 border-slate-500 text-white text-xs sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    )
                  )}
              </div>
            </CardContent>
          </Card>

          {/* Calibration Settings */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="p-3 sm:p-4 lg:p-6">
              <CardTitle className="text-white text-sm sm:text-base lg:text-lg flex items-center gap-2">
                <Target className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-cyan-400" />
                Calibration Management
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 lg:p-6 pt-0 space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label className="text-slate-300 text-xs sm:text-sm lg:text-base">
                    Last Calibrated
                  </Label>
                  <Input
                    defaultValue={selectedStation?.calibration.lastCalibrated}
                    className="mt-1 sm:mt-2 bg-slate-700 border-slate-600 text-white text-xs sm:text-sm lg:text-base"
                  />
                </div>
                <div>
                  <Label className="text-slate-300 text-xs sm:text-sm lg:text-base">
                    Next Calibration
                  </Label>
                  <Input
                    defaultValue={selectedStation?.calibration.nextCalibration}
                    className="mt-1 sm:mt-2 bg-slate-700 border-slate-600 text-white text-xs sm:text-sm lg:text-base"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <div>
                  <Label className="text-slate-300 text-xs sm:text-sm lg:text-base">
                    Calibration Status
                  </Label>
                  <Badge
                    className={`ml-0 sm:ml-2 mt-1 sm:mt-0 ${
                      selectedStation?.calibration.status === "calibrated"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-amber-500/20 text-amber-400"
                    } text-xs sm:text-sm`}
                  >
                    {selectedStation?.calibration.status.replace("_", " ")}
                  </Badge>
                </div>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs sm:text-sm lg:text-base self-start sm:self-auto">
                  <Target className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Run Calibration
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3">
            <Button
              variant="outline"
              onClick={() => setShowManageStation(false)}
              className="border-slate-600 text-slate-300 text-xs sm:text-sm lg:text-base"
            >
              Cancel
            </Button>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs sm:text-sm lg:text-base">
              <Save className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  if (!selectedStation) return null;

  const predictions =
    predictiveData[selectedStationId as keyof typeof predictiveData];
  return (
    <div className="w-full min-w-0 space-y-4 sm:space-y-6 p-3 sm:p-4 lg:p-6">
      {/* Station Selector */}
      <div className="w-full flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3 sm:gap-4">
        <div className="w-full xl:w-auto min-w-0">
          <Popover
            open={stationSelectorOpen}
            onOpenChange={setStationSelectorOpen}
          >
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={stationSelectorOpen}
                className="w-full xl:w-80 justify-between bg-slate-800 border-slate-600 text-white hover:bg-slate-700 text-sm sm:text-base min-w-0 h-12 sm:h-auto"
              >
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  <div
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full flex-shrink-0 ${getStatusColor(
                      selectedStation.status
                    )}`}
                  />
                  <span className="truncate text-xs sm:text-sm">
                    {selectedStation.name}
                  </span>
                  <Badge
                    className={`${getWQIColor(
                      selectedStation.wqi
                    )} bg-slate-700 text-xs flex-shrink-0 px-1 sm:px-2`}
                  >
                    WQI: {selectedStation.wqi}
                  </Badge>
                </div>
                <ChevronDown className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>{" "}
            <PopoverContent className="w-[calc(100vw-2rem)] max-w-sm sm:w-80 p-0 bg-slate-800 border-slate-600">
              <Command className="bg-slate-800">
                <CommandInput
                  placeholder="Search stations..."
                  className="text-white text-sm"
                />
                <CommandList className="max-h-60">
                  <CommandEmpty>No station found.</CommandEmpty>
                  <CommandGroup>
                    {stations.map((station) => (
                      <CommandItem
                        key={station.id}
                        value={station.id}
                        onSelect={(currentValue) => {
                          setSelectedStationId(currentValue);
                          setStationSelectorOpen(false);
                          setCurrentPage(1);
                        }}
                        className="text-white hover:bg-slate-700 p-2 sm:p-3"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 w-full min-w-0">
                          <div
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full flex-shrink-0 ${getStatusColor(
                              station.status
                            )}`}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium truncate text-sm">
                              {station.name}
                            </div>
                            <div className="text-xs text-slate-400 truncate">
                              {station.location}
                            </div>
                          </div>
                          <Badge
                            className={`${getWQIColor(
                              station.wqi
                            )} bg-slate-700 text-xs flex-shrink-0`}
                          >
                            {station.wqi}
                          </Badge>
                          <Check
                            className={`h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 ${
                              selectedStationId === station.id
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                          />
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>{" "}
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 w-full lg:w-auto">
          <Badge
            className={`${getWQIColor(
              selectedStation.wqi
            )} bg-slate-800 border-slate-600 text-xs sm:text-sm`}
          >
            WQI: {selectedStation.wqi}
          </Badge>
          <Badge
            className={`text-xs sm:text-sm ${
              selectedStation.status === "online"
                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                : "bg-amber-500/20 text-amber-400 border-amber-500/30"
            }`}
          >
            {selectedStation.health}
          </Badge>
          <Button
            onClick={() => setShowManageStation(true)}
            className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs sm:text-sm w-full sm:w-auto"
          >
            <Wrench className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Manage Station
          </Button>
        </div>
      </div>
      {/* Station Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  Current WQI
                </p>
                <p
                  className={`text-2xl sm:text-3xl font-bold mt-1 ${getWQIColor(
                    selectedStation.wqi
                  )}`}
                >
                  {selectedStation.wqi}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  {selectedStation.health}
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 ml-3">
                <Gauge className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  Status
                </p>
                <p className="text-xl sm:text-2xl font-bold text-white mt-1 capitalize">
                  {selectedStation.status}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Updated {selectedStation.lastUpdate}
                </p>
              </div>
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 ml-3 ${
                  selectedStation.status === "online"
                    ? "bg-emerald-500"
                    : "bg-amber-500"
                }`}
              >
                {selectedStation.status === "online" ? (
                  <Wifi className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                ) : (
                  <WifiOff className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  Active Alerts
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-amber-400 mt-1">
                  {selectedStation.alerts}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Current issues
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 ml-3">
                <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  Next Maintenance
                </p>
                <p className="text-base sm:text-lg font-bold text-white mt-1">
                  {selectedStation.nextMaintenance}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Scheduled
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 ml-3">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Data Visualization */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        {/* Parameter Trends */}
        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
              <LineChart className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              Parameter Trends (Last 24h)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="h-48 sm:h-64 relative">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 200"
                className="overflow-visible"
              >
                <defs>
                  <pattern
                    id="station-grid"
                    width="40"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 20"
                      fill="none"
                      stroke="rgb(71 85 105)"
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#station-grid)" />

                <polyline
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  points="50,150 100,140 150,145 200,135 250,130 300,125"
                />
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  points="50,120 100,115 150,110 200,105 250,100 300,95"
                />
                <polyline
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  points="50,80 100,85 150,90 200,88 250,92 300,95"
                />

                <circle cx="50" cy="150" r="3" fill="#06b6d4" />
                <circle cx="100" cy="140" r="3" fill="#06b6d4" />
                <circle cx="150" cy="145" r="3" fill="#06b6d4" />
                <circle cx="200" cy="135" r="3" fill="#06b6d4" />
                <circle cx="250" cy="130" r="3" fill="#06b6d4" />
                <circle cx="300" cy="125" r="3" fill="#06b6d4" />
              </svg>

              <div className="absolute top-4 right-4 bg-slate-800 rounded-lg p-2 sm:p-3 space-y-1 sm:space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-slate-300 text-xs sm:text-sm">pH</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-300 text-xs sm:text-sm">DO</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-300 text-xs sm:text-sm">
                    Temp
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Predictive Analysis */}
        {predictions && (
          <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
                <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                AI Predictions & Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="space-y-3 sm:space-y-4">
                {Object.entries(predictions).map(([param, data]) => (
                  <div
                    key={param}
                    className="bg-slate-800 rounded-lg p-3 sm:p-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3">
                      <h3 className="text-white font-semibold capitalize text-sm sm:text-base">
                        {param === "wqi"
                          ? "WQI"
                          : param.replace(/([A-Z])/g, " $1").trim()}
                      </h3>
                      <div
                        className={`flex items-center gap-2 ${getTrendColor(
                          data.trend
                        )} self-start sm:self-auto`}
                      >
                        {getTrendIcon(data.trend)}
                        <span className="text-xs sm:text-sm font-medium">
                          {data.confidence}% confidence
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-white">
                          {data.current} → {data.predicted}
                        </div>
                        <div className="text-slate-400 text-xs sm:text-sm">
                          24-hour forecast
                        </div>
                      </div>
                      <div
                        className={`text-base sm:text-lg font-semibold ${getTrendColor(
                          data.trend
                        )} self-start sm:self-auto`}
                      >
                        {data.trend}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      {/* Parameter Analysis */}
      <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
            <TestTube className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
            Parameter Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(selectedStation.parameters).map(([key, param]) => (
              <div
                key={key}
                className="bg-slate-800 rounded-lg sm:rounded-xl p-3 sm:p-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3">
                  <h3 className="text-white font-semibold capitalize text-sm sm:text-base">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  <Badge
                    className={`text-xs sm:text-sm self-start sm:self-auto ${
                      param.status === "normal"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : param.status === "warning"
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {param.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-xs sm:text-sm">
                      Current
                    </span>
                    <span
                      className={`font-semibold text-sm sm:text-base ${getParameterStatusColor(
                        param.status
                      )}`}
                    >
                      {param.value} {param.unit}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-xs sm:text-sm">
                      Range
                    </span>
                    <span className="text-slate-300 text-xs sm:text-sm">
                      {param.threshold.min} - {param.threshold.max} {param.unit}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                    <div
                      className={`h-2 rounded-full ${
                        param.status === "normal"
                          ? "bg-emerald-500"
                          : param.status === "warning"
                          ? "bg-amber-500"
                          : "bg-red-500"
                      }`}
                      style={{
                        width: `${Math.min(
                          100,
                          ((param.value - param.threshold.min) /
                            (param.threshold.max - param.threshold.min)) *
                            100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      {/* Station Readings Table with Pagination */}
      <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
        <CardHeader className="p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
              <Database className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              Recent Readings ({filteredReadings.length} total)
            </CardTitle>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <div className="relative w-full sm:w-auto">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-3 w-3 sm:h-4 sm:w-4" />
                <Input
                  placeholder="Filter readings..."
                  value={readingsFilter}
                  onChange={(e) => {
                    setReadingsFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-8 sm:pl-10 w-full sm:w-64 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 text-sm sm:text-base"
                />
              </div>
              {readingsFilter && (
                <Button
                  onClick={() => {
                    setReadingsFilter("");
                    setCurrentPage(1);
                  }}
                  size="sm"
                  variant="ghost"
                  className="text-slate-400 hover:text-white self-start sm:self-auto"
                >
                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              )}
              <div className="flex gap-2 w-full sm:w-auto">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-600 text-slate-300 bg-transparent text-xs sm:text-sm flex-1 sm:flex-none"
                >
                  <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Export
                </Button>
                <Button
                  size="sm"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs sm:text-sm flex-1 sm:flex-none"
                >
                  <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Refresh
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>{" "}
        <CardContent className="p-4 sm:p-6 pt-0">
          {/* Mobile Card View for Small Screens */}
          <div className="block sm:hidden space-y-3">
            {paginatedReadings.length > 0 ? (
              paginatedReadings.map((reading) => (
                <div
                  key={reading.id}
                  className="bg-slate-800 rounded-lg p-4 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-xs">Timestamp</span>
                    <span className="text-slate-300 text-xs">
                      {new Date(reading.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-xs">pH:</span>
                      <span className="text-white text-xs font-medium">
                        {reading.ph.toFixed(1)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-xs">Temp:</span>
                      <span className="text-white text-xs font-medium">
                        {reading.temperature.toFixed(1)}°C
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-xs">DO:</span>
                      <span className="text-white text-xs font-medium">
                        {reading.dissolvedOxygen.toFixed(1)} mg/L
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-xs">Turbidity:</span>
                      <span className="text-white text-xs font-medium">
                        {reading.turbidity.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 text-xs">WQI:</span>
                      <span
                        className={`font-semibold text-sm ${getWQIColor(
                          reading.wqi
                        )}`}
                      >
                        {reading.wqi}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-slate-400 hover:text-white p-1 h-6 w-6"
                      >
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-slate-400 hover:text-white p-1 h-6 w-6"
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-slate-400 py-8 text-sm">
                No readings found for this station
              </div>
            )}
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700">
                  <TableHead className="text-slate-400 text-xs sm:text-sm">
                    Timestamp
                  </TableHead>
                  <TableHead className="text-slate-400 text-xs sm:text-sm">
                    pH
                  </TableHead>
                  <TableHead className="text-slate-400 text-xs sm:text-sm">
                    Temp (°C)
                  </TableHead>
                  <TableHead className="text-slate-400 text-xs sm:text-sm">
                    DO (mg/L)
                  </TableHead>
                  <TableHead className="text-slate-400 text-xs sm:text-sm">
                    Turbidity
                  </TableHead>
                  <TableHead className="text-slate-400 text-xs sm:text-sm">
                    WQI
                  </TableHead>
                  <TableHead className="text-slate-400 text-xs sm:text-sm">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedReadings.length > 0 ? (
                  paginatedReadings.map((reading) => (
                    <TableRow key={reading.id} className="border-slate-700">
                      <TableCell className="text-slate-300 text-xs sm:text-sm">
                        {reading.timestamp}
                      </TableCell>
                      <TableCell className="text-white text-xs sm:text-sm">
                        {reading.ph.toFixed(1)}
                      </TableCell>
                      <TableCell className="text-white text-xs sm:text-sm">
                        {reading.temperature.toFixed(1)}
                      </TableCell>
                      <TableCell className="text-white text-xs sm:text-sm">
                        {reading.dissolvedOxygen.toFixed(1)}
                      </TableCell>
                      <TableCell className="text-white text-xs sm:text-sm">
                        {reading.turbidity.toFixed(1)}
                      </TableCell>
                      <TableCell
                        className={`font-semibold text-xs sm:text-sm ${getWQIColor(
                          reading.wqi
                        )}`}
                      >
                        {reading.wqi}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-slate-400 hover:text-white p-1 h-6 w-6 sm:h-8 sm:w-8"
                          >
                            <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-slate-400 hover:text-white p-1 h-6 w-6 sm:h-8 sm:w-8"
                          >
                            <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center text-slate-400 py-8 text-sm sm:text-base"
                    >
                      No readings found for this station
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-4 border-t border-slate-700">
              <div className="text-slate-400 text-xs sm:text-sm">
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, filteredReadings.length)}{" "}
                of {filteredReadings.length} results
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="border-slate-600 text-slate-300 bg-transparent disabled:opacity-50 text-xs sm:text-sm"
                >
                  <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  Previous
                </Button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <Button
                        key={pageNum}
                        size="sm"
                        variant={
                          currentPage === pageNum ? "default" : "outline"
                        }
                        onClick={() => setCurrentPage(pageNum)}
                        className={`h-6 w-6 sm:h-8 sm:w-8 p-0 text-xs sm:text-sm ${
                          currentPage === pageNum
                            ? "bg-cyan-500 text-white"
                            : "border-slate-600 text-slate-300 bg-transparent"
                        }`}
                      >
                        {pageNum}
                      </Button>
                    );
                  })}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="border-slate-600 text-slate-300 bg-transparent disabled:opacity-50 text-xs sm:text-sm"
                >
                  Next
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>{" "}
      {/* Dialogs */}
      {renderManageStationDialog()}
    </div>
  );
}
