
const RSVP = () => {
  const handleGoogleFormClick = () => {
    // Replace with actual Google Form URL
    window.open('https://forms.google.com/forms/d/e/1FAIpQLSe_example_form_id/viewform', '_blank');
  };

  const handleLineClick = () => {
    // Replace with actual Line contact
    window.open('https://line.me/ti/p/your-line-id', '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-sage-50 to-sage-100" id="rsvp">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-sage-400 text-3xl mb-4">❀</div>
          <h2 className="font-script text-4xl md:text-5xl text-sage-700 mb-4">
            RSVP
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent w-24 mx-auto mb-6"></div>
          <p className="font-serif text-sage-600 text-lg italic">
            Kindly confirm your attendance
          </p>
        </div>

        {/* RSVP content */}
        <div className="bg-white rounded-3xl shadow-xl border border-sage-100 overflow-hidden animate-gentle-zoom" style={{ animationDelay: '0.3s' }}>
          <div className="bg-gradient-to-r from-sage-500 to-sage-600 text-white p-8 text-center">
            <h3 className="font-script text-3xl mb-2">Join Our Celebration</h3>
            <p className="font-serif text-sage-100 opacity-90">
              Your presence would make our day even more special
            </p>
          </div>

          <div className="p-8 md:p-12">
            {/* RSVP message */}
            <div className="text-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-sage-400 text-4xl mb-6">💌</div>
              <p className="text-sage-700 font-serif text-lg leading-relaxed mb-6">
                We are excited to celebrate this blessed day with our beloved family and friends. 
                Please let us know if you will be joining us for our Nikah ceremony.
              </p>
              <div className="bg-sage-50 rounded-2xl p-6 max-w-2xl mx-auto">
                <h4 className="font-serif text-lg text-sage-700 mb-3">
                  Please RSVP by July 20, 2025
                </h4>
                <p className="text-sage-600 font-sans text-sm">
                  This will help us ensure we have adequate arrangements for all our guests.
                </p>
              </div>
            </div>

            {/* RSVP options */}
            <div className="grid md:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.7s' }}>
              {/* Google Form option */}
              <div className="bg-sage-50 rounded-2xl p-6 text-center group hover:bg-sage-100 transition-colors duration-300">
                <div className="text-sage-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📝</div>
                <h4 className="font-serif text-lg text-sage-700 mb-3">Online Form</h4>
                <p className="text-sage-600 font-sans text-sm mb-6">
                  Fill out our quick online RSVP form
                </p>
                <button
                  onClick={handleGoogleFormClick}
                  className="w-full bg-sage-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-sage-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Open RSVP Form
                </button>
              </div>

              {/* Line option */}
              <div className="bg-sage-50 rounded-2xl p-6 text-center group hover:bg-sage-100 transition-colors duration-300">
                <div className="text-sage-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💬</div>
                <h4 className="font-serif text-lg text-sage-700 mb-3">Line Message</h4>
                <p className="text-sage-600 font-sans text-sm mb-6">
                  Send us a message directly on Line
                </p>
                <button
                  onClick={handleLineClick}
                  className="w-full bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Message on Line
                </button>
              </div>
            </div>

            {/* Additional info */}
            <div className="mt-8 pt-8 border-t border-sage-200 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div>
                  <h5 className="font-serif text-lg text-sage-700 mb-2">🍽️ Meals</h5>
                  <p className="text-sage-600 font-sans text-sm">
                    Halal meals will be served throughout the event
                  </p>
                </div>
                <div>
                  <h5 className="font-serif text-lg text-sage-700 mb-2">👶 Children</h5>
                  <p className="text-sage-600 font-sans text-sm">
                    Children are welcome to join the celebration
                  </p>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="mt-8 pt-8 border-t border-sage-200 text-center animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
              <h4 className="font-serif text-lg text-sage-700 mb-4">
                Questions? Contact Us
              </h4>
              <div className="space-y-2 text-sage-600 font-sans text-sm">
                <p>For any inquiries, please reach out to us</p>
                <p>We're happy to help with any questions you may have</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
