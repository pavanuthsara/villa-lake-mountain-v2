//import components
import VillaNav from '../VillaNav';
import AmenitiesSection from '../AmenitiesSection';
import ImageGallery from '../ImageGallery';
import Footer from '../../../components/Footer';

import { MessageCircle } from 'lucide-react';

// Upper Villa Main Component - Mobile Responsive
const UpperVilla = () => {
  const descriptions = [
    "Experience luxury and comfort in our spacious upper villa, perfectly designed for families and groups seeking a memorable retreat.",
    "Wake up to breathtaking lake views and enjoy modern amenities in a serene natural setting."
  ];

  const experiencePoints = [
    {
      title: "Elevated Luxury Living",
      items: [
        "Three private balconies with panoramic lake views",
        "A dedicated private living room for relaxation",
        "Spacious layout that sleeps up to six guests"
      ]
    },
    {
      title: "Comfort & Convenience",
      items: [
        "Air conditioning with ceiling fans",
        "Hot water supply with mosquito nets",
        "Clothing storage, safe and bed linens provided"
      ]
    },
    {
      title: "Kitchen & Dining",
      items: [
        "Fully equipped kitchen and equipment",
        "Dining table for group meals",
        "Dishes and silverware for effortless hosting"
      ]
    },
    {
      title: "Privacy & Security",
      items: [
        "Private entrance for complete seclusion",
        "Free parking on premises",
        "Safe provided and long term stays allowed"
      ]
    }
  ];

  const amenities = [
    'Air conditioning',
    'Wi-fi',
    'Lake views',
    'Mosquito nets',
    'Sleeps six',
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
    'Hot water',
    'Private living room',
    'Private entrance',
    'Safe provided',
    'Long term stays allowed'
  ];

  const images = [
    {
      url: "/src/assets/villaPages/upperVillaImages/upper_villa_outside.webp",
      alt: "Upper villa exterior view"
    },
    {
      url: "/src/assets/villaPages/upperVillaImages/villa_lake_mountain_balcony.webp",
      alt: "Villa balcony with lake view"
    },
    {
      url: "/src/assets/villaPages/upperVillaImages/villa_lake_mountain_balcony_with_foreigners.webp",
      alt: "Villa balcony with guests enjoying the view"
    },
    {
      url: "/src/assets/villaPages/upperVillaImages/villa_lake_mountain_balcony_with_foreigner_3.webp",
      alt: "Villa balcony relaxation area"
    },
    {
      url: "/src/assets/villaPages/upperVillaImages/villa_lake_mountain_inside_bed.webp",
      alt: "Villa bedroom interior"
    },
    {
      url: "/src/assets/villaPages/upperVillaImages/villa_lake_mountain_balcony_2.webp",
      alt: "Villa balcony seating area"
    },
    {
      url: "/src/assets/villaPages/upperVillaImages/touriest_girl_balcony.webp",
      alt: "Guest enjoying the balcony view"
    },
    {
      url: "/src/assets/villaPages/upperVillaImages/four_foreigners.webp",
      alt: "Guests enjoying their stay"
    },
    {
      url: "/src/assets/villaPages/upperVillaImages/villa_lake_mountain_balcony_with_foreigner_2.webp",
      alt: "Balcony dining area with guests"
    }
  ];

  const handleBookNow = () => {
    const message = 'Hello, I would like to book the Upper Villa.';
    const phoneNumber = '+917709589459';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <VillaNav currentPage="upper" />

      {/* Header: two-column layout */}
      <div className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4 sm:mb-6 leading-tight">
            Upper Villa
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

export default UpperVilla;