import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isGallery = location.pathname === "/gallery";

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const links = [
    { name: "About", href: isGallery ? "/#about" : "#about" },
    { name: "Portfolio", href: isGallery ? "/#portfolio" : "#portfolio" },
    { name: "Services", href: isGallery ? "/#services" : "#services" },
    { name: "Contact", href: isGallery ? "/#contact" : "#contact" },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${
          scrolled || isGallery ? "bg-brand-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-xl tracking-tighter flex items-center gap-1">
            N-A <span className="text-brand-orange">FOLIO</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-8 font-mono text-sm tracking-widest uppercase">
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-gray-400 hover:text-white transition-colors relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-blue transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <button className="hidden md:block px-6 py-2 border border-white/20 hover:border-brand-blue hover:text-brand-blue transition-colors font-mono text-xs uppercase tracking-widest rounded-sm">
            Let's Talk
          </button>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-brand-black/95 backdrop-blur-xl flex flex-col justify-center items-center"
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <ul className="flex flex-col items-center space-y-8 font-display text-4xl font-bold uppercase tracking-tighter">
            {links.map((link, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a 
                  href={link.href} 
                  className="text-white hover:text-brand-blue transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}

