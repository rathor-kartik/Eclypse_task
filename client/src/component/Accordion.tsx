import React, { useState } from 'react';

const items = [
  { title: 'Size & Fit', content: 'Fit details go here.' },
  { title: 'Delivery & Returns', content: 'Delivery policy info here.' },
  { title: 'How This Was Made', content: 'Manufacturing story here.' },
];

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-black text-white px-6 md:px-16">
      {items.map((item, index) => (
        <div key={index} className="border-t border-gray-600 py-4">
          <button
            className="w-full flex justify-between items-center text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-lg">{item.title}</span>
            <span>{openIndex === index ? '▲' : '▼'}</span>
          </button>
          {openIndex === index && <p className="mt-2 text-sm text-gray-400">{item.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;