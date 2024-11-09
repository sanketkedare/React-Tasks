import React, { useState, useEffect, useRef } from "react";
import { IMAGES } from "./utils";
import { BiArrowBack } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const intervalRef = useRef(null);

  // Preload images on component mount
  useEffect(() => {
    const preloadImages = IMAGES.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
    setLoadedImages(preloadImages);
  }, []);

  // Calculate previous and next indices
  const prevIndex = currentIndex === 0 ? loadedImages.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === loadedImages.length - 1 ? 0 : currentIndex + 1;

  // Handlers to navigate slides
  const rightSlider = () => {
    setCurrentIndex((prev) => (prev === loadedImages.length - 1 ? 0 : prev + 1));
  };

  const leftSlider = () => {
    setCurrentIndex((prev) => (prev === 0 ? loadedImages.length - 1 : prev - 1));
  };

  // Auto-slide logic with setInterval
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // Clear interval on unmount
  }, [loadedImages.length]);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(rightSlider, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h1 className="text-center mt-10 font-bold text-2xl">Image Slider</h1>

      <div className="flex w-[80%] m-auto justify-center items-center gap-10">
        <BiArrowBack
          onClick={leftSlider}
          className="text-5xl rounded-full border p-2 font-bold cursor-pointer bg-yellow-500 text-black hover:bg-sky-400"
        />

        <div className="relative w-full h-[450px] flex justify-center items-center overflow-hidden">
          {loadedImages.length > 0 && (
            <>
              {/* Previous Image */}
              <motion.img
                src={loadedImages[prevIndex].src}
                className="absolute left-10 w-[300px] h-[250px] opacity-50 z-10 rounded-md"
                style={{ transform: "scale(0.9)" }}
                alt="Previous Slide"
              />

              {/* Main Image */}
              <AnimatePresence>
                <motion.img
                  key={currentIndex}
                  src={loadedImages[currentIndex].src}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-[600px] h-[400px] z-30 rounded-lg shadow-lg border"
                  alt={`Slide ${currentIndex + 1}`}
                  onMouseEnter={stopAutoSlide} // Pause on hover
                  onMouseLeave={startAutoSlide} // Resume on leave
                />
              </AnimatePresence>

              {/* Next Image */}
              <motion.img
                src={loadedImages[nextIndex].src}
                className="absolute right-10 w-[300px] h-[250px] opacity-50 z-10 rounded-md"
                style={{ transform: "scale(0.9)" }}
                alt="Next Slide"
              />
            </>
          )}
        </div>

        <BsArrowRight
          onClick={rightSlider}
          className="text-5xl rounded-full border p-2 font-bold cursor-pointer bg-yellow-500 text-black hover:bg-sky-400"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
