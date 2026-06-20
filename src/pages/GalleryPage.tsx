/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { usePortfolio } from "../context/PortfolioContext";
import { ProjectCard } from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GalleryPage() {
  const { projects } = usePortfolio();
  const [filter, setFilter] = useState("All");
  const categories = [
    { id: "All", label: "All" },
    { id: "Video", label: "Videos" },
    { id: "Reel", label: "Reels" },
    { id: "Graphic Design", label: "Graphic Design" },
    { id: "AI Video", label: "AI Video" }
  ];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projects.filter(p => {
    return filter === "All" || p.category === filter;
  });

  return (
    <div className="bg-brand-black min-h-screen text-white relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-brand-orange/5 to-transparent pointer-events-none" />
      <div className="fixed inset-0 cinema-grain opacity-[0.03] pointer-events-none z-50"></div>
      
      <Navbar />
      
      <main className="pt-32 pb-32 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              <Link to="/" className="inline-flex items-center gap-2 text-brand-orange font-mono text-[10px] uppercase tracking-[0.3em] mb-8 hover:translate-x-[-4px] transition-transform group">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:scale-110" /> [ RETURN TO BASE ]
              </Link>
              <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-4">
                Creative <br />
                <span className="text-stroke text-transparent italic">Inventory</span>
              </h1>
              <p className="font-mono text-xs text-white/40 uppercase tracking-[0.2em] max-w-md leading-relaxed">
                A non-exhaustive collection of cinematic experiments, generative AI studies, and commercial productions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-1.5 bg-white/5 border border-white/10 p-1.5 rounded-sm backdrop-blur-xl shadow-2xl max-w-full md:max-w-none justify-start md:justify-end shrink-0"
            >
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-500 rounded-sm whitespace-nowrap cursor-pointer ${
                    filter === cat.id 
                      ? "bg-brand-orange text-black shadow-lg shadow-brand-orange/20 font-bold" 
                      : "text-white/40 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Results Grid - Cinematic AI Showcase */}
          <div className={
            filter === "Reel"
              ? "flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 lg:grid lg:grid-cols-5 lg:overflow-x-visible lg:pb-0 scroll-smooth scroller w-full"
              : "grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10"
          }>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  className={`glass-card ${
                    filter === "Reel"
                      ? "w-[260px] md:w-[300px] shrink-0 snap-start lg:w-full lg:col-span-1 lg:shrink"
                      : (project.category === "Reel" ? "md:col-span-4 lg:col-span-3" : (filter === "All" ? (project.span || "md:col-span-6 lg:col-span-4") : "md:col-span-6 lg:col-span-4"))
                  }`}
                />
              ))}
            </AnimatePresence>
          </div>


          {filteredProjects.length === 0 && (
            <div className="py-20 text-center border border-white/5 bg-white/2">
              <p className="font-mono text-sm text-white/30 uppercase tracking-[0.2em]">
                No recordings found matching your query.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
