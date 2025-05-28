import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/img2.jpg" 
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute bottom-10 right-10 z-10 bg-black/40 px-6 py-3 rounded-md">
        <h1 className="text-white text-xl md:text-2xl font-light">
          A silhouette worth remembering
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;