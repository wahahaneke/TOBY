"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const journeyImages = [
  {
    src: "/images/rs=w_1160,h_853.webp",
    alt: "Toby riding motorcycle with sunglasses"
  },
  {
    src: "/images/rs=w_1160,h_863.webp",
    alt: "Toby with sunglasses"
  },
  {
    src: "/images/rs=w_1160,h_845.webp",
    alt: "Toby with hat"
  },
  {
    src: "/images/rs=w_1160,h_854.webp",
    alt: "Toby on motorcycle"
  },
  {
    src: "/images/rs=w_1160,h_853 (1).webp",
    alt: "Toby with sunglasses"
  }
];

// 缩略图
const thumbnails = [
  { src: "/images/rs=w_1160,h_853.webp", alt: "Thumbnail 1" },
  { src: "/images/rs=w_1160,h_863.webp", alt: "Thumbnail 2" },
  { src: "/images/rs=w_1160,h_845.webp", alt: "Thumbnail 3" },
  { src: "/images/rs=w_1160,h_854.webp", alt: "Thumbnail 4" },
  { src: "/images/rs=w_1160,h_853 (1).webp", alt: "Thumbnail 5" },
  { src: "/images/rs=w_1160,h_846.webp", alt: "Thumbnail 6" },
  { src: "/images/rs=w_1160,h_847.webp", alt: "Thumbnail 7" },
  { src: "/images/rs=w_1160,h_857.webp", alt: "Thumbnail 8" },
  { src: "/images/rs=w_1160,h_831.webp", alt: "Thumbnail 9" },
  { src: "/images/rs=w_1160,h_829.webp", alt: "Thumbnail 10" },
  { src: "/images/rs=w_1160,h_1163.webp", alt: "Thumbnail 11" },
  { src: "/images/rs=w_1160,h_1159.webp", alt: "Thumbnail 12" },
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
    <div className="bg-toby-darkbg py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="relative">
          {/* 主轮播图 */}
          <div className="relative overflow-hidden rounded-lg mb-2 aspect-[16/9]">
            {journeyImages.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* 左右导航箭头 */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 z-10"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 z-10"
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

          {/* 缩略图栏 */}
          <div className="flex overflow-x-auto gap-2 pb-2 mt-2">
            {thumbnails.map((thumbnail, index) => (
              <div 
                key={index}
                onClick={() => setCurrentIndex(index % journeyImages.length)}
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 relative rounded-md overflow-hidden cursor-pointer hover:opacity-90 transition-opacity ${
                  index % journeyImages.length === currentIndex ? 'ring-2 ring-toby-yellow' : ''
                }`}
              >
                <Image
                  src={thumbnail.src}
                  alt={thumbnail.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
