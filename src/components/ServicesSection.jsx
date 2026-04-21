// Import service icons
import motorcycleIcon from "../assets/serviceIcons/motorcycle.png";
import carIcon from "../assets/serviceIcons/car.png";
import bicycleIcon from "../assets/serviceIcons/bicycle.png";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      number: "01",
      title: "Scooter Rental",
      description:
        "Hop on and cruise — your shortcut to discovering hidden beaches, local markets, and scenic coastal roads at your own pace.",
      icon: motorcycleIcon,
    },
    {
      id: 2,
      number: "02",
      title: "Airport Shuttle",
      description:
        "Smooth rides to the skies, with comfort built in. We handle your pickup and drop-off so your journey starts stress-free.",
      icon: carIcon,
    },
    {
      id: 3,
      number: "03",
      title: "Cycling Tour",
      description:
        "Ride, explore, and feel the heartbeat of the countryside. Guided routes through paddy fields, villages, and lakeside trails.",
      icon: bicycleIcon,
    },
  ];

  return (
    <section id="services" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-[#586460] mb-3 font-medium">
            Explore &amp; Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="block w-12 h-px bg-[#586460]/30"></span>
            <span className="block w-2 h-2 rounded-full bg-[#586460]/40"></span>
            <span className="block w-12 h-px bg-[#586460]/30"></span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl p-8 sm:p-10
                         border border-gray-100
                         shadow-sm hover:shadow-xl
                         hover:-translate-y-2
                         transition-all duration-300 ease-out
                         overflow-hidden"
            >
              {/* Subtle hover accent — bottom border glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#586460]
                           transform scale-x-0 group-hover:scale-x-100
                           transition-transform duration-500 origin-center"
              ></div>

              {/* Number Badge */}
              <span className="inline-block text-xs font-semibold tracking-widest text-[#586460]/40 mb-6">
                {service.number}
              </span>

              {/* Styled Icon Container */}
              <div className="flex justify-center mb-8">
                <div
                  className="w-24 h-24 rounded-full bg-[#586460]/[0.12] 
                             flex items-center justify-center
                             group-hover:bg-[#586460]/[0.20]
                             transition-colors duration-300"
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-14 h-14 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-serif text-gray-900 mb-4 text-center">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-500 leading-relaxed text-center text-[15px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;