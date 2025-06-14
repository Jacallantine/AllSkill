"use client";
import "../app/CSS/Carousel.css"
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 8000,
  slides,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative w-full md:h-[900px] h-[700px] rounded-xl shadow-lg">
      <div
        className="flex transition-transform ease-out duration-500 h-full w-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full h-full">
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${slide.href})` }}
            id="carousel"
          >
          <div className="flex flex-col">
              <p className="text-white md:text-3xl text-base font-semibold relative z-10 w-full max-w-[1100px] px-4">
              {slide.vouch}
            </p>

            <h1 className="md:text-4xl text-lg text-white z-10 text-right italic mt-8 px-4">
              {slide.pro}
            </h1>
          </div>
            
          </div>
        </div>
        
        ))}
      </div>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-2 shadow bg-white text-gray-900 hover:bg-gray-900 hover:text-white transition cursor-pointer md:[transform:translateY(0)] [transform:translateY(300px)]"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={next}
          className="p-2  shadow bg-white text-gray-900 hover:bg-gray-900 hover:text-white transition cursor-pointer md:[transform:translateY(0)] [transform:translateY(300px)]"
          aria-label="Next Slide"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurr(i)}
            className={`transition-all duration-300 w-3 h-3 rounded-full ${
              curr === i ? "bg-white scale-125 shadow" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
