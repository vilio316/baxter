'use client';

import { useState, useRef, useEffect } from 'react';
import ProgressBar from '../components/ProgressBar';

type Course = {
  id: string;
  title: string;
  youtubeurl: string;
  content: string;
  duration?: string;
};

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [player, setPlayer] = useState<any>(null);
  const [progress, setProgress] = useState(0);
  const playerRef = useRef<HTMLDivElement>(null);
  const videoId = course.youtubeurl?.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/
  )?.[1];

  useEffect(() => {
    const savedProgress = JSON.parse(
      localStorage.getItem('courseProgress') || '{}'
    );
    setProgress(savedProgress[course.id] || 0);
  }, [course.id]);

  useEffect(() => {
    if (progress > 0) {
      const savedProgress = JSON.parse(
        localStorage.getItem('courseProgress') || '{}'
      );
      savedProgress[course.id] = progress;
      localStorage.setItem('courseProgress', JSON.stringify(savedProgress));
    }
  }, [progress, course.id]);

  // YouTube Player API
  useEffect(() => {
    if (!showVideo || !videoId) return;

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new window.YT.Player(playerRef.current, {
        videoId,
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
      setPlayer(ytPlayer);
    };

    return () => {
      if (window.onYouTubeIframeAPIReady) {
        window.onYouTubeIframeAPIReady = () => {};
      }
    };
  }, [showVideo, videoId]);

  const onPlayerReady = (event: any) => {
    if (progress > 0) {
      const duration = event.target.getDuration();
      event.target.seekTo((duration * progress) / 100);
    }
  };

  const onPlayerStateChange = (event: any) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      const interval = setInterval(() => {
        if (player && player.getCurrentTime && player.getDuration) {
          const newProgress =
            (player.getCurrentTime() / player.getDuration()) * 100;
          setProgress(Math.min(newProgress, 100));
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  };

  const extractLearnSection = (content: string) => {
    const learnMatch = content.match(
      /#### What (?:you'll|you will) learn([\s\S]*?)(?=####|$)/i
    );
    return learnMatch ? learnMatch[1].trim() : content.split('\n')[0];
  };

  const contentPreview = extractLearnSection(course.content);
  const showSeeMore =
    contentPreview.length > 100 || course.content.includes('####');

  const handleVideoClick = () => {
    setShowVideo(true);
    // Track clicked videos in localStorage
    const watched = JSON.parse(localStorage.getItem('watchedVideos') || '[]');
    if (!watched.includes(course.id)) {
      watched.push(course.id);
      localStorage.setItem('watchedVideos', JSON.stringify(watched));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Video Player or Thumbnail */}
      <div className="relative aspect-video">
        {showVideo && videoId ? (
          <div className="relative w-full h-full">
            <div ref={playerRef} className="w-full h-full" />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
              aria-label="Close video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ) : videoId ? (
          <button
            onClick={handleVideoClick}
            className="w-full h-full relative group"
            aria-label="Play video"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
              <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center hover:bg-primary transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            {progress > 0 && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                <div
                  className="h-full bg-green-600"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </button>
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No video available</span>
          </div>
        )}
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <h2 className="text-xl font-semibold text-[#131712] mb-2">
          {course.title}
        </h2>

        <div className="text-gray-600 mb-4 flex-grow">
          {expanded ? (
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: course.content }}
            />
          ) : (
            <>
              <div className="prose max-w-none line-clamp-3">
                {contentPreview.length > 100
                  ? `${contentPreview.substring(0, 100)}...`
                  : contentPreview}
              </div>
              {showSeeMore && (
                <button
                  onClick={() => setExpanded(true)}
                  className="text-[#53D22C] hover:text-[#131712] text-sm font-medium mt-1"
                >
                  See more
                </button>
              )}
            </>
          )}
        </div>

        {/* Progress and Action Buttons */}
        <div className="mt-auto">
          {!videoId && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
            >
              {expanded ? 'Show Less' : 'Read Content'}
            </button>
          )}
          {expanded && (
            <button
              onClick={() => setExpanded(false)}
              className="mt-2 w-full  bg-[#131712] text-[#53D22C] hover:text-primary-dark font-medium py-1 px-4 rounded transition-colors duration-300"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
