// components/useCourseProgress.ts
import { useState, useEffect } from 'react';

export default function useCourseProgress(courseId: string) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(`course-progress-${courseId}`);
    if (saved) setProgress(parseFloat(saved));
  }, [courseId]);

  const updateProgress = (value: number) => {
    const rounded = Math.round(value * 100) / 100; 
    setProgress(rounded);
    localStorage.setItem(`course-progress-${courseId}`, rounded.toString());
  };

  return { progress, updateProgress };
}
