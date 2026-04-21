// component imports
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import VillaSection from "../components/VillaSection";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import ReviewsSection from "../components/ReviewsSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <IntroSection />
      <VillaSection />
      <ServicesSection />
      <ReviewsSection />
      <Footer />
    </>
  )
}

export default HomePage;