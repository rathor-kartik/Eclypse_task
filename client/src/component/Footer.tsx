import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-10 border-t border-gray-700">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-lg font-bold mb-2">Eclypse™</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Our Customers</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0">
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm">+91 123-456-7890<br />eclypse@gmail.com</p>
        </div>
      </div>
      <p className="text-xs text-gray-600 mt-6">© {new Date().getFullYear()} Eclypse</p>
    </footer>
  );
};

export default Footer;