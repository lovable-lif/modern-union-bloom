
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 bg-brown-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main footer content */}
        <div className="animate-fade-in-up">
          <div className="text-brown-200 text-3xl mb-6">❀</div>

          <h2 className="font-script text-3xl md:text-4xl text-cream-100 mb-4">
            Soleehah & Halif
          </h2>

          <div className="h-px bg-gradient-to-r from-transparent via-brown-400 to-transparent w-32 mx-auto mb-6"></div>

          <blockquote className="font-serif text-brown-200 text-lg italic leading-relaxed mb-8 max-w-2xl mx-auto">
            "Our Lord! Bless us with ˹pious˺ spouses and offspring who will be the joy of our hearts, and make us models for the righteous."
          </blockquote>

          <cite className="text-brown-300 font-sans text-sm block mb-8">
            — Quran 25:74
          </cite>
        </div>

        {/* Event details summary */}
        <div className="hidden md:block animate-fade-in-up border-t border-brown-600 pt-8 mb-8" style={{ animationDelay: '0.3s' }}>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-serif text-lg text-cream-100 mb-2">Date</h3>
              <p className="text-brown-300 font-sans">August 7, 2025</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-cream-100 mb-2">Time</h3>
              <p className="text-brown-300 font-sans">8:00 AM - 6:00 PM</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-cream-100 mb-2">Location</h3>
              <p className="text-brown-300 font-sans">Bannang Sata, Thailand</p>
            </div>
          </div>
        </div>

        {/* Thank you mesbrown */}
        <div className="animate-fade-in-up bg-brown-600 rounded-2xl p-6 mb-8" style={{ animationDelay: '0.5s' }}>
          <div className="text-brown-200 text-2xl mb-4">🤲</div>
          <h3 className="font-serif text-xl text-cream-100 mb-3">
            Barakallahu lakuma
          </h3>
          <p className="text-brown-200 font-sans text-sm leading-relaxed">
            May Allah bless you both and bless your union. We are grateful for your presence
            in our lives and look forward to celebrating with you on our special day.
          </p>
        </div>

        {/* Social sharing */}
        <div className="animate-fade-in-up border-t border-brown-600 pt-8" style={{ animationDelay: '0.7s' }}>
          <div className="mb-6">
            <h4 className="font-serif text-lg text-cream-100 mb-3">Share the Joy</h4>
            <div className="inline-block bg-brown-600 rounded-lg px-4 py-2">
              <span className="text-brown-200 font-sans text-sm">#SoleehahHalifWedding</span>
            </div>
          </div>

          <div className="text-brown-300 font-sans text-sm">
            <p>&copy; {currentYear} Soleehah & Halif Wedding</p>
            <p className="mt-2">Made with 💚 and lots of dua</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
