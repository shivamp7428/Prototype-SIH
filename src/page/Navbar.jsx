import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-6 md:px-20 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="md:text-xl  flex gap-2 font-bold text-blue-700 font-serif items-center">
        <img
          src="https://res.cloudinary.com/dznmoz8hw/image/upload/v1758687916/healthcodes_iqm3cw.png"
          alt="logo"
          width={35}
          height={35}
          className="rounded-full"
        />
        Ayursutra Panchakarma
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 font-bold font-serif">
        <a href="/" className="hover:text-blue-600">
          Home
        </a>
        <a href="/about" className="hover:text-blue-600">
          About
        </a>
        <a href="/services" className="hover:text-blue-600">
          Services
        </a>
        <a href="/contact" className="hover:text-blue-600">
          Contact
        </a>
        <a href="/login" className="hover:text-blue-600">
          Login
        </a>
        <a href="/signup" className="hover:text-blue-600">
          Signup
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-blue-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-6 flex flex-col items-center gap-6 font-bold font-serif md:hidden z-50">
          <a href="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="/services" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Services
          </a>
          <a href="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Contact
          </a>
          <a href="/login" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Login
          </a>
          <a href="/signup" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Signup
          </a>
        </div>
      )}
    </nav>
  );
}
