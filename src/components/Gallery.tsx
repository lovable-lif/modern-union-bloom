
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images for the gallery
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      alt: "Beautiful flowers arrangement",
      caption: "Love blooms eternal"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop",
      alt: "Scenic landscape",
      caption: "Together in nature's embrace"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
      alt: "Romantic evening sky",
      caption: "Under the stars"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      alt: "Peaceful water reflection",
      caption: "Reflecting on love"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop",
      alt: "Sunlight through trees",
      caption: "Light of our love"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      alt: "Garden flowers",
      caption: "Growing together"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white" id="gallery">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-sage-400 text-3xl mb-4">❀</div>
          <h2 className="font-script text-4xl md:text-5xl text-sage-700 mb-4">
            Memories
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent w-24 mx-auto mb-6"></div>
          <p className="font-serif text-sage-600 text-lg italic">
            Capturing moments of our journey together
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-sage-50 aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-serif text-sm">{image.caption}</p>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-sage-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full animate-gentle-zoom">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-sage-700 hover:bg-white transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white font-serif bg-black/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                  {galleryImages[selectedImage].caption}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Call to action */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-sage-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-sage-400 text-3xl mb-4">📸</div>
            <h3 className="font-serif text-xl text-sage-700 mb-4">Share Your Moments</h3>
            <p className="text-sage-600 font-sans mb-6">
              We would love to see your photos from our special day! 
              Please share them with us using the hashtag
            </p>
            <div className="inline-block bg-white rounded-lg px-6 py-3 shadow-sm border border-sage-200">
              <span className="font-medium text-sage-700">#SoleehahHafizWedding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
