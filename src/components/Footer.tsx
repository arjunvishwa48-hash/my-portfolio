import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">

        <div className="flex items-center gap-1 font-display text-xl font-bold tracking-tighter">
          N-A <span className="text-brand-orange">FOLIO</span>
        </div>

        <div className="flex gap-6">
          {[
            { name: 'Instagram', href: 'https://www.instagram.com/ms.naga_arjun/' },
            { name: 'Behance', href: 'https://www.behance.net/nagaarjuneditor' },
            { name: 'LinkedIn', href: 'https://www.linkedin.com/in/naga-arjun-39b501292/?isSelfProfile=true' }
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-500 hover:text-white uppercase tracking-widest flex items-center gap-1 transition-colors"
            >
              {social.name} <ArrowUpRight className="w-3 h-3" />
            </a>
          ))}
        </div>

        <div className="font-mono text-xs text-gray-600 uppercase tracking-widest">
          © {new Date().getFullYear()} All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
