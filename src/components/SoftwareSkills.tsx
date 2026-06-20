import React from "react";
import { motion } from "motion/react";

const skills = [
  {
    name: "Photoshop",
    abbr: "Ps",
    color: "#31A8FF", 
    level: 95,
    label: "Retouching Expert",
  },
  {
    name: "Illustrator",
    abbr: "Ai",
    color: "#FF9A00", 
    level: 88,
    label: "Vector Architect",
  },
  {
    name: "Premiere Pro",
    abbr: "Pr",
    color: "#9A9AFF", 
    level: 98,
    label: "Master Editor",
  },
  {
    name: "After Effects",
    abbr: "Ae",
    color: "#D391FF", 
    level: 90,
    label: "Advanced Motion",
  },
  {
    name: "Lightroom",
    abbr: "Lr",
    color: "#31A8FF", 
    level: 92,
    label: "Master Grader",
  },
  {
    name: "DaVinci Resolve",
    abbr: "Da",
    color: "#FF838F", 
    level: 85,
    label: "Expert Colorist",
  }
];

export default function SoftwareSkills() {
  return (
    <section className="py-24 relative bg-brand-black overflow-hidden z-10 border-t border-b border-white/5">
      {/* Decorative background grid mapping */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center gap-4 text-gray-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 justify-center">
              <span className="w-8 h-[1px] bg-gray-700 block"></span>
              Technical Stack
              <span className="w-8 h-[1px] bg-gray-700 block"></span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter">
              Software <span className="text-stroke text-transparent italic">Mastery</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#0a0a0a] border border-white/10 p-8 cursor-crosshair overflow-hidden"
              style={{
                "--hover-color": skill.color,
              } as React.CSSProperties}
            >
              {/* Animated Glow Backdrop */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${skill.color} 0%, transparent 70%)` }}
              />

              <div className="flex items-center gap-6 mb-8 relative z-10">
                {/* Tech Logo Mock */}
                <div 
                  className="w-16 h-16 flex items-center justify-center font-display text-2xl font-bold text-white border border-white/20 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    borderBottomColor: skill.color,
                    borderBottomWidth: '2px',
                    boxShadow: `0 4px 20px -10px ${skill.color}00` 
                  }}
                  // Using inline style to handle hover dynamically wouldn't work perfectly in Tailwind without arbitrary variables, 
                  // but we mapped --hover-color via inline styles above to use in standard classes if needed.
                >
                  <span className="group-hover:text-[var(--hover-color)] transition-colors duration-300">
                    {skill.abbr}
                  </span>
                </div>
                
                <div>
                  <h3 className="font-bold text-white text-xl tracking-wide">
                    {skill.name}
                  </h3>
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">
                    {skill.label}
                  </span>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="relative z-10 w-full">
                <div className="flex justify-between items-end mb-2 font-mono text-xs">
                  <span className="text-gray-600 uppercase tracking-wider">Proficiency</span>
                </div>
                
                <div className="h-[2px] w-full bg-white/10 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                    className="h-full relative"
                    style={{ backgroundColor: skill.color }}
                  >
                    {/* Glowing head of the progress bar */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                         style={{ backgroundColor: skill.color }} 
                    />
                  </motion.div>
                </div>
              </div>

              {/* Hover Borders */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--hover-color)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
              <div className="absolute bottom-0 right-0 w-full h-[1px] bg-[var(--hover-color)] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
