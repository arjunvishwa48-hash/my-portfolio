import { motion } from "motion/react";
import { Scissors, Fingerprint, Layers, MonitorPlay } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Cinematic Editing",
      description: "Crafting cinematic cuts, smooth pacing, and visually engaging sequences that enhance storytelling and audience connection."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "SOCIAL MEDIA CONTENT",
      description: "Creating reels and short-form videos optimized for engagement, audience retention, and platform performance."
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "POST-PRODUCTION",
      description: "Professional editing workflows including color correction, transitions, sound sync, and final visual enhancement."
    },
    {
      icon: <MonitorPlay className="w-8 h-8" />,
      title: "CREATIVE WORKFLOW",
      description: "Collaborating with creative teams and clients to transform ideas into polished, high-quality visual content."
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-charcoal relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 text-brand-orange font-mono text-xs uppercase tracking-widest mb-4">
                <span className="w-8 h-[1px] bg-brand-orange block"></span>
                EXPERTISE
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6 leading-tight">
                VISUAL <br />
                <span className="text-stroke">EDITING</span>
              </h2>
              <p className="text-gray-400 font-light text-lg mb-8">
                Creating cinematic edits, branded content, and engaging social media visuals with a focus on storytelling, rhythm, and clean post-production workflows.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-brand-charcoal p-10 lg:p-12 group hover:bg-brand-gray transition-colors duration-500"
              >
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 text-gray-500 group-hover:text-brand-blue group-hover:border-brand-blue/50 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-white text-gray-200">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
