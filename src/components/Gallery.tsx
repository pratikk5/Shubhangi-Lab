
import React, { useState } from 'react';
import { Eye, X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images - in real implementation, these would be actual lab photos
  const galleryImages = [
      { id: 1, src: '/gallery1.jpg', alt: '', title: '' },
  { id: 2, src: '/gallery2.jpg', alt: '', title: '' },
  { id: 3, src: '/gallery3.jpg', alt: '', title: '' },
  { id: 4, src: '/gallery4.jpg', alt: '', title: '' },
  { id: 5, src: '/gallery5.jpg', alt: '', title: '' },
  { id: 6, src: '/gallery6.jpg', alt: '', title: '' },
  { id: 7, src: '/gallery7.jpg', alt: '', title: '' },
  { id: 8, src: '/gallery8.jpg', alt: '', title: '' },
  { id: 9, src: '/gallery9.jpg', alt: '', title: '' },
  { id: 10, src: '/gallery10.jpg', alt: '', title: '' },
  { id: 11, src: '/gallery11.jpg', alt: '', title: '' },
  { id: 12, src: '/gallery12.jpg', alt: '', title: '' },
  { id: 13, src: '/gallery13.jpg', alt: '', title: '' },
  { id: 14, src: '/gallery14.jpg', alt: '', title: '' },
  { id: 15, src: '/gallery15.jpg', alt: '', title: '' },
  { id: 16, src: '/gallery16.jpg', alt: '', title: '' },
  ];

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 6);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-gray-400 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 border-2 border-gray-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-green-600">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look inside our state-of-the-art laboratory facilities and see our commitment to excellence.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {visibleImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg mb-2">{image.title}</h3>
                    <p className="text-gray-200 text-sm mb-4">{image.alt}</p>
                    <Button
                      size="sm"
                      onClick={() => openLightbox(image.src)}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 rounded-full"
                    >
                      <Eye className="mr-2 w-4 h-4" />
                      View
                    </Button>
                  </div>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn className="text-white w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          {!showAll && (
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button
                onClick={() => setShowAll(true)}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                See More Images
              </Button>
            </div>
          )}

          {/* Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
              <div className="relative max-w-4xl max-h-full">
                <img
                  src={selectedImage}
                  alt="Gallery image"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
