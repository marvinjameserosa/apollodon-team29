"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  BarChart3,
  CheckCircle,
  TrendingUp,
  PieChart,
  LineChart,
  Clock,
  Calendar,
  Download,
  AlertTriangle,
} from "lucide-react";
import { reportData } from "@/components/mock";

export default function ReportsView() {
  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-0">
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
        <Button
          variant="outline"
          className="border-slate-600 text-slate-300 hover:text-white bg-transparent text-sm sm:text-base"
        >
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Report
        </Button>
        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm sm:text-base">
          <Download className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Report Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  Monthly Reports
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  24
                </p>
                <p className="text-emerald-400 text-xs sm:text-sm mt-1">
                  Generated this month
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 ml-3">
                <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  Compliance Rate
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-emerald-400 mt-1">
                  92.5%
                </p>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Above regulatory standards
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 ml-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  Data Points
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  15.2K
                </p>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Collected this month
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 ml-3">
                <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  Trend Analysis
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-cyan-400 mt-1">
                  Stable
                </p>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Overall water quality
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 ml-3">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-2xl">
          <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
            <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
              <PieChart className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              Quick Reports
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="space-y-2 sm:space-y-3">
              <Button className="w-full justify-start bg-slate-800 hover:bg-slate-700 text-white border-slate-600 text-sm sm:text-base p-3 sm:p-4">
                <FileText className="h-4 w-4 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="truncate">Daily Water Quality Summary</span>
              </Button>
              <Button className="w-full justify-start bg-slate-800 hover:bg-slate-700 text-white border-slate-600 text-sm sm:text-base p-3 sm:p-4">
                <BarChart3 className="h-4 w-4 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="truncate">Weekly Trend Analysis</span>
              </Button>
              <Button className="w-full justify-start bg-slate-800 hover:bg-slate-700 text-white border-slate-600 text-sm sm:text-base p-3 sm:p-4">
                <AlertTriangle className="h-4 w-4 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="truncate">Alert History Report</span>
              </Button>
              <Button className="w-full justify-start bg-slate-800 hover:bg-slate-700 text-white border-slate-600 text-sm sm:text-base p-3 sm:p-4">
                <CheckCircle className="h-4 w-4 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="truncate">Compliance Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-2xl">
          <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
            <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
              <LineChart className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              Parameter Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="space-y-3 sm:space-y-4">
              {Object.entries(reportData.parameterAnalysis).map(
                ([param, data]) => (
                  <div
                    key={param}
                    className="bg-slate-800 rounded-lg p-3 sm:p-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-white font-semibold capitalize text-sm sm:text-base">
                        {param.replace(/([A-Z])/g, " $1").trim()}
                      </h3>
                      <Badge
                        className={`${
                          data.trend === "stable"
                            ? "bg-blue-500/20 text-blue-400"
                            : data.trend === "increasing"
                            ? "bg-amber-500/20 text-amber-400"
                            : "bg-emerald-500/20 text-emerald-400"
                        } text-xs sm:text-sm self-start sm:self-auto`}
                      >
                        {data.trend}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                      <div className="flex justify-between sm:block">
                        <span className="text-slate-400">Average:</span>
                        <span className="ml-2 text-white font-medium">
                          {data.avg}
                        </span>
                      </div>
                      <div className="flex justify-between sm:block">
                        <span className="text-slate-400">Compliance:</span>
                        <span className="ml-2 text-emerald-400 font-medium">
                          {data.compliance}%
                        </span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-2xl">
        <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
          <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
            Recent Reports
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="space-y-2 sm:space-y-3">
            {[
              {
                name: "Weekly Water Quality Report - Week 1",
                date: "2024-01-07",
                type: "Weekly Summary",
                status: "Generated",
              },
              {
                name: "Monthly Compliance Report - December",
                date: "2024-01-01",
                type: "Compliance",
                status: "Generated",
              },
              {
                name: "Alert Analysis Report",
                date: "2024-01-06",
                type: "Alert Summary",
                status: "Generated",
              },
            ].map((report, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-slate-800 rounded-lg gap-3 sm:gap-4"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-white font-medium text-sm sm:text-base truncate">
                    {report.name}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    {report.type} • Generated on {report.date}
                  </p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 self-start sm:self-auto">
                  <Badge className="bg-emerald-500/20 text-emerald-400 text-xs sm:text-sm">
                    {report.status}
                  </Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-slate-400 hover:text-white p-2"
                  >
                    <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
