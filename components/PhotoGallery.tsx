import React from 'react';

const PhotoGallery: React.FC = () => {
  // Using placeholder images for demo. In a real app, import local images or use URLs.
  const photos = [
    "images/hajar-3.jpeg",
    "images/Gemini_Generated_Image_4yjh7p4yjh7p4yjh.png",
    "images/Gemini_Generated_Image_cmoqc9cmoqc9cmoq.png",
    "images/Gemini_Generated_Image_rkgtt0rkgtt0rkgt.png",
  ];

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-4xl md:text-5xl text-center font-serif text-pink-700 mb-12">
        Nos Plus Beaux Souvenirs
      </h2>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos.map((src, index) => (
          <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-2xl shadow-xl">
            <img
              src={src}
              alt={`Souvenir ${index + 1}`}
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <span className="text-white font-serif text-xl italic">Toi & Moi ❤️</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <div className="bg-pink-100 px-8 py-4 rounded-full text-pink-800 italic border border-pink-200 shadow-inner text-center max-w-2xl">
          "Chaque moment passé avec toi est un cadeau que je chéris plus que tout. Ces photos ne sont qu'un aperçu de notre histoire."
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;