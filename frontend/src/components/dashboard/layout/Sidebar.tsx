"use client";

import React, { useState, useEffect } from "react";
import { useApp, ViewType } from "@/contexts/AppContext";
import {
  BarChart3,
  MapPin,
  Users,
  FileText,
  Download,
  Settings,
  Menu,
  LogOut,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const menuItems = [
  { id: "dashboard" as ViewType, label: "Dashboard", icon: BarChart3 },
  { id: "stations" as ViewType, label: "Stations", icon: MapPin },
  { id: "team" as ViewType, label: "Team", icon: Users },
  { id: "reports" as ViewType, label: "Reports", icon: FileText },
  { id: "downloads" as ViewType, label: "Downloads", icon: Download },
  { id: "settings" as ViewType, label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const { currentView, setCurrentView } = useApp();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      const tablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const desktop = window.innerWidth >= 1024;

      setIsMobile(mobile);

      if (mobile) {
        setSidebarCollapsed(false);
      } else if (tablet) {
        setSidebarCollapsed(true);
      } else if (desktop && window.innerWidth < 1280) {
        setSidebarCollapsed(true);
      } else if (window.innerWidth >= 1280) {
        setSidebarCollapsed(false);
      }

      if (!mobile) {
        setMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuItemClick = (viewId: ViewType) => {
    setCurrentView(viewId);
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  if (isMobile) {
    return (
      <>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 md:hidden bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-slate-400 hover:text-white"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>

        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        <div
          className={`fixed left-0 top-0 h-full w-72 sm:w-80 bg-slate-900/98 backdrop-blur-sm border-r border-slate-700 flex flex-col transition-transform duration-300 z-40 md:hidden ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 sm:p-6 border-b border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <Image
                  src="/logo.svg"
                  alt="Apollodon Logo"
                  width={28}
                  height={28}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0"
                />
                <span className="text-white font-semibold text-base sm:text-lg truncate">
                  Apollodon
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-400 hover:text-white p-1.5 sm:p-2 ml-2 flex-shrink-0"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>

          <div className="p-4 sm:p-6 border-b border-slate-700">
            <div className="flex items-center gap-2 sm:gap-3">
              <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                <AvatarImage src="#" />
                <AvatarFallback className="bg-cyan-500 text-white font-semibold text-xs sm:text-sm">
                  WM
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                  Water Manager
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm truncate">
                  System Administrator
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className={`flex items-center w-full p-3 sm:p-4 text-left rounded-xl transition-colors gap-2.5 sm:gap-3 ${
                  currentView === item.id
                    ? "bg-cyan-500 text-white shadow-lg"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <item.icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          <div className="p-3 sm:p-4 border-t border-slate-700">
            <button className="w-full flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
              <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="font-medium text-sm sm:text-base">Sign Out</span>
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div
      className={`hidden md:flex ${
        sidebarCollapsed ? "w-16 lg:w-20" : "w-64 lg:w-72 xl:w-80 2xl:w-80"
      } bg-slate-900/95 backdrop-blur-sm border-r border-slate-700 flex-col transition-all duration-300 ease-in-out`}
    >
      <div
        className={`${sidebarCollapsed ? "p-4" : "p-6"} min-h-[76px] relative`}
      >
        {!sidebarCollapsed && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <Image
                src="/logo.svg"
                alt="Apollodon Logo"
                width={32}
                height={32}
                className="w-7 h-7 flex-shrink-0"
              />
              <span className="text-white font-semibold text-lg truncate">
                Apollodon
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className="text-slate-400 hover:text-white hover:bg-slate-800 p-2"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        )}

        {sidebarCollapsed && (
          <div className="flex flex-col items-center space-y-3">
            <Image
              src="/logo.svg"
              alt="Apollodon Logo"
              width={32}
              height={32}
              className="w-7 h-7"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className="text-slate-400 hover:text-white hover:bg-slate-800 p-2"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {!sidebarCollapsed && (
        <div className="px-6 pb-6 border-b border-slate-700">
          <div className="flex items-center gap-3 min-w-0">
            <Avatar className="h-10 w-10 lg:h-11 lg:w-11 xl:h-12 xl:w-12 flex-shrink-0">
              <AvatarImage src="#" />
              <AvatarFallback className="bg-cyan-500 text-white font-semibold text-sm lg:text-base">
                WM
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <h3 className="text-white font-semibold text-sm lg:text-base truncate">
                Water Manager
              </h3>
              <p className="text-slate-400 text-xs lg:text-sm truncate">
                System Administrator
              </p>
            </div>
          </div>
        </div>
      )}

      {sidebarCollapsed && (
        <div className="px-2 pb-4 border-b border-slate-700 flex justify-center">
          <Avatar className="h-8 w-8">
            <AvatarImage src="#" />
            <AvatarFallback className="bg-cyan-500 text-white font-semibold text-xs">
              WM
            </AvatarFallback>
          </Avatar>
        </div>
      )}

      <div
        className={`flex-1 ${
          sidebarCollapsed ? "p-2" : "p-3 lg:p-4"
        } space-y-1 lg:space-y-2`}
      >
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleMenuItemClick(item.id)}
            className={`group relative flex items-center w-full text-left rounded-xl transition-all duration-200 ${
              sidebarCollapsed ? "justify-center p-3" : "gap-3 p-3"
            } ${
              currentView === item.id
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                : "text-slate-300 hover:text-white hover:bg-slate-800 hover:shadow-md"
            }`}
            title={sidebarCollapsed ? item.label : undefined}
          >
            <item.icon
              className={`${
                sidebarCollapsed ? "h-4 w-4" : "h-4 w-4"
              } flex-shrink-0`}
            />

            {!sidebarCollapsed && (
              <span className="font-medium text-sm lg:text-base truncate">
                {item.label}
              </span>
            )}

            {sidebarCollapsed && (
              <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap">
                {item.label}
              </div>
            )}
          </button>
        ))}
      </div>

      <div
        className={`${
          sidebarCollapsed ? "p-2" : "p-3 lg:p-4"
        } border-t border-slate-700`}
      >
        <button
          className={`group relative w-full flex items-center rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors ${
            sidebarCollapsed
              ? "justify-center p-3"
              : "gap-3 px-3 py-2.5 lg:py-3"
          }`}
          title={sidebarCollapsed ? "Sign Out" : undefined}
        >
          <LogOut
            className={`${
              sidebarCollapsed ? "h-4 w-4" : "h-4 w-4"
            } flex-shrink-0`}
          />
          {!sidebarCollapsed && (
            <span className="font-medium text-sm lg:text-base">Sign Out</span>
          )}

          {sidebarCollapsed && (
            <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap">
              Sign Out
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
