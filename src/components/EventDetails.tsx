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
                  <p className="text-sage-600 font-sans">2025, At 8:00 AM - 6:00 PM</p>
                  <div className="mt-4 pt-4 border-t border-sage-200">
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left animate-slide-up" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <MapPin className="w-6 h-6 text-sage-500 mr-3" />
                  <h4 className="font-serif text-xl text-sage-700">Bannang Sata</h4>

                </div>
                <div className="space-y-2">
                  <p className="font-script text-2xl text-sage-800">Bannang Sata Withee Road</p>
                  <p className="font-bold text-4xl text-sage-700">Bannang Sata</p>
                  <p className="text-sage-600">Bannang Sata, Yala, Thailand</p>
                  <div className="mt-4 pt-4 border-t border-sage-200">
                  </div>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div className="mt-8 border-sage-200 text-center animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
              <div className="bg-sage-50 rounded-2xl p-6">
                <h5 className="font-serif text-lg text-sage-700 mb-3">Dress Code</h5>
                <div className="flex justify-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full border-2 border-sage-200" style={{ background: "#FEF6E9" }} title="#FEF6E9"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-sage-200" style={{ background: "#EDD499" }} title="#EDD499"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-sage-200" style={{ background: "#9B7C3C" }} title="#9B7C3C"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-sage-200" style={{ background: "#4A3813" }} title="#4A3813"></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
