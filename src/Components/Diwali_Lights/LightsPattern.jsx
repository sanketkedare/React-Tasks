import { useEffect, useState } from "react";

// Static light pattern component
export const StaticLights = () => (
  <div className="text-black h-full bg-yellow-400 border rounded-xl"></div>
);

// Fading light pattern with adjustable duration
export const FadingLights = ({ duration, pause, setDuration }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (!pause) {
      const interval = setInterval(() => {
        setOpacity((prev) => (prev >= 1 ? 0.1 : prev + 0.05));
      }, duration * 100);

      return () => clearInterval(interval);
    }
  }, [pause, duration]);

  useEffect(() => {
    if (duration <= 0) setDuration(1); // Set minimum duration to 1 second if invalid
  }, [duration]);

  return <div className="h-full bg-yellow-400 border rounded-xl" style={{ opacity }}></div>;
};

// Blinking light pattern with adjustable duration
export const BlinkingLights = ({ duration, pause, setDuration }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (!pause) {
      const interval = setInterval(() => {
        setOpacity((prev) => (prev === 1 ? 0 : 1));
      }, (duration / 2) * 500);

      return () => clearInterval(interval);
    }
  }, [pause, duration]);

  useEffect(() => {
    if (duration <= 0) setDuration(1); // Set minimum duration to 1 second if invalid
  }, [duration]);

  return <div className="h-full bg-yellow-400 border rounded-xl" style={{ opacity }}></div>;
};
