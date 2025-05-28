import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md relative">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">Eclypse®</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-light">
          <Link to="/" className="hover:underline hover:text-yellow-400">
            About Us
          </Link>
          <Link to="/" className="hover:underline">
            Waitlist
          </Link>
          <Link to="/cart" className="hover:underline">
            Cart
          </Link>
        </div>

        {/* Buy Button */}
        <button className="hidden md:inline bg-white text-black px-4 py-2 rounded-full">
          Buy
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-light">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            About Us
          </Link>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Waitlist
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Cart
          </Link>
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Buy
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
