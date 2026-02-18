import { useState, useEffect, useRef } from "react";
import "./CFShowcase.css";

interface CFShowcaseProps {
  images: string[];
  title: string;
  description: React.ReactNode;
  reverse?: boolean;
  autoPlay?: boolean;
  slideInterval?: number; // milliseconds
}

export default function CFShowcase({
  images,
  title,
  description,
  reverse = false,
  autoPlay = true,
  slideInterval = 5000,
}: CFShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const intervalRef = useRef<number | null>(null);

  const startAutoPlay = () => {
    if (!autoPlay) return;

    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, slideInterval);
    setIsPlaying(true);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsPlaying(false);
    }
  };

  const resetAutoPlay = () => {
    stopAutoPlay();
    startAutoPlay();
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    resetAutoPlay();
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    resetAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [slideInterval, autoPlay, images.length]);

  return (
    <section className={`cf-showcase ${reverse ? "reverse" : ""}`}>
      {/* Carousel */}
      <div className="cf-carousel">
        <button className="cf-arrow left" onClick={goPrev}>
          ←
        </button>

        <img
          src={images[currentIndex]}
          alt="Showcase"
          className="cf-carousel-image"
        />

        <button className="cf-arrow right" onClick={goNext}>
          →
        </button>

        {/* Autoplay toggle */}
        <button
          className="cf-autoplay-toggle"
          onClick={isPlaying ? stopAutoPlay : startAutoPlay}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      {/* Text */}
      <div className="cf-showcase-text">
        <h2 className="cf-showcase-title">{title}</h2>
        <p className="cf-showcase-description">{description}</p>
      </div>
    </section>
  );
}
