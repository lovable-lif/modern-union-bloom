
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-cream-50 via-white to-brown-50">
      {/* Background floral pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brown-200 rounded-full blur-3xl animate-gentle-zoom"></div>
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-brown-300 rounded-full blur-3xl animate-gentle-zoom" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cream-300 rounded-full blur-2xl animate-gentle-zoom" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className={`text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        {/* Decorative top element */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-brown-400 text-4xl mb-4">❀</div>
          <div className="h-px bg-gradient-to-r from-transparent via-brown-300 to-transparent w-32 mx-auto"></div>
        </div>

        {/* Main heading */}
        <div className="mb-6 animate-gentle-zoom" style={{ animationDelay: '0.6s' }}>
          <h1 className="font-script text-6xl md:text-8xl text-brown-700 mb-4 leading-tight">
            Soleehah
          </h1>
          <div className="text-brown-500 font-serif text-xl md:text-2xl tracking-wider mb-4">
            AND
          </div>
          <h1 className="font-script text-6xl md:text-8xl text-brown-700 leading-tight">
            Halif
          </h1>
        </div>

        {/* Subtitle */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <p className="font-serif text-brown-600 text-lg md:text-xl italic mb-8">
            "With the blessings of Allah"
          </p>
          <p className="text-brown-500 font-sans text-sm md:text-base tracking-wide">
            We are delighted to invite you to our Nikah ceremony
          </p>
        </div>

        {/* Date highlight */}
        <div className="mt-12 animate-slide-up" style={{ animationDelay: '1.2s' }}>
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg border border-brown-200">
            <div className="text-brown-700 font-serif text-lg">August</div>
            <div className="text-brown-800 font-bold text-4xl">7</div>
            <div className="text-brown-600 font-sans text-sm">2025</div>
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="mt-12 animate-slide-up" style={{ animationDelay: '1.5s' }}>
          <div className="h-px bg-gradient-to-r from-transparent via-brown-300 to-transparent w-32 mx-auto mb-4"></div>
          <div className="text-brown-400 text-4xl">❀</div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
