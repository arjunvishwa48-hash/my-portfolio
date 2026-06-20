import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { useRef } from "react";
import heroBg from "../assets/images/hero_section.jpg";
import mobileHeroBg from "../assets/images/ChatGPT Image Jun 20, 2026, 01_53_54 PM.png";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen md:h-screen w-full bg-brand-black overflow-hidden flex flex-col items-start justify-center" style={{ position: "relative" }}>
      
      {/* Parallax Background Container */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full z-0"
      >
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={heroBg}
            alt="Naga Arjun Portrait" 
            className="hidden md:block w-full h-full object-cover object-top md:object-center transition-all duration-[2s]"
            referrerPolicy="no-referrer"
          />
          <img 
            src={mobileHeroBg}
            alt="Naga Arjun Mobile Background" 
            className="block md:hidden w-full h-full object-cover object-center transition-all duration-[2s]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Parallax elements removed to clear overlay */}
      </motion.div>

      {/* Cinematic Letterboxing (Top & Bottom bars sliding away) */}
      <motion.div 
        initial={{ height: "20vh" }}
        animate={{ height: "0vh" }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute top-0 left-0 w-full bg-black z-40"
      />
      <motion.div 
        initial={{ height: "20vh" }}
        animate={{ height: "0vh" }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full bg-black z-40"
      />

      {/* Technical HUD Overlay Removed */}

      {/* Content Layer */}
      <div className="relative z-30 container mx-auto px-6 md:px-12 w-full h-full">
        {/* Mobile Hero Content */}
        <div className="md:hidden absolute inset-x-0 top-0 flex flex-col items-center gap-6 px-6 pt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
            className="w-full max-w-[28rem] text-center"
          >
            <div className="flex flex-col items-center justify-center w-full font-display uppercase tracking-tighter leading-[1]">
              <span
                className="text-4xl sm:text-5xl font-bold text-transparent mb-2"
                style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.9)" }}
              >
                Hello I'm
              </span>
              <span className="text-5xl sm:text-6xl font-extrabold text-white">
                Naga Arjun
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center gap-4 w-full max-w-[28rem]"
          >
            <Link
              to="/gallery"
              className="group relative flex items-center justify-center gap-4 px-6 py-4 bg-white text-black font-semibold uppercase tracking-widest text-[9px] overflow-hidden transition-all hover:scale-105 rounded-full w-full"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Play className="w-3 h-3 fill-black" /> <span className="whitespace-nowrap">View Portfolio</span>
              </span>
              <div className="absolute inset-0 bg-brand-orange translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </Link>

            <a
              href="https://res.cloudinary.com/dfynxuxzn/image/upload/v1778769805/Black_And_White_Minimalist_Professional_Resume_A4_pmmx9i.png"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center px-6 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full font-mono text-[9px] text-white uppercase tracking-[0.2em] transition-all hover:scale-105 w-full"
            >
              CV
            </a>
          </motion.div>
        </div>

        {/* Desktop Hero Content */}
        <div className="hidden md:block absolute inset-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
            className="absolute left-0 top-[30%] flex max-w-[28rem] flex-col items-start gap-4 font-display uppercase tracking-tighter leading-[0.8] md:pl-24 lg:pl-28"
          >
            <span
              className="text-7xl lg:text-9xl font-bold text-transparent"
              style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)" }}
            >
              Hello
            </span>
            <span className="text-7xl lg:text-9xl font-extrabold text-white">
              I'm
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
            className="absolute right-0 top-[30%] flex max-w-[28rem] flex-col items-end gap-4 text-right font-display uppercase tracking-tighter leading-[0.8] md:pr-24 lg:pr-28"
          >
            <span className="text-7xl lg:text-9xl font-extrabold text-white">
              Naga
            </span>
            <span
              className="text-7xl lg:text-9xl font-bold text-transparent"
              style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)" }}
            >
              Arjun
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 bottom-12 flex justify-center gap-4 px-6"
          >
            <Link
              to="/gallery"
              className="group relative flex items-center justify-center gap-4 px-8 py-5 bg-white text-black font-semibold uppercase tracking-widest text-xs overflow-hidden transition-all hover:scale-105 rounded-full max-w-[240px]"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Play className="w-4 h-4 fill-black" /> <span className="whitespace-nowrap">View Portfolio</span>
              </span>
              <div className="absolute inset-0 bg-brand-orange translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </Link>

            <a
              href="https://res.cloudinary.com/dfynxuxzn/image/upload/v1778769805/Black_And_White_Minimalist_Professional_Resume_A4_pmmx9i.png"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full font-mono text-xs text-white uppercase tracking-[0.2em] transition-all hover:scale-105 flex items-center justify-center"
            >
              View Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Timecode / Camera HUD Decorative Elements */}
      <motion.div 
        style={{ opacity }}
        className="absolute top-24 left-8 hidden md:flex flex-col font-mono text-[10px] text-gray-500 tracking-[0.2em] z-20"
      >
        <span className="text-white/60">TCR 01:04:32:15</span>
        <span>REC 23.976 FPS</span>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="absolute top-24 right-8 hidden md:flex flex-col font-mono text-[10px] text-gray-500 tracking-[0.2em] text-right z-20"
      >
        <span className="text-white/60">ISO 800</span>
        <span>5600K</span>
      </motion.div>

      {/* Dynamic Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 right-12 flex flex-col items-end gap-3 z-30"
      >
         <span className="font-mono text-[9px] text-gray-400 uppercase tracking-[0.2em] rotate-90 origin-right translate-x-3 -translate-y-8">
           Scroll
         </span>
         <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
            <motion.div 
              className="w-full h-full bg-brand-orange origin-bottom"
              animate={{ scaleY: [0, 1, 0], translateY: ["100%", "0%", "-100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
         </div>
      </motion.div>
    </section>
  );
}
