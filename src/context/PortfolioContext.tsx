import React, { createContext, useContext } from "react";
import { projects as initialProjects, Project } from "../projectsData";

export interface Reel {
  id: number;
  url: string;
}

export interface ShowreelData {
  title: string;
  subtitle: string;
  videoUrl: string;
  thumbnailUrl: string;
}

interface PortfolioContextType {
  projects: Project[];
  reels: Reel[];
  showreel: ShowreelData;
}

const defaultReels: Reel[] = [
  { id: 1, url: "https://www.youtube.com/embed/JBbKFnGdHcc?rel=0&modestbranding=1" },
  { id: 2, url: "https://www.youtube.com/embed/TOwPY2y2M8k?rel=0&modestbranding=1" },
  { id: 3, url: "https://www.youtube.com/embed/bet6vtD-ouM?rel=0&modestbranding=1" },
  { id: 4, url: "https://www.youtube.com/embed/ARjg0XJyIkc?rel=0&modestbranding=1" },
  { id: 5, url: "https://www.youtube.com/embed/wNnxplOvkjE?rel=0&modestbranding=1" },
];

const defaultShowreel: ShowreelData = {
  title: "2026 Showreel",
  subtitle: "A collection of moving moments.",
  videoUrl: "https://drive.google.com/file/d/1yNixLhrbTGb-rkjDACN9kwZJO3SsQ71r/view?usp=drive_link",
  thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop"
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <PortfolioContext.Provider
      value={{
        projects: initialProjects,
        reels: defaultReels,
        showreel: defaultShowreel,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
