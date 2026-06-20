import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-brand-black relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="font-sans text-[40px] font-semibold text-white mb-4 tracking-tight">
            Let's Work Together
          </h2>
          
          <p className="text-[#64748b] font-normal text-[17px] mb-10">
            I create impactful designs and cinematic videos that elevate your brand.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:arjunvishwa48@gmail.com" 
              className="group relative w-full sm:w-auto px-8 py-3.5 bg-white text-black font-medium text-[15px] rounded-full overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center justify-center group-hover:text-white transition-colors duration-300 gap-2">
                Hire Me
              </span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            
            <a 
              href="#portfolio" 
              className="group relative w-full sm:w-auto px-8 py-3.5 border border-white/20 text-white font-medium text-[15px] rounded-full overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center justify-center group-hover:text-black transition-colors duration-300 gap-2">
                View Portfolio
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-[#64748b] text-[15px]">
            <a href="mailto:arjunvishwa48@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> arjunvishwa48@gmail.com
            </a>
            <a href="tel:7806963132" className="hover:text-white transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" /> 7806963132
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
