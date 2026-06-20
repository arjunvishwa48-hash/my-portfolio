import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { usePortfolio } from "../context/PortfolioContext";
import { ProjectCard } from "./ProjectCard";

export default function Portfolio() {
  const { projects } = usePortfolio();
  const [filter, setFilter] = useState("All");

  const categories = [
    { id: "All",            label: "All" },
    { id: "Video",          label: "Videos" },
    { id: "Reel",           label: "Reels" },
    { id: "AI Video",       label: "AI Video" },
    { id: "Graphic Design", label: "Graphic Design" },
  ];

  const videoItems          = projects.filter(p => p.category === "Video");
  const reelItems           = projects.filter(p => p.category === "Reel");
  const aiVideoItems        = projects.filter(p => p.category === "AI Video");
  const graphicDesignItems  = projects.filter(p => p.category === "Graphic Design");

  const sectionData = [
    { id: "Video",          label: "Videos",         items: videoItems },
    { id: "Reel",           label: "Reels",          items: reelItems },
    { id: "AI Video",       label: "AI Video",       items: aiVideoItems },
    { id: "Graphic Design", label: "Graphic Design", items: graphicDesignItems },
  ];

  const activeSections = sectionData.filter(sec => filter === "All" || sec.id === filter);

  return (
    <section id="portfolio" className="py-24 relative bg-brand-charcoal z-20">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 text-brand-blue font-mono text-xs uppercase tracking-[0.2em] mb-3">
              <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
              Selected Works
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
              MY <span className="text-stroke text-transparent italic">PROJECTS</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-1.5 bg-white/5 border border-white/10 p-1.5 rounded-sm backdrop-blur-xl shadow-2xl"
          >
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 rounded-sm whitespace-nowrap cursor-pointer ${
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

        {/* Category Sections */}
        <div className="space-y-16">
          {activeSections.map(({ id, label, items }, secIdx) => {
            if (items.length === 0) return null;
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: secIdx * 0.08 }}
                className="space-y-6"
              >
                {/* Section header */}
                <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-brand-orange font-bold tracking-widest">
                      // 0{secIdx + 1}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                      {label}
                    </h3>
                  </div>
                  <span className="font-mono text-[9px] text-brand-blue uppercase tracking-[0.2em] bg-brand-blue/10 px-3 py-1.5 rounded-sm border border-brand-blue/10">
                    {items.length} FEATURED
                  </span>
                </div>

                {/* Grid / Scrollable Container */}
                <div className={
                  id === "Reel"
                    ? "flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 lg:grid lg:grid-cols-5 lg:overflow-x-visible lg:pb-0 scroll-smooth scroller w-full"
                    : "grid grid-cols-1 md:grid-cols-12 gap-6"
                }>
                  <AnimatePresence mode="popLayout">
                    {items.map(project => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        className={
                          id === "Reel"
                            ? "w-[260px] md:w-[300px] shrink-0 snap-start lg:w-full lg:col-span-1 lg:shrink"
                            : (project.category === "Reel" ? "md:col-span-4 lg:col-span-3" : (project.span || "md:col-span-6 lg:col-span-4"))
                        }
                      />
                    ))}
                  </AnimatePresence>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link
            to="/gallery"
            className="group relative flex items-center gap-6 px-10 py-5 bg-white/5 border border-white/10 hover:border-brand-orange transition-all duration-500 rounded-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand-orange/10 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white flex items-center gap-3 relative z-10">
              View Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
