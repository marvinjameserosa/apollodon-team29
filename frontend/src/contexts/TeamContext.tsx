"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "admin" | "operator" | "analyst" | "viewer";
  avatar?: string;
  lastActive: Date;
  status: "online" | "offline" | "away";
}

interface TeamContextType {
  teamMembers: TeamMember[];
  currentUser: TeamMember | null;
  setCurrentUser: (user: TeamMember | null) => void;
  addTeamMember: (member: TeamMember) => void;
  updateTeamMember: (id: string, updates: Partial<TeamMember>) => void;
  removeTeamMember: (id: string) => void;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

interface TeamProviderProps {
  children: ReactNode;
}

export function TeamProvider({ children }: TeamProviderProps) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [currentUser, setCurrentUser] = useState<TeamMember | null>(null);

  const addTeamMember = (member: TeamMember) => {
    setTeamMembers((prev) => [...prev, member]);
  };

  const updateTeamMember = (id: string, updates: Partial<TeamMember>) => {
    setTeamMembers((prev) =>
      prev.map((member) =>
        member.id === id ? { ...member, ...updates } : member
      )
    );
  };

  const removeTeamMember = (id: string) => {
    setTeamMembers((prev) => prev.filter((member) => member.id !== id));
    if (currentUser?.id === id) {
      setCurrentUser(null);
    }
  };

  return (
    <TeamContext.Provider
      value={{
        teamMembers,
        currentUser,
        setCurrentUser,
        addTeamMember,
        updateTeamMember,
        removeTeamMember,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
}

export function useTeam() {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error("useTeam must be used within a TeamProvider");
  }
  return context;
}
