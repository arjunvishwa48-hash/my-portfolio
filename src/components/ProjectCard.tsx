import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play, Maximize2 } from "lucide-react";
import { Project } from "../projectsData";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

// Extract Google Drive File ID
const getGoogleDriveId = (url: string | undefined): string | null => {
  if (!url) return null;
  if (url.includes("drive.google.com") || url.includes("docs.google.com")) {
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) return match[1];
  }
  return null;
};

// Convert URL into embeddable iframe URL for grid card (muted autoplay, looped, no controls)
const getCardEmbedUrl = (url: string | undefined): string => {
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
    const videoId = url.split("/shorts/")[1]?.split(/[?#&]/)[0];
    if (videoId) return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;
  }

  // YouTube watch / youtu.be
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    let videoId = "";
    if (url.includes("youtube.com/watch")) {
      try {
        videoId = new URLSearchParams(new URL(url).search).get("v") || "";
      } catch {
        videoId = url.match(/[?&]v=([a-zA-Z0-9_-]+)/)?.[1] || "";
      }
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split(/[?#&]/)[0];
    } else if (url.includes("youtube.com/embed/")) {
      videoId = url.split("youtube.com/embed/")[1]?.split(/[?#&]/)[0];
    }
    if (videoId) return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;
  }

  // Vimeo
  if (url.includes("vimeo.com")) {
    const match = url.match(/(?:\/)(\d+)(?:\?|$)/);
    if (match && match[1]) {
      return `https://player.vimeo.com/video/${match[1]}?autoplay=1&playsinline=1&muted=1&background=1&loop=1`;
    }
  }

  return url;
};

// Convert URL into embeddable iframe URL for modal (unmuted autoplay, full controls)
const getModalEmbedUrl = (url: string | undefined): string => {
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
    const videoId = url.split("/shorts/")[1]?.split(/[?#&]/)[0];
    if (videoId) return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1&controls=1`;
  }

  // YouTube watch / youtu.be
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    let videoId = "";
    if (url.includes("youtube.com/watch")) {
      try {
        videoId = new URLSearchParams(new URL(url).search).get("v") || "";
      } catch {
        videoId = url.match(/[?&]v=([a-zA-Z0-9_-]+)/)?.[1] || "";
      }
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split(/[?#&]/)[0];
    } else if (url.includes("youtube.com/embed/")) {
      videoId = url.split("youtube.com/embed/")[1]?.split(/[?#&]/)[0];
    }
    if (videoId) return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1&controls=1`;
  }

  // Vimeo
  if (url.includes("vimeo.com")) {
    const match = url.match(/(?:\/)(\d+)(?:\?|$)/);
    if (match && match[1]) {
      return `https://player.vimeo.com/video/${match[1]}?autoplay=1&playsinline=1`;
    }
  }

  return url;
};

// Convert Google Drive sharing URL to a displayable image via lh3 CDN
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

const isGoogleDriveUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  return url.includes("drive.google.com") || url.includes("docs.google.com");
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [useFallbackIframe, setUseFallbackIframe] = useState(false);
  const [useModalFallbackIframe, setUseModalFallbackIframe] = useState(false);
  
  const hasVideo = !!project.videoUrl;
  const isDrive = isGoogleDriveUrl(project.videoUrl);
  const driveId = getGoogleDriveId(project.videoUrl);
  const isReel = project.category === "Reel";

  // Body scroll lock when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className={`group flex flex-col bg-brand-charcoal border border-white/5 overflow-hidden shadow-2xl rounded-sm hover:border-brand-orange transition-all duration-500 ease-out cursor-pointer ${
          className || project.span || ""
        }`}
      >
        {/* Media container */}
        <div className={`w-full bg-black overflow-hidden relative ${isReel ? "aspect-[9/16]" : "aspect-video"}`}>
          
          {/* Category Overlay Badge */}
          <div className="absolute top-3 left-3 z-30 backdrop-blur-md bg-black/60 border border-white/10 px-2.5 py-1 font-mono text-[8px] text-white/90 tracking-widest uppercase rounded-sm pointer-events-none">
            {project.category}
          </div>

          {hasVideo ? (
            <>
              {isDrive && driveId && !useFallbackIframe ? (
                <video
                  src={`https://drive.google.com/uc?export=download&id=${driveId}`}
                  className="w-full h-full object-cover pointer-events-none"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onError={() => {
                    console.warn(`Direct stream failed for card preview of ${project.title}, falling back to iframe`);
                    setUseFallbackIframe(true);
                  }}
                />
              ) : (
                <iframe
                  src={getCardEmbedUrl(project.videoUrl)}
                  className="w-full h-full border-0 pointer-events-none scale-105"
                  allow="autoplay; encrypted-media"
                  loading="lazy"
                  title={project.title}
                />
              )}
              {/* Visual indicator (Play icon badge on hover) */}
              <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center pointer-events-none">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:border-brand-orange transition-colors">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <img
                src={getImageUrl(project.image)}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              {/* Visual indicator (Maximize icon on hover) */}
              <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center pointer-events-none">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:border-brand-orange transition-colors">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Modal Lightbox — plays unmuted on our page ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`relative w-full bg-[#0a0a0a] shadow-2xl rounded-sm border border-white/10 overflow-hidden flex flex-col max-h-[92vh] ${isReel ? "max-w-md" : "max-w-5xl"}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header bar */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-white/5 bg-black/60 select-none">
                <div className="min-w-0 pr-4">
                  <span className="font-mono text-[9px] text-brand-orange uppercase tracking-[0.2em] mb-0.5 block">
                    {project.category}
                  </span>
                  <h4 className="font-display text-sm md:text-base font-bold uppercase text-white truncate">
                    {project.title}
                  </h4>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 bg-white/5 hover:bg-brand-orange text-white hover:text-black transition-colors rounded-full backdrop-blur-md shrink-0 cursor-pointer"
                  title="Close player"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Player - HTML5 with iframe fallback for Drive, iframe for YT/Vimeo, img for Graphic Design */}
              <div className="w-full flex-grow flex items-center justify-center bg-black overflow-hidden relative min-h-[250px] md:min-h-[450px]">
                {hasVideo ? (
                  isDrive && driveId && !useModalFallbackIframe ? (
                    <video
                      src={`https://drive.google.com/uc?export=download&id=${driveId}`}
                      className="w-full h-full max-h-[70vh] object-contain animate-fadeIn"
                      controls
                      autoPlay
                      playsInline
                      onError={() => {
                        console.warn(`Direct stream failed for modal player of ${project.title}, falling back to iframe`);
                        setUseModalFallbackIframe(true);
                      }}
                    />
                  ) : (
                    <iframe
                      src={getModalEmbedUrl(project.videoUrl)}
                      className={`border-0 ${
                        isReel 
                          ? "w-auto max-w-full h-full max-h-[70vh] aspect-[9/16]" 
                          : "w-full aspect-video max-h-[70vh]"
                      }`}
                      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                      allowFullScreen
                      title={project.title}
                    />
                  )
                ) : (
                  <img
                    src={getImageUrl(project.image)}
                    alt={project.title}
                    className="max-w-full max-h-[70vh] object-contain shadow-2xl rounded-sm p-2"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
