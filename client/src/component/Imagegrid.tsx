import React from 'react';

const images = [
  '/img1.jpg',
  '/img5.jpg',
  '/img3.jpg',
  '/img4.jpg',
  '/img2.jpg',
];

const Imagegrid: React.FC = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 md:px-16 py-6 bg-black">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Grid ${index}`} className="rounded-md object-cover w-full" />
      ))}
    </section>
  );
};

export default Imagegrid;