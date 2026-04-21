import { Wind } from 'lucide-react';
import { amenityIcons } from './amenityIcons';

const AmenityItem = ({ amenity }) => {
  const IconComponent = amenityIcons[amenity] || Wind;
  
  return (
    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-gray-700">
        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <span className="text-gray-700 text-sm sm:text-base">{amenity}</span>
    </div>
  );
};

export default AmenityItem;