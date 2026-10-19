import React, { useEffect, useRef } from 'react';

export const VIDEO_SRC = 'https://res.cloudinary.com/duuymckft/video/upload/v1792405275/ipaxgku2tgjo5siqbnxw.mp4';

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if GSAP and ScrollTrigger are loaded from CDN
    const win = window as any;
    if (win.gsap && win.ScrollTrigger && videoRef.current) {
      win.gsap.registerPlugin(win.ScrollTrigger);

      win.gsap.to(videoRef.current, {
        scale: 1.22,
        opacity: 0.45,
        filter: 'blur(7px)',
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
        },
      });
    }
  }, []);

  return (
    <>
      {/* 1. Background Video with fixed position, full viewport, z-index -1 */}
      <video
        ref={videoRef}
        id="velo-bg-video"
        className="fixed top-0 left-0 w-screen h-screen -z-10 object-cover pointer-events-none will-change-transform"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          objectFit: 'cover',
          transformOrigin: 'center center',
        }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={VIDEO_SRC} type="video/mp4" />
        Sizin brauzeriniz video formatını dəstəkləmir.
      </video>

      {/* 2. Dark Overlay with strictly pointer-events: none so mouse scroll flows uninterrupted */}
      <div
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          background:
            'radial-gradient(circle at 50% 20%, rgba(10, 13, 18, 0.6) 0%, rgba(10, 13, 18, 0.88) 70%, rgba(10, 13, 18, 0.98) 100%)',
        }}
      />
    </>
  );
};
