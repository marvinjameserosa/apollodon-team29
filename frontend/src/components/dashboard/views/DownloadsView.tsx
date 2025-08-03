"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, RefreshCw, Zap, Settings, FileText } from "lucide-react";
import { downloadsData } from "@/components/mock";

export default function DownloadsView() {
  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
        <Button
          variant="outline"
          className="border-slate-600 text-slate-300 hover:text-white bg-transparent text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Check for Updates
        </Button>
      </div>

      {/* Firmware Updates */}
      <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
            Firmware Updates
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="space-y-3 sm:space-y-4">
            {downloadsData.firmware.map((item) => (
              <div
                key={item.id}
                className="flex flex-col lg:flex-row lg:items-center justify-between p-3 sm:p-4 bg-slate-800 rounded-lg sm:rounded-xl gap-4"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-xs">
                    <span className="text-cyan-400 font-medium">
                      v{item.version}
                    </span>
                    <span className="text-slate-500">{item.size}</span>
                    <span className="text-slate-500 hidden sm:inline">
                      {item.date}
                    </span>
                    <div className="flex items-center gap-1 flex-wrap">
                      <span className="text-slate-500">Compatible:</span>
                      {item.compatible.map((stationId) => (
                        <Badge
                          key={stationId}
                          className="bg-slate-700 text-slate-300 text-xs"
                        >
                          {stationId}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-slate-500 text-xs mt-1 sm:hidden">
                    {item.date}
                  </div>
                </div>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm sm:text-base self-start lg:self-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Software Tools */}
      <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
            <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
            Software Tools
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="space-y-3 sm:space-y-4">
            {downloadsData.software.map((item) => (
              <div
                key={item.id}
                className="flex flex-col lg:flex-row lg:items-center justify-between p-3 sm:p-4 bg-slate-800 rounded-lg sm:rounded-xl gap-4"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-xs">
                    <span className="text-cyan-400 font-medium">
                      v{item.version}
                    </span>
                    <span className="text-slate-500">{item.size}</span>
                    <span className="text-slate-500 hidden sm:inline">
                      {item.date}
                    </span>
                    <Badge className="bg-slate-700 text-slate-300 text-xs">
                      {item.platform}
                    </Badge>
                  </div>
                  <div className="text-slate-500 text-xs mt-1 sm:hidden">
                    {item.date}
                  </div>
                </div>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm sm:text-base self-start lg:self-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Documentation */}
      <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
            <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
            Documentation
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="space-y-3 sm:space-y-4">
            {downloadsData.documentation.map((item) => (
              <div
                key={item.id}
                className="flex flex-col lg:flex-row lg:items-center justify-between p-3 sm:p-4 bg-slate-800 rounded-lg sm:rounded-xl gap-4"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-xs">
                    <span className="text-cyan-400 font-medium">
                      v{item.version}
                    </span>
                    <span className="text-slate-500">{item.size}</span>
                    <span className="text-slate-500 hidden sm:inline">
                      {item.date}
                    </span>
                    <Badge className="bg-slate-700 text-slate-300 text-xs">
                      {item.format}
                    </Badge>
                  </div>
                  <div className="text-slate-500 text-xs mt-1 sm:hidden">
                    {item.date}
                  </div>
                </div>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm sm:text-base self-start lg:self-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
