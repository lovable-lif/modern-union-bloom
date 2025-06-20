
import { MapPin } from "lucide-react";

const LocationMap = () => {
  // Coordinates for Yala, Thailand (approximate)
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3423.7753141106436!2d101.25750257499072!3d6.263442393725183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTUnNDguNCJOIDEwMcKwMTUnMzYuMyJF!5e1!3m2!1sth!2sth!4v1750432071811!5m2!1sth!2sth";

  return (
    <section className="px-6 bg-sage-50" id="location">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-sage-400 text-3xl mb-4">❀</div>
          <h2 className="font-script text-4xl md:text-5xl text-sage-700 mb-4">
            Find Us Here
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent w-24 mx-auto mb-6"></div>
          <p className="font-serif text-sage-600 text-lg italic">
            We can't wait to celebrate with you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Location details */}
          <div className="lg:col-span-1 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-sage-100 h-full">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-sage-500 mr-3" />
                <h3 className="font-serif text-xl text-sage-700">Bannang Sata</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-sage-800 mb-1">Address</h4>
                  <p className="text-sage-600 font-sans">2/2 Moo 2 Bannang Sata Withee Road<br />T. Bannang Sata, A. Bannang Sata<br /> Yala, Thailand</p>
                </div>

                <div>
                  <h4 className="font-medium text-sage-800 mb-1">Nearby landmarks</h4>
                  <p className="text-sage-600 font-sans text-sm">
                    Located opposite PTT and Hospital, Bannang Sata, with nearby landmarks for your convenience
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-sage-200">
                <a
                  href="https://maps.app.goo.gl/LmtZr6UJL6j3ieZA7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-sage-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-sage-600 transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 animate-gentle-zoom pb-3" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-sage-100">
              <div className="aspect-video w-full">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wedding Venue Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
