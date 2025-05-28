import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-12">
      <p className="text-sm uppercase tracking-wider text-gray-400">Our Customers</p>
      <div className="text-2xl md:text-3xl mt-4 mb-2 border-l-4 border-yellow-400 pl-4">
        Understated, but unforgettable. It feels like it was made for me
      </div>
      <p className="text-sm text-gray-400">Kartik Rathor<br />NY, USA</p>
    </section>
  );
};

export default Testimonial;