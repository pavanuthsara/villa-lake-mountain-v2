import { useState, useEffect } from "react";
// import images
import DroneView from "../assets/heroImages/villaLakeMountainDroneView.webp";
import Hero2 from "../assets/heroImages/VillaLakeMountainTouristFamily.webp";
import Hero3 from "../assets/heroImages/villaLakeMountainGroundGirl.webp";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images - replace with your actual images
  const slides = [
    {
      id: 1,
      image: DroneView,
      alt: "Lakeside retreat view 1",
    },
    {
      id: 2,
      image: Hero2,
      alt: "Lakeside retreat view 2",
    },
    {
      id: 3,
      image: Hero3,
      alt: "Lakeside retreat view 3",
    },
  ];

  // Auto slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id='home' className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-5"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Escape to Serenity, Your Private Lakeside Retreat in Weligama
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Your home away from home. A perfect blend of natural beauty and
            local charm, all from the comfort of your private villa.
          </p>

          <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 transform hover:scale-105">
            About Us
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
