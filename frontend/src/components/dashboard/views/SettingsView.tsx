"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Settings,
  Activity,
  Bell,
  Beaker,
  Upload,
  Zap,
  Save,
  RefreshCw,
  Database,
} from "lucide-react";

export default function SettingsView() {
  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-0">
      {/* Save Button */}
      <div className="flex items-center justify-end">
        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* General Settings */}
        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
              <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <div>
                <Label
                  htmlFor="system-name"
                  className="text-slate-300 text-sm sm:text-base"
                >
                  System Name
                </Label>
                <Input
                  id="system-name"
                  defaultValue="AquaMonitor System"
                  className="mt-2 bg-slate-800 border-slate-600 text-white text-sm sm:text-base h-9 sm:h-10"
                />
              </div>
              <div>
                <Label
                  htmlFor="location"
                  className="text-slate-300 text-sm sm:text-base"
                >
                  Primary Location
                </Label>
                <Input
                  id="location"
                  defaultValue="Water Treatment District"
                  className="mt-2 bg-slate-800 border-slate-600 text-white text-sm sm:text-base h-9 sm:h-10"
                />
              </div>
              <div>
                <Label
                  htmlFor="timezone"
                  className="text-slate-300 text-sm sm:text-base"
                >
                  Timezone
                </Label>
                <Select defaultValue="utc">
                  <SelectTrigger className="mt-2 bg-slate-800 border-slate-600 text-white text-sm sm:text-base h-9 sm:h-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">Eastern Time</SelectItem>
                    <SelectItem value="pst">Pacific Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monitoring Settings */}
        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
              <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              Monitoring Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <div>
                <Label
                  htmlFor="sampling-interval"
                  className="text-slate-300 text-sm sm:text-base"
                >
                  Sampling Interval (minutes)
                </Label>
                <Input
                  id="sampling-interval"
                  type="number"
                  defaultValue="5"
                  className="mt-2 bg-slate-800 border-slate-600 text-white text-sm sm:text-base h-9 sm:h-10"
                />
              </div>
              <div>
                <Label
                  htmlFor="data-retention"
                  className="text-slate-300 text-sm sm:text-base"
                >
                  Data Retention (days)
                </Label>
                <Input
                  id="data-retention"
                  type="number"
                  defaultValue="365"
                  className="mt-2 bg-slate-800 border-slate-600 text-white text-sm sm:text-base h-9 sm:h-10"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/50 rounded-lg">
                <div className="min-w-0 flex-1">
                  <Label className="text-slate-300 text-sm sm:text-base">
                    Auto-calibration
                  </Label>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Automatically calibrate sensors
                  </p>
                </div>
                <Switch defaultChecked className="flex-shrink-0" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alert Settings */}
        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
              <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              Alert Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/50 rounded-lg">
                <div className="min-w-0 flex-1">
                  <Label className="text-slate-300 text-sm sm:text-base">
                    Email Notifications
                  </Label>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Send alerts via email
                  </p>
                </div>
                <Switch defaultChecked className="flex-shrink-0" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/50 rounded-lg">
                <div className="min-w-0 flex-1">
                  <Label className="text-slate-300 text-sm sm:text-base">
                    SMS Notifications
                  </Label>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Send critical alerts via SMS
                  </p>
                </div>
                <Switch className="flex-shrink-0" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/50 rounded-lg">
                <div className="min-w-0 flex-1">
                  <Label className="text-slate-300 text-sm sm:text-base">
                    Real-time Dashboard Alerts
                  </Label>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Show alerts on dashboard
                  </p>
                </div>
                <Switch defaultChecked className="flex-shrink-0" />
              </div>
              <div>
                <Label
                  htmlFor="alert-threshold"
                  className="text-slate-300 text-sm sm:text-base"
                >
                  Alert Threshold Level
                </Label>
                <Select defaultValue="medium">
                  <SelectTrigger className="mt-2 bg-slate-800 border-slate-600 text-white text-sm sm:text-base h-9 sm:h-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Parameter Thresholds */}
        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
              <Beaker className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              Parameter Thresholds
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              {/*
                { name: "pH Level", min: 6.5, max: 8.5, unit: "pH" },
                { name: "Temperature", min: 0, max: 30, unit: "°C" },
                { name: "Dissolved Oxygen", min: 5, max: 15, unit: "mg/L" },
                { name: "Turbidity", min: 0, max: 5, unit: "NTU" },
              ].map((param, index) => (
                <div key={index} className="bg-slate-800/80 rounded-lg p-3 sm:p-4">
                  <h3 className="text-white font-medium mb-3 text-sm sm:text-base">
                    {param.name} ({param.unit})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <Label className="text-slate-400 text-xs sm:text-sm">
                        Min Value
                      </Label>
                      <Input
                        type="number"
                        defaultValue={param.min}
                        className="mt-1 sm:mt-2 bg-slate-700 border-slate-600 text-white text-sm h-8 sm:h-9"
                      />
                    </div>
                    <div>
                      <Label className="text-slate-400 text-xs sm:text-sm">
                        Max Value
                      </Label>
                      <Input
                        type="number"
                        defaultValue={param.max}
                        className="mt-1 sm:mt-2 bg-slate-700 border-slate-600 text-white text-sm h-8 sm:h-9"
                      />
                    </div>
                  </div>
                </div>
              ))}
              */}
            </div>
          </CardContent>
        </Card>

        {/* Data Export Settings */}
        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
              <Upload className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              Data Export Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <div>
                <Label
                  htmlFor="export-format"
                  className="text-slate-300 text-sm sm:text-base"
                >
                  Default Export Format
                </Label>
                <Select defaultValue="csv">
                  <SelectTrigger className="mt-2 bg-slate-800 border-slate-600 text-white text-sm sm:text-base h-9 sm:h-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="xlsx">Excel</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="pdf">PDF</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/50 rounded-lg">
                <div className="min-w-0 flex-1">
                  <Label className="text-slate-300 text-sm sm:text-base">
                    Auto-export Daily Reports
                  </Label>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Automatically export daily summaries
                  </p>
                </div>
                <Switch className="flex-shrink-0" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/50 rounded-lg">
                <div className="min-w-0 flex-1">
                  <Label className="text-slate-300 text-sm sm:text-base">
                    Include Raw Data
                  </Label>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Include raw sensor readings in exports
                  </p>
                </div>
                <Switch defaultChecked className="flex-shrink-0" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Maintenance */}
        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              System Maintenance
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="p-3 sm:p-4 bg-slate-800/50 rounded-lg">
                <Label className="text-slate-300 text-sm sm:text-base">
                  System Status
                </Label>
                <div className="mt-2 flex items-center gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-emerald-400 text-sm sm:text-base">
                    All systems operational
                  </span>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <Button className="w-full justify-start bg-slate-800 hover:bg-slate-700 text-white border-slate-600 text-sm sm:text-base p-3 sm:p-4">
                  <RefreshCw className="h-4 w-4 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="truncate">Run System Diagnostics</span>
                </Button>
                <Button className="w-full justify-start bg-slate-800 hover:bg-slate-700 text-white border-slate-600 text-sm sm:text-base p-3 sm:p-4">
                  <Database className="h-4 w-4 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="truncate">Backup Database</span>
                </Button>
                <Button className="w-full justify-start bg-slate-800 hover:bg-slate-700 text-white border-slate-600 text-sm sm:text-base p-3 sm:p-4">
                  <Upload className="h-4 w-4 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="truncate">Update System</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
