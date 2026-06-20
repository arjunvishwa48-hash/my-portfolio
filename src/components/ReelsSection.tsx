import React from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';

export default function ReelsSection() {
  const { reels } = usePortfolio();
  return (
    <section id="reels" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 text-brand-blue font-mono text-xs uppercase tracking-[0.2em] mb-4">
            <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse"></span>
            Short Form
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-tight mb-4">
            Cinematic <span className="text-stroke text-transparent italic">Reels</span>
          </h2>
          <p className="font-mono text-xs md:text-sm text-gray-400 uppercase tracking-[0.2em] max-w-2xl mx-auto">
            Short-form edits, cinematic cuts, and visual storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-[9/16] w-full bg-brand-charcoal rounded-[24px] overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-brand-orange/20 border border-white/5">
                <iframe
                  src={reel.url}
                  className="absolute inset-0 w-full h-full z-10"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Cinematic Reel ${reel.id}`}
                  style={{ border: 'none' }}
                />
                
                {/* Visual Overlay for Cinematic Look */}
                <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-[24px] z-20 group-hover:border-brand-orange/30 transition-colors duration-500" />
                
                {/* Subtle Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-gradient-to-t from-brand-orange/5 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Decorative Lines */}
        <div className="mt-20 flex items-center justify-center gap-4 opacity-20">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-white"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-white"></div>
        </div>
      </div>
    </section>
  );
}
