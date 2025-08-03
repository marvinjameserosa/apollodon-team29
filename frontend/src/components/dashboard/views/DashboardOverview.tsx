"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Activity,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Gauge,
  Brain,
  LineChart,
  PieChart,
} from "lucide-react";
import { chartData, stations as mockStations } from "@/components/mock";
import DashboardMap from "@/components/dashboard/components/DashboardMap";

interface DashboardOverviewProps {
  onStationClick?: (stationId: string) => void;
}

export default function DashboardOverview({
  onStationClick,
}: DashboardOverviewProps) {
  const stationsData = mockStations;
  const onlineStations = stationsData.filter(
    (s) => s.status === "online"
  ).length;
  const warningStations = stationsData.filter(
    (s) => s.status === "warning"
  ).length;
  const offlineStations = stationsData.filter(
    (s) => s.status === "offline"
  ).length;
  const avgWQI = Math.round(
    stationsData.reduce((sum, station) => sum + station.wqi, 0) /
      stationsData.length
  );

  const getWQIColor = (wqi: number) => {
    if (wqi >= 90) return "text-emerald-400";
    if (wqi >= 70) return "text-blue-400";
    if (wqi >= 50) return "text-amber-400";
    return "text-red-400";
  };
  const renderPredictiveAnalyticsChart = () => (
    <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
          <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
          AI Predictive Analytics - Next 24 Hours
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="h-64 sm:h-80 relative">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 300"
            className="overflow-visible"
          >
            {/* Grid lines */}
            <defs>
              <pattern
                id="predictive-grid"
                width="80"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 30"
                  fill="none"
                  stroke="rgb(71 85 105)"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#predictive-grid)" />

            {/* Y-axis labels */}
            <text x="20" y="30" fill="rgb(148 163 184)" fontSize="12">
              100
            </text>
            <text x="20" y="80" fill="rgb(148 163 184)" fontSize="12">
              75
            </text>
            <text x="20" y="130" fill="rgb(148 163 184)" fontSize="12">
              50
            </text>
            <text x="20" y="180" fill="rgb(148 163 184)" fontSize="12">
              25
            </text>
            <text x="20" y="230" fill="rgb(148 163 184)" fontSize="12">
              0
            </text>

            {/* X-axis labels */}
            {["Now", "6h", "12h", "18h", "24h"].map((label, index) => (
              <text
                key={index}
                x={80 + index * 150}
                y="280"
                fill="rgb(148 163 184)"
                fontSize="12"
                textAnchor="middle"
              >
                {label}
              </text>
            ))}

            {/* WQI Prediction Lines */}
            <polyline
              fill="none"
              stroke="#06b6d4"
              strokeWidth="3"
              points="80,50 230,55 380,60 530,65 680,70"
            />
            <polyline
              fill="none"
              stroke="#f59e0b"
              strokeWidth="3"
              points="80,120 230,115 380,110 530,105 680,100"
            />
            <polyline
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
              points="80,40 230,38 380,35 530,33 680,30"
            />

            {/* Confidence bands */}
            <polygon
              fill="#06b6d4"
              fillOpacity="0.1"
              points="80,45 230,50 380,55 530,60 680,65 680,75 530,70 380,65 230,60 80,55"
            />
            <polygon
              fill="#f59e0b"
              fillOpacity="0.1"
              points="80,115 230,110 380,105 530,100 680,95 680,105 530,110 380,115 230,120 80,125"
            />
            <polygon
              fill="#10b981"
              fillOpacity="0.1"
              points="80,35 230,33 380,30 530,28 680,25 680,35 530,38 380,40 230,43 80,45"
            />

            {/* Data points with confidence indicators */}
            {[0, 1, 2, 3, 4].map((index) => (
              <g key={index}>
                <circle
                  cx={80 + index * 150}
                  cy={50 + index * 5}
                  r="4"
                  fill="#06b6d4"
                />
                <circle
                  cx={80 + index * 150}
                  cy={120 - index * 5}
                  r="4"
                  fill="#f59e0b"
                />
                <circle
                  cx={80 + index * 150}
                  cy={40 - index * 2}
                  r="4"
                  fill="#10b981"
                />
              </g>
            ))}

            {/* Prediction indicators */}
            <text
              x="400"
              y="20"
              fill="rgb(148 163 184)"
              fontSize="14"
              textAnchor="middle"
              fontWeight="bold"
            >
              Predictive Confidence: 85-95%
            </text>
          </svg>{" "}
          {/* Legend */}
          <div className="absolute top-4 right-4 bg-slate-800 rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-500 rounded-full"></div>
              <span className="text-slate-300 text-xs sm:text-sm">
                Downtown (WS001)
              </span>
              <span className="text-cyan-400 text-xs font-medium">87→85</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-amber-500 rounded-full"></div>
              <span className="text-slate-300 text-xs sm:text-sm">
                Industrial (WS002)
              </span>
              <span className="text-amber-400 text-xs font-medium">65→67</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-emerald-500 rounded-full"></div>
              <span className="text-slate-300 text-xs sm:text-sm">
                Residential (WS003)
              </span>
              <span className="text-emerald-400 text-xs font-medium">
                92→93
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
  const renderAnalyticsCharts = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {/* WQI Trend Chart */}
      <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
            <LineChart className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
            WQI Trend (24 Hours)
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
              {/* Grid lines */}
              <defs>
                <pattern
                  id="grid-pattern"
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
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />

              {/* Y-axis labels */}
              <text x="10" y="20" fill="rgb(148 163 184)" fontSize="12">
                100
              </text>
              <text x="10" y="70" fill="rgb(148 163 184)" fontSize="12">
                75
              </text>
              <text x="10" y="120" fill="rgb(148 163 184)" fontSize="12">
                50
              </text>
              <text x="10" y="170" fill="rgb(148 163 184)" fontSize="12">
                25
              </text>

              {/* X-axis labels */}
              {chartData.wqiTrend.map((point, index) => (
                <text
                  key={index}
                  x={50 + index * 55}
                  y="195"
                  fill="rgb(148 163 184)"
                  fontSize="12"
                  textAnchor="middle"
                >
                  {point.time}
                </text>
              ))}

              {/* WS001 Line */}
              <polyline
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2"
                points={chartData.wqiTrend
                  .map(
                    (point, index) =>
                      `${50 + index * 55},${180 - point.WS001 * 1.6}`
                  )
                  .join(" ")}
              />

              {/* WS002 Line */}
              <polyline
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
                points={chartData.wqiTrend
                  .map(
                    (point, index) =>
                      `${50 + index * 55},${180 - point.WS002 * 1.6}`
                  )
                  .join(" ")}
              />

              {/* WS003 Line */}
              <polyline
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                points={chartData.wqiTrend
                  .map(
                    (point, index) =>
                      `${50 + index * 55},${180 - point.WS003 * 1.6}`
                  )
                  .join(" ")}
              />

              {/* Data points */}
              {chartData.wqiTrend.map((point, index) => (
                <g key={index}>
                  <circle
                    cx={50 + index * 55}
                    cy={180 - point.WS001 * 1.6}
                    r="3"
                    fill="#06b6d4"
                  />
                  <circle
                    cx={50 + index * 55}
                    cy={180 - point.WS002 * 1.6}
                    r="3"
                    fill="#f59e0b"
                  />
                  <circle
                    cx={50 + index * 55}
                    cy={180 - point.WS003 * 1.6}
                    r="3"
                    fill="#10b981"
                  />
                </g>
              ))}
            </svg>{" "}
            {/* Legend */}
            <div className="absolute top-4 right-4 bg-slate-800 rounded-lg p-3 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span className="text-slate-300 text-sm">Downtown</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span className="text-slate-300 text-sm">Industrial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-slate-300 text-sm">Residential</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>{" "}
      {/* Parameter Distribution */}
      <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
            <PieChart className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
            Water Quality Distribution
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="h-48 sm:h-64 flex items-center justify-center">
            <svg width="200" height="200" viewBox="0 0 200 200">
              {/* Pie chart segments */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="#10b981"
                stroke="#1f2937"
                strokeWidth="2"
                strokeDasharray={`${(60 / 100) * 502.4} 502.4`}
                strokeDashoffset="0"
                transform="rotate(-90 100 100)"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="#3b82f6"
                stroke="#1f2937"
                strokeWidth="2"
                strokeDasharray={`${(25 / 100) * 502.4} 502.4`}
                strokeDashoffset={`-${(60 / 100) * 502.4}`}
                transform="rotate(-90 100 100)"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="#f59e0b"
                stroke="#1f2937"
                strokeWidth="2"
                strokeDasharray={`${(12 / 100) * 502.4} 502.4`}
                strokeDashoffset={`-${(85 / 100) * 502.4}`}
                transform="rotate(-90 100 100)"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="#ef4444"
                stroke="#1f2937"
                strokeWidth="2"
                strokeDasharray={`${(3 / 100) * 502.4} 502.4`}
                strokeDashoffset={`-${(97 / 100) * 502.4}`}
                transform="rotate(-90 100 100)"
              />

              {/* Center circle */}
              <circle cx="100" cy="100" r="40" fill="#1e293b" />
              <text
                x="100"
                y="95"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="bold"
              >
                Overall
              </text>
              <text
                x="100"
                y="110"
                textAnchor="middle"
                fill="#06b6d4"
                fontSize="18"
                fontWeight="bold"
              >
                {avgWQI}
              </text>
            </svg>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {chartData.parameterDistribution.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-slate-300 text-sm">{item.parameter}</span>
                <span className="text-slate-400 text-sm ml-auto">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6 max-w-full">
      {/* Station Map */}
      <div className="mb-6 sm:mb-8">
        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              <CardTitle className="text-white text-base sm:text-lg">
                Station Network
              </CardTitle>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-slate-400">
                  Excellent ({onlineStations})
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-500 rounded-full"></div>
                <span className="text-slate-400">Fair ({warningStations})</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <span className="text-slate-400">Poor ({offlineStations})</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="h-80 sm:h-96">
              <DashboardMap
                stations={stationsData}
                onStationClick={onStationClick}
                className="h-full w-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>{" "}
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-400 text-sm font-medium">
                  Total Stations
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {stationsData.length}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                  <span className="text-emerald-400 text-sm font-medium">
                    12%
                  </span>
                  <span className="text-slate-400 text-sm">vs last month</span>
                </div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 ml-3">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-400 text-sm font-medium">
                  Average WQI
                </p>
                <p
                  className={`text-2xl sm:text-3xl font-bold mt-1 ${getWQIColor(
                    avgWQI
                  )}`}
                >
                  {avgWQI}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                  <span className="text-emerald-400 text-sm font-medium">
                    5%
                  </span>
                  <span className="text-slate-400 text-sm">vs last month</span>
                </div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 ml-3">
                <Gauge className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-400 text-sm font-medium">
                  Active Alerts
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-amber-400 mt-1">
                  {stationsData.reduce(
                    (sum, station) => sum + station.alerts,
                    0
                  )}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4 text-red-400" />
                  <span className="text-red-400 text-sm font-medium">3%</span>
                  <span className="text-slate-400 text-sm">vs last month</span>
                </div>
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
                <p className="text-slate-400 text-sm font-medium">
                  System Health
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-emerald-400 mt-1">
                  {Math.round((onlineStations / stationsData.length) * 100)}%
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                  <span className="text-emerald-400 text-sm font-medium">
                    8%
                  </span>
                  <span className="text-slate-400 text-sm">vs last month</span>
                </div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 ml-3">
                <Activity className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>{" "}
      {/* Predictive Analytics Chart */}
      <div className="mb-6 sm:mb-8">{renderPredictiveAnalyticsChart()}</div>
      {/* Analytics Charts */}
      {renderAnalyticsCharts()}
      {/* Active Alerts */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
          <CardHeader className="p-4 sm:p-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
              <CardTitle className="text-white text-base sm:text-lg">
                Active Alerts
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
            <div className="border-l-4 border-l-amber-500 pl-3 sm:pl-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-medium text-sm sm:text-base">
                    pH Level Warning
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    Industrial Park Monitor - pH below optimal range
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 mt-2 text-xs">
                    <span className="text-amber-400 font-medium">pH: 6.8</span>
                    <span className="text-slate-500">5 min ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-l-red-500 pl-3 sm:pl-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-medium text-sm sm:text-base">
                    High Conductivity
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    Industrial Park Monitor - Conductivity exceeds threshold
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 mt-2 text-xs">
                    <span className="text-red-400 font-medium">680 µS/cm</span>
                    <span className="text-slate-500">5 min ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-l-cyan-500 pl-3 sm:pl-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-medium text-sm sm:text-base">
                    System Update
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    All sensors calibrated successfully
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 mt-2 text-xs">
                    <span className="text-cyan-400 font-medium">Completed</span>
                    <span className="text-slate-500">1 hour ago</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
