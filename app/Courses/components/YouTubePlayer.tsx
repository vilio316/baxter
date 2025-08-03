'use client';

import { useEffect, useRef } from 'react';

type YouTubePlayerProps = {
  videoId: string;
  className?: string;
};

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YouTubePlayer({ videoId, className = '' }: YouTubePlayerProps) {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player(playerRef.current!, {
        videoId,
        playerVars: {
          modestbranding: 1,
          rel: 0
        }
      });
    };

    return () => {
      if (window.YT) window.YT = undefined;
    };
  }, [videoId]);

  return <div ref={playerRef} className={`w-full aspect-video ${className}`} />;
}