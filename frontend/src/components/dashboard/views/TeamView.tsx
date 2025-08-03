"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Settings } from "lucide-react";
import { teamMembers } from "@/components/mock";

export default function TeamView() {
  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6 max-w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm sm:text-base w-full sm:w-auto">
          <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
          Invite Member
        </Button>
      </div>

      <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-xl sm:rounded-2xl">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-white text-base sm:text-lg">
            Team Members
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="space-y-3 sm:space-y-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-3 sm:p-4 bg-slate-800 rounded-lg sm:rounded-xl gap-4"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <Avatar className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-cyan-500 text-white text-sm sm:text-base">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                      {member.name}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm truncate">
                      {member.role}
                    </p>
                    <p className="text-slate-500 text-xs truncate">
                      {member.email}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
                  <div className="flex flex-col sm:text-right min-w-0">
                    <Badge
                      className={`self-start sm:self-end text-xs sm:text-sm ${
                        member.status === "active"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-slate-500/20 text-slate-400"
                      }`}
                    >
                      {member.status}
                    </Badge>
                    <p className="text-slate-500 text-xs mt-1 truncate">
                      Last active: {member.lastActive}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-slate-400 hover:text-white self-start sm:self-auto h-8 w-8 sm:h-10 sm:w-10 p-1 sm:p-2"
                  >
                    <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
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
