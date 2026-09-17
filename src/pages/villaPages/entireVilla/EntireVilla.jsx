import React from 'react';
//import components
import VillaNav from '../VillaNav';
import AmenitiesSection from '../AmenitiesSection';
import ImageGallery from '../ImageGallery';
import Footer from '../../../components/Footer';

import { MessageCircle } from 'lucide-react';

// Import images
import entireVilla from '../../../assets/villaPages/entireVillaImages/entireVilla.webp';
import lobby from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_lobby.webp';
import inside from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_inside.webp';
import outdoorGirl from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_outdoor_girl.webp';
import balcony from '../../../assets/villaPages/upperVillaImages/villa_lake_mountain_balcony.webp';
import balconyForeigners from '../../../assets/villaPages/upperVillaImages/villa_lake_mountain_balcony_with_foreigners.webp';
import insideBed from '../../../assets/villaPages/upperVillaImages/villa_lake_mountain_inside_bed.webp';
import fourForeigners from '../../../assets/villaPages/upperVillaImages/four_foreigners.webp';

// Entire Villa Main Component - Mobile Responsive
const EntireVilla = () => {
  const descriptions = [
    "Enjoy a private group getaway with a full villa booking (upper and ground units combined) for up to ten guests.",
    "You'll get total privacy, tranquil nature views and a calm atmosphere away from the crowds."
  ];

  const experiencePoints = [
    {
      title: "A Whole Villa to Yourselves",
      items: [
        "Both upper and ground units combined",
        "Sleeps up to ten guests comfortably",
        "Total privacy away from the crowds"
      ]
    },
    {
      title: "Expansive Living Spaces",
      items: [
        "Multiple private bedrooms and living rooms",
        "Two fully equipped kitchens with dining areas",
        "Lake views from private balconies"
      ]
    },
    {
      title: "Comfort & Convenience",
      items: [
        "Air conditioning with ceiling fans",
        "Hot water supply with mosquito nets",
        "Washing machine and essentials for longer stays"
      ]
    },
    {
      title: "Outdoor & Leisure",
      items: [
        "Private lakeside garden and backyard",
        "BBQ grill, patio and hammock",
        "Free parking on premises"
      ]
    }
  ];

  const amenities = [
    'Air conditioning',
    'Wi-fi',
    'Lake access',
    'Lake views',
    'Sleeps ten',
    'Bed linens',
    'Hot water',
    'Ceiling fan',
    'Desk Space',
    'BBQ grill',
    'Refrigerator',
    'Kitchen & equipments',
    'Clothing storage',
    'Dining table',
    'Dishes and silverware',
    'Free parking on premises',
    'Private living room',
    'Private entrance',
    'Safe provided',
    'Mosquito nets',
    'Private garden',
    'Private Backyard',
    'Patio',
    'Hammock',
    'Cooking basics',
    'Essentials',
    'Washing machine',
    'Long term stays allowed'
  ];

  const images = [
    {
      url: entireVilla,
      alt: "Entire villa exterior view"
    },
    {
      url: balcony,
      alt: "Villa balcony with lake view"
    },
    {
      url: inside,
      alt: "Interior view of the villa"
    },
    {
      url: balconyForeigners,
      alt: "Villa balcony with guests enjoying the view"
    },
    {
      url: insideBed,
      alt: "Villa bedroom interior"
    },
    {
      url: outdoorGirl,
      alt: "Guest enjoying the outdoor space"
    },
    {
      url: lobby,
      alt: "Villa lobby area"
    },
    {
      url: fourForeigners,
      alt: "Guests enjoying their villa stay"
    }
  ];

  const handleBookNow = () => {
    const message = 'Hello, I would like to book the Entire Villa.';
    const phoneNumber = '+917709589459';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <VillaNav currentPage="entire" />

      {/* Header: two-column layout */}
      <div className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4 sm:mb-6 leading-tight">
            Entire Villa
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mt-6">
            {/* Left: key points */}
            <div className="space-y-8">
              {experiencePoints.map((point, index) => (
                <div key={point.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#608578]/10 text-[#608578] flex items-center justify-center font-serif font-semibold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
                    <ul className="mt-2 space-y-1.5">
                      {point.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-600 text-sm sm:text-base">
                          <span className="text-[#608578] mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: description + book now */}
            <div className="md:border-l md:border-gray-200 md:pl-14">
              <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-4">
                About your stay
              </h2>
              <div className="space-y-4">
                {descriptions.map((desc, index) => (
                  <p key={index} className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>
              <button
                onClick={handleBookNow}
                className="mt-6 sm:mt-8 inline-flex items-center gap-2 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                style={{ backgroundColor: "#608578ff" }}
              >
                <MessageCircle size={20} />
                <span>Book Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <AmenitiesSection amenities={amenities} />
      <ImageGallery images={images} columns={3} />
      <Footer />
    </div>
  );
};

export default EntireVilla;