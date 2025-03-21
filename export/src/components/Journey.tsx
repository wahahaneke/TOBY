"use client";

import { useState, useEffect } from "react";

const journeyImages = [
  {
    src: "https://ext.same-assets.com/1587180348/3448182306.jpeg",
    alt: "Toby meditating"
  },
  {
    src: "https://ext.same-assets.com/4204447306/1125872668.jpeg",
    alt: "Toby with headphones"
  },
  {
    src: "https://ext.same-assets.com/979644785/3009285852.jpeg",
    alt: "Toby image 3"
  },
  {
    src: "https://ext.same-assets.com/3228245434/3660774187.jpeg",
    alt: "Toby image 4"
  },
  {
    src: "https://ext.same-assets.com/3386419181/3316469660.jpeg",
    alt: "Toby image 5"
  }
];

export default function Journey() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % journeyImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % journeyImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? journeyImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-toby-darkbg py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-white font-archivo text-3xl md:text-4xl mb-12">
          TOBY&apos;S JOURNEY
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Image carousel */}
          <div className="relative overflow-hidden aspect-[4/3] rounded-lg">
            {journeyImages.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 z-10"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 z-10"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {journeyImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-toby-green" : "bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
