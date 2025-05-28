import React from 'react';

const Productpage: React.FC = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-12">
      <h2 className="text-2xl md:text-3xl mb-4 font-light">Silhouette No.1 – Vermilion</h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Image */}
        <img
          src="/img12.avif"
          alt="Product"
          className="w-full lg:w-1/2 rounded-md object-cover"
        />

        {/* Right Content */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-sm text-gray-300">
            A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a day in motion.
          </p>

          <div className="flex gap-4">
            <img src="/thumb1.jpg" alt="thumb1" className="w-20 rounded" />
            <img src="/thumb2.jpg" alt="thumb2" className="w-20 rounded" />
            <img src="/thumb3.jpg" alt="thumb3" className="w-20 rounded" />
          </div>

          <div>
            <p className="text-xl font-semibold">
              ₹ 7,999 <span className="text-sm text-gray-400">MRP incl. of all taxes</span>
            </p>

            <p className="mt-4 mb-2">Please select a size</p>
            <div className="flex gap-2 flex-wrap">
              {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                <button key={size} className="border px-4 py-2 hover:bg-white hover:text-black transition-all">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-2 rounded">Add to Cart</button>
            <button className="bg-black text-white border border-white px-6 py-2 rounded">Buy</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productpage;