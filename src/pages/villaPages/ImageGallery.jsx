const ImageGallery = ({ images, columns = 2 }) => {
  const isThreeColumns = columns === 3;
  const gridClass = isThreeColumns
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
    : "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6";
  const imageHeightClass = isThreeColumns
    ? "h-56 sm:h-64 xl:h-72"
    : "h-56 sm:h-64 md:h-80";

  return (
    <div className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={gridClass}>
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative ${imageHeightClass} rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group`}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;