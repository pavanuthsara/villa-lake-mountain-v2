import AmenityItem from './AmenityItem';

const AmenitiesSection = ({ amenities }) => {
  return (
    <div className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-6 sm:mb-8">Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2">
          {amenities.map((amenity, index) => (
            <AmenityItem key={index} amenity={amenity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;