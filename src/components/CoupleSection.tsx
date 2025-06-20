
const CoupleSection = () => {
  return (
    <section className="py-20 px-6 bg-white" id="couple">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-brown-400 text-3xl mb-4">❀</div>
          <h2 className="font-script text-4xl md:text-5xl text-brown-700 mb-4">
            Our Story
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-brown-300 to-transparent w-24 mx-auto"></div>
        </div>

        {/* Couple info */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Bride */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-8">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-gradient-to-br from-brown-100 to-brown-200 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <div className="text-brown-400 text-6xl">👰🏻</div>
              </div>
              <h3 className="font-script text-3xl md:text-4xl text-brown-700 mb-2">
                Soleehah
              </h3>
              <p className="font-serif text-brown-600 italic mb-4">The Bride</p>
              <div className="h-px bg-brown-300 w-16 mx-auto mb-4"></div>
              {/* <p className="text-brown-500 font-sans text-sm leading-relaxed max-w-sm mx-auto">
                The beloved youngest daughter of loving parents, a gentle soul with a heart full of kindness and grace. She brings joy and light wherever she goes.
              </p> */}
            </div>
          </div>

          {/* Decorative divider */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="text-brown-300 text-4xl">❀</div>
          </div>

          {/* Groom */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="mb-8">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-gradient-to-br from-brown-100 to-brown-200 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <div className="text-brown-400 text-6xl">🤵🏻</div>
              </div>
              <h3 className="font-script text-3xl md:text-4xl text-brown-700 mb-2">
                Halif
              </h3>
              <p className="font-serif text-brown-600 italic mb-4">The Groom</p>
              <div className="h-px bg-brown-300 w-16 mx-auto mb-4"></div>
              {/* <p className="text-brown-500 font-sans text-sm leading-relaxed max-w-sm mx-auto">
                The cherished eldest son of loving parents, a devoted man with strength and compassion. He faces life with courage and a warm heart.
              </p> */}
            </div>
          </div>
        </div>

        {/* Love story */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-3xl mx-auto bg-brown-50 rounded-2xl p-8 md:p-12 shadow-lg border border-brown-100">
            <div className="text-brown-400 text-4xl mb-6">❤</div>
            <blockquote className="font-serif text-brown-700 text-lg md:text-xl italic leading-relaxed mb-6">
              "And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy. Surely in this are signs for people who reflect."
            </blockquote>
            <cite className="text-brown-500 font-sans text-sm">— Quran 30:21</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
