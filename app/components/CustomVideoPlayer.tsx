'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function CustomVideoPlayer({ src, posterTime = 14.5 }: { src: string, posterTime?: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (!hasInteracted) {
        // Reset to beginning only on the very first interaction
        videoRef.current.currentTime = 0;
      }
      videoRef.current.play();
      videoRef.current.controls = true;
      setIsPlaying(true);
      setHasInteracted(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);
    
    video.addEventListener('pause', handlePause);
    video.addEventListener('play', handlePlay);
    
    return () => {
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('play', handlePlay);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <video 
        ref={videoRef}
        controls={hasInteracted}
        style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '75vh', objectFit: 'cover' }}
        preload="metadata"
        playsInline
      >
        <source src={`${src}#t=${posterTime}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {!isPlaying && (
        <button 
          onClick={handlePlayClick}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
          aria-label="Play Video"
        >
          <div style={{
            transition: 'transform 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
          >
            <svg width="80" height="80" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 4px 15px rgba(0,0,0,0.5))' }}>
              <path d="M7 4.5v15a1.5 1.5 0 0 0 2.3 1.25l11.5-7.5a1.5 1.5 0 0 0 0-2.5l-11.5-7.5A1.5 1.5 0 0 0 7 4.5z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
