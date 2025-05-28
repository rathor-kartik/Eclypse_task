import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-12">
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-light mb-6">
          Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
        </h2>
        <a href="#" className="text-sm text-white underline inline-flex items-center gap-1 hover:text-gray-300">
          Learn more about Eclypse
          <span>↗</span>
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
