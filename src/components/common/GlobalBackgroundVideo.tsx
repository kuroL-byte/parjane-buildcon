import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { projects } from "@/data/content";

const DEFAULT_VIDEO = "/sample.mp4";

/**
 * Global background video that displays with 100% natural clarity, brightness,
 * and brilliance across all pages.
 *
 * Dynamically streams dedicated project videos when viewing `/projects/$slug`
 * and smoothly falls back to the default video if a project video is not yet provided.
 */
export function GlobalBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Detect if on a single project detail page
  const projectMatch = pathname.match(/^\/projects\/([^/?#]+)/);
  const currentSlug = projectMatch ? projectMatch[1] : null;
  const project = currentSlug ? projects.find((p) => p.slug === currentSlug) : null;

  // Determine target video source
  const targetSrc = project?.video || (currentSlug ? `/videos/projects/${currentSlug}.mp4` : DEFAULT_VIDEO);

  const [activeSrc, setActiveSrc] = useState(targetSrc);
  const [isFading, setIsFading] = useState(false);

  // Smoothly transition video when navigating to/from a project page
  useEffect(() => {
    if (targetSrc !== activeSrc) {
      setIsFading(true);
      const timer = setTimeout(() => {
        setActiveSrc(targetSrc);
        setIsFading(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [targetSrc, activeSrc]);

  // Ensure autoplay triggers properly when activeSrc updates
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.load();
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    }
  }, [activeSrc]);

  // Gracefully fall back to default background video if project video is absent or errors
  const handleVideoError = () => {
    if (activeSrc !== DEFAULT_VIDEO) {
      console.log(`[BackgroundVideo] Project video (${activeSrc}) not found or failed, falling back to ${DEFAULT_VIDEO}`);
      setActiveSrc(DEFAULT_VIDEO);
    }
  };

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-50 h-screen w-screen overflow-hidden pointer-events-none select-none bg-black"
    >
      {/* 100% Clear, Bright, and Natural Full-Screen Background Video */}
      <video
        key={activeSrc}
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onError={handleVideoError}
        className={`h-full w-full object-cover brightness-105 contrast-105 transition-opacity duration-500 ease-in-out ${
          isFading ? "opacity-30" : "opacity-100"
        }`}
      >
        <source src={activeSrc} type="video/mp4" />
      </video>
    </div>
  );
}

