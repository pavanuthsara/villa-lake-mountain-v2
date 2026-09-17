import React from 'react';
//import components
import VillaHeader from '../VillaHeader';
import VillaNav from '../VillaNav';
import AmenitiesSection from '../AmenitiesSection';
import ImageGallery from '../ImageGallery';
import Footer from '../../../components/Footer';

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

  return (
    <div className="min-h-screen bg-white">
      <VillaNav currentPage="entire" />
      <VillaHeader 
        title="Entire Villa" 
        descriptions={descriptions}
        villaType="entire"
      />
      <AmenitiesSection amenities={amenities} />
      <ImageGallery images={images} />
      <Footer />
    </div>
  );
};

export default EntireVilla;