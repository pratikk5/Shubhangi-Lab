
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

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

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 border-2 border-gray-400 rounded-full"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-10 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 border-2 border-gray-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-green-600">Gallery</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Take a look inside our state-of-the-art laboratory facilities and see our commitment to excellence.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {visibleImages.map((image, index) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <div
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in bg-white cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => openModal(image.src)}
                  >
                    {/* Image */}
                    <div className="aspect-square overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
                      <img
                        src={image.src}
                        alt={image.alt || `Gallery image ${image.id}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Simplified Overlay - removed magnifier icon */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                        {image.title && (
                          <h3 className="text-white font-semibold text-sm sm:text-lg mb-1">{image.title}</h3>
                        )}
                        {image.alt && (
                          <p className="text-gray-200 text-xs sm:text-sm">{image.alt}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 overflow-hidden">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt || `Gallery image ${image.id}`}
                      className="w-full h-auto max-h-[85vh] object-contain"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={closeModal}
                      className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12"
                    >
                      <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* See More Button */}
          {!showAll && (
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button
                onClick={() => setShowAll(true)}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                See More Images
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
