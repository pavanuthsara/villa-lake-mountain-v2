import React from 'react';
//import components
import VillaNav from '../VillaNav';
import AmenitiesSection from '../AmenitiesSection';
import ImageGallery from '../ImageGallery';
import Footer from '../../../components/Footer';

import { MessageCircle } from 'lucide-react';

// Import images
import bedroom1 from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_bedroom1.webp';
import couple from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_couple.webp';
import inside from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_inside.webp';
import buddhistStatue from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_inside_buddist_statue.webp';
import lobby from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_lobby.webp';
import outdoor1 from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_outdoor1.webp';
import outdoorGirl from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_outdoor_girl.webp';
import outdoorGirlWorking from '../../../assets/villaPages/groundVillaImages/villa_lake_mountain_outdoor_girl_working.webp';

// Lake House Main Component
const GroundVilla = () => {
  const descriptions = [
    "Your private lakeside retreat with direct lake access, secluded garden, and intimate setting for three guests.",
    "Perfect for couples seeking tranquil mornings by the water and peaceful evenings in your own backyard sanctuary."
  ];

  const experiencePoints = [
    {
      title: "Your Private Lakeside Retreat",
      items: [
        "Direct lake access from your doorstep",
        "A secluded garden wrapped in tropical greenery",
        "An intimate setting designed for three guests"
      ]
    },
    {
      title: "Comfort & Convenience",
      items: [
        "Air conditioning with ceiling fans",
        "Hot water supply and mosquito nets",
        "Fast wifi with a dedicated desk space"
      ]
    },
    {
      title: "Kitchen & Dining",
      items: [
        "Fully equipped kitchen with cooking basics",
        "Refrigerator, dishes and silverware",
        "Dining table for relaxed meals"
      ]
    },
    {
      title: "Outdoor Living",
      items: [
        "Private backyard with patio and hammock",
        "BBQ grill for evening cookouts",
        "Free parking on premises"
      ]
    }
  ];

  const amenities = [
    'Air conditioning',
    'Wifi',
    'Washing machine',
    'Refrigerator',
    'Sleeps three',
    'Lake access',
    'Private entrance',
    'Private garden',
    'Mosquito net',
    'Hot water',
    'Patio',
    'Desk Space',
    'Ceiling fan',
    'Dining table',
    'Essentials',
    'Dishes and silverware',
    'Bed linens',
    'Private Backyard',
    'Cooking basics',
    'Hammock',
    'Kitchen',
    'BBQ grill',
    'Free parking on premises',
    'Long term stays allowed'
  ];

  const images = [
    {
      url: bedroom1,
      alt: "Lake house bedroom with comfortable bed"
    },
    {
      url: couple,
      alt: "Couple enjoying the lake house"
    },
    {
      url: inside,
      alt: "Interior view of the lake house"
    },
    {
      url: buddhistStatue,
      alt: "Interior with Buddhist statue decoration"
    },
    {
      url: lobby,
      alt: "Lake house lobby area"
    },
    {
      url: outdoor1,
      alt: "Outdoor area of the lake house"
    },
    {
      url: outdoorGirl,
      alt: "Guest enjoying the outdoor space"
    },
    {
      url: outdoorGirlWorking,
      alt: "Working space in outdoor area"
    }
  ];

  const handleBookNow = () => {
    const message = 'Hello, I would like to book the Ground Villa.';
    const phoneNumber = '+917709589459';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <VillaNav currentPage="ground" />

      {/* Header: two-column layout */}
      <div className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4 sm:mb-6 leading-tight">
            Ground Villa
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

export default GroundVilla;