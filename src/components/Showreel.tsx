import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, Video } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const getGoogleDriveDirectLink = (url: string | undefined): string => {
  if (!url) return "";
  if (url.includes("drive.google.com") || url.includes("docs.google.com")) {
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://docs.google.com/uc?export=download&id=${match[1]}`;
    }
  }
  return url;
};

export default function Showreel() {
  const { showreel } = usePortfolio();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoLoadError, setVideoLoadError] = useState(false);
  
  const isGoogleDrive = !!showreel.videoUrl && (
    showreel.videoUrl.includes("drive.google.com") || 
    showreel.videoUrl.includes("docs.google.com")
  );

  const isIframeVideo = !!showreel.videoUrl && (
    showreel.videoUrl.includes("drive.google.com") || 
    showreel.videoUrl.includes("docs.google.com") ||
    showreel.videoUrl.includes("youtube.com") || 
    showreel.videoUrl.includes("youtu.be") ||
    showreel.videoUrl.includes("vimeo.com")
  );

  const useIframe = isIframeVideo;

  // Helper to parse Google Drive & YouTube links into direct embed format
  const getEmbedUrl = (url: string | undefined): string => {
    if (!url) return "";
    
    // Google Drive
    if (url.includes("drive.google.com") || url.includes("docs.google.com")) {
      const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
      }
    }

    // YouTube Shorts
    if (url.includes("youtube.com/shorts/")) {
      const parts = url.split("/shorts/");
      if (parts[1]) {
        const videoId = parts[1].split(/[?#&]/)[0];
        return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`;
      }
    }

    // YouTube
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      let videoId = "";
      if (url.includes("youtube.com/watch")) {
        try {
          const urlParams = new URLSearchParams(new URL(url).search);
          videoId = urlParams.get("v") || "";
        } catch (e) {
          const match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
          if (match) videoId = match[1];
        }
      } else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1]?.split(/[?#&]/)[0];
      } else if (url.includes("youtube.com/embed/")) {
        return url;
      }
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`;
      }
    }

    // Vimeo
    if (url.includes("vimeo.com")) {
      const match = url.match(/(?:\/)([\d]+)(?:\?|$)/);
      if (match && match[1]) {
        return `https://player.vimeo.com/video/${match[1]}?autoplay=1`;
      }
    }
    
    return url;
  };

  // Helper to parse Google Drive image thumbnails
  const getImageUrl = (url: string): string => {
    if (!url) return "";
    if (url.includes("drive.google.com") || url.includes("docs.google.com")) {
      const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1200`;
      }
    }
    return url;
  };

  const embedUrl = getEmbedUrl(showreel.videoUrl);
  const imageUrl = getImageUrl(showreel.thumbnailUrl);

  return (
    <section id="showreel" className="py-32 relative flex items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Background with heavy blur */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageUrl || "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop"} 
          alt="Film set" 
          className="w-full h-full object-cover opacity-20 filter blur-xl scale-110 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal via-transparent to-brand-charcoal"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
              {showreel.title.split(' ')[0]} <span className="text-stroke">{showreel.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="font-mono text-gray-400 tracking-widest text-sm md:text-base uppercase">
              {showreel.subtitle}
            </p>
          </div>

          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-sm border border-white/10 overflow-hidden shadow-2xl"
          >
            {useIframe ? (
              <iframe 
                src={embedUrl}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Cinematic Showreel Player"
              />
            ) : isGoogleDrive ? (
              <video 
                src={getGoogleDriveDirectLink(showreel.videoUrl)}
                className="w-full h-full object-contain"
                controls
                autoPlay
                muted
                loop
                playsInline
                onError={() => {
                  console.warn("Direct stream failed for showreel, falling back to iframe");
                  setVideoLoadError(true);
                }}
              />
            ) : (
              <video 
                src={showreel.videoUrl}
                className="w-full h-full object-contain"
                controls
                autoPlay
                muted
                loop
                playsInline
              />
            )}
          </div>
        </motion.div>
      </div>

      {/* Marquee Text Background spanning across */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden pointer-events-none opacity-[0.03] flex whitespace-nowrap z-0">
        <h2 className="font-display text-[15vw] font-bold text-white uppercase tracking-tighter leading-none animate-marquee">
          CINEMATIC EDITING • MOTION DESIGN • BRAND IDENTITY • CREATIVE DIRECTION • 
        </h2>
        <h2 className="font-display text-[15vw] font-bold text-white uppercase tracking-tighter leading-none animate-marquee">
          CINEMATIC EDITING • MOTION DESIGN • BRAND IDENTITY • CREATIVE DIRECTION • 
        </h2>
      </div>
    </section>
  );
}
