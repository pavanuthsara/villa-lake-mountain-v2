// Reusable Service Card Component
const ServiceCard = ({ service }) => {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
      {/* Service Icon/Illustration */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 flex items-center justify-center">
          <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Service Title */}
      <h3 className="text-2xl font-serif text-gray-900 mb-4">
        {service.title}
      </h3>

      {/* Service Description */}
      <p className="text-gray-600 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;