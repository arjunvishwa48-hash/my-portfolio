import { motion } from "motion/react";
import profileImage from "../assets/images/regenerated_image_1778395298526.png";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4 text-brand-blue font-mono text-xs uppercase tracking-widest">
              <span className="w-12 h-[1px] bg-brand-blue block"></span>
              Who I Am
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight uppercase tracking-tight">
              About Me
            </h2>
            
            <div className="space-y-6 text-gray-400 font-light text-lg">
              <p>
                I’m M.S. Naga Arjun, a Video Editor and Visual Storyteller with 2+ years of experience in cinematic editing, branded content, and social media videos.
              </p>
              <p>
                Specialized in post-production, color grading, and visual storytelling, I create clean, engaging, and impactful edits using Premiere Pro, After Effects, Photoshop, Illustrator, and DaVinci Resolve.
              </p>
            </div>
            
            <div className="mt-8 flex gap-8">
              <div>
                <motion.span 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  viewport={{ once: true }}
                  className="block font-display text-4xl font-bold text-white mb-2"
                >2+</motion.span>
                <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block">Years Exp.</span>
              </div>
              <div>
                <motion.span 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="block font-display text-4xl font-bold text-white mb-2"
                >150+</motion.span>
                <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block">Projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm group">
              <img 
                src={profileImage} 
                alt="M.S. Naga Arjun" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Cinematic crop marks */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-brand-blue"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-brand-blue"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
