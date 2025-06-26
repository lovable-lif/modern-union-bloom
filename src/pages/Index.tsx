
import Hero from "@/components/Hero";
import CoupleSection from "@/components/CoupleSection";
import EventDetails from "@/components/EventDetails";
import LocationMap from "@/components/LocationMap";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
      <Hero />
      {/* <CoupleSection /> */}
      <EventDetails />
      <LocationMap />
      {/* <Gallery /> */}
      <Footer />
    </div>
  );
};

export default Index;
