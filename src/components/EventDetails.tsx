
import { Calendar, MapPin } from "lucide-react";

const EventDetails = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-sage-50" id="details">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-sage-400 text-3xl mb-4">❀</div>
          <h2 className="font-script text-4xl md:text-5xl text-sage-700 mb-4">
            Wedding Details
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent w-24 mx-auto mb-6"></div>
          <p className="font-serif text-sage-600 text-lg italic">
            Join us in celebrating this blessed union
          </p>
        </div>

        {/* Event card */}
        <div className="bg-white rounded-3xl shadow-xl border border-sage-100 overflow-hidden animate-gentle-zoom" style={{ animationDelay: '0.3s' }}>
          <div className="bg-gradient-to-r from-sage-500 to-sage-600 text-white p-8 text-center">
            <h3 className="font-script text-3xl md:text-4xl mb-2">Nikah Ceremony</h3>
            <p className="font-serif text-sage-100 opacity-90">The Sacred Union</p>
          </div>

          <div className="p-8 md:p-12">
            {/* Date and time */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center md:text-left animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <Calendar className="w-6 h-6 text-sage-500 mr-3" />
                  <h4 className="font-serif text-xl text-sage-700">Date & Time</h4>
                </div>
                <div className="space-y-2">
                  <p className="font-script text-2xl text-sage-800">Thursday</p>
                  <p className="font-bold text-4xl text-sage-700">August 7</p>
                  <p className="text-sage-600 font-sans">2025</p>
                  <div className="mt-4 pt-4 border-t border-sage-200">
                    <p className="text-sage-700 font-medium">8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left animate-slide-up" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <MapPin className="w-6 h-6 text-sage-500 mr-3" />
                  <h4 className="font-serif text-xl text-sage-700">Venue</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-sage-800 font-medium text-lg">2/2 Bannangstar</p>
                  <p className="text-sage-600">Yala, Thailand</p>
                  <div className="mt-4 pt-4 border-t border-sage-200">
                    <p className="text-sage-500 text-sm">
                      A beautiful venue surrounded by nature's tranquility
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code section */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <div className="bg-sage-50 rounded-2xl p-6 inline-block">
                <div className="w-32 h-32 bg-white rounded-xl shadow-inner flex items-center justify-center mb-4 mx-auto border-2 border-sage-200">
                  <div className="text-sage-400 text-4xl">📱</div>
                </div>
                <p className="text-sage-600 text-sm font-sans">
                  Scan for location details
                </p>
              </div>
            </div>

            {/* Additional info */}
            <div className="mt-8 pt-8 border-t border-sage-200 text-center animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
              <div className="bg-sage-50 rounded-2xl p-6">
                <h5 className="font-serif text-lg text-sage-700 mb-3">Dress Code</h5>
                <p className="text-sage-600 font-sans">
                  Traditional or formal attire is preferred. 
                  We encourage wearing modest, elegant clothing in earth tones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
