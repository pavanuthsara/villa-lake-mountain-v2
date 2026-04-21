import React, { useState, useEffect } from 'react';
// image imports
import intro1 from "../assets/introImages/intro1.webp"
import intro2 from "../assets/introImages/intro2.webp"
import intro3 from "../assets/introImages/intro3.webp"

const IntroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {
      id: 1,
      src: intro2,
      alt: "Relaxing in hammock by the lake",
      className: ""
    },
    {
      id: 2,
      src: intro1,
      alt: "Authentic Sri Lankan villa interior",
      className: ""
    },
    {
      id: 3,
      src: intro3,
      alt: "Modern comfort and local charm",
      className: ""
    }
  ];

  // Auto slideshow for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Text */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
            Breathe. Unwind. Belong.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the perfect blend of authentic Sri Lankan hospitality
            <br />
            and modern comfort
          </p>
        </div>

        {/* Image Grid - Desktop and Tablet */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-tr-3xl rounded-bl-3xl"
            >
              <div className={`aspect-[4/5] overflow-hidden ${image.className}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slideshow */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image) => (
                <div
                  key={image.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gray-800 scale-125'
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;