/* Navbar.jsx */
import React, { useState } from "react";
import { FaBars, FaTimes, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const NAV_HEIGHT = 80; // match h-20 in Tailwind

const links = [
{ id: 1, label: "home", icon: null },
{ id: 2, label: "about", icon: null },
{ id: 3, label: "portfolio", icon: null },
{ id: 4, label: "skills", icon: null },
{ id: 5, label: "contact", icon: <FaEnvelope size={18} /> },
];

const Navbar = () => {
const [navOpen, setNavOpen] = useState(false);

return ( <nav className="fixed top-0 left-0 w-full h-20 flex items-center px-6 z-50
                 bg-black/40 backdrop-blur-xl shadow-xl transition-colors duration-500">
{/* Logo */} <div className="flex-1"> <h1
       className="text-4xl font-extrabold tracking-tight 
                  bg-linear-to-r from-[#6366f1] to-[#a855f7] 
                  bg-clip-text text-transparent 
                  hover:bg-linear-to-r hover:from-orange-400 hover:to-yellow-400 
                  hover:bg-clip-text hover:text-transparent transition-all duration-500 cursor-pointer"
       aria-label="Ahmed Hossam - Home"
     >
Ahmed Hossam </h1> </div>

```
  {/* Desktop Links */}
  <ul className="hidden md:flex flex-1 justify-center gap-4">
    {links.slice(0, -1).map(({ id, label }) => (
      <li key={id} className="relative group">
        <Link
          to={label}
          smooth={true}
          duration={500}
          spy={true}
          offset={-NAV_HEIGHT}
          activeClass="bg-linear-to-r from-[#6366f1] to-[#a855f7] text-black font-semibold px-4 py-2 rounded-lg shadow-lg"
          className="capitalize text-gray-300 font-semibold transition-all duration-300 px-4 py-2 rounded-lg cursor-pointer hover:text-white"
        >
          {label}
        </Link>
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-linear-to-r from-[#6366f1] to-[#a855f7] group-hover:w-full transition-all duration-300"></span>
      </li>
    ))}
  </ul>

  {/* Desktop Contact Button */}
  <div className="hidden md:flex flex-1 justify-end">
    <Link
      to="contact"
      smooth={true}
      duration={500}
      spy={true}
      offset={-NAV_HEIGHT}
      activeClass="ring-2 ring-orange-400"
      className="flex items-center gap-2 px-5 py-2 bg-linear-to-r from-[#6366f1] to-[#a855f7] 
                 text-black font-semibold rounded-lg shadow-lg 
                 hover:scale-105 transition-transform duration-300 cursor-pointer
                 hover:bg-linear-to-r hover:from-orange-400 hover:to-yellow-400"
    >
      <FaEnvelope size={18} /> contact
    </Link>
  </div>

  {/* Mobile Menu Toggle */}
  <div
    onClick={() => setNavOpen(!navOpen)}
    className="md:hidden cursor-pointer text-gray-300 hover:text-orange-400 transition-colors duration-300 z-50"
    aria-label={navOpen ? "Close menu" : "Open menu"}
  >
    {navOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
  </div>

  {/* Mobile Menu */}
  {navOpen && (
    <ul className="flex flex-col justify-center items-center fixed inset-0 bg-linear-to-b from-black via-gray-900 to-gray-800 text-gray-300 gap-8 animate-fadeIn z-40">
      {links.map(({ id, label, icon }) => (
        <li key={id} className="text-4xl capitalize hover:scale-110 transition-transform duration-300">
          <Link
            onClick={() => setNavOpen(false)}
            to={label}
            smooth={true}
            duration={500}
            spy={true}
            offset={-NAV_HEIGHT}
            activeClass="text-orange-400"
            className="flex items-center gap-2 transition-colors duration-300"
          >
            {icon} {label}
          </Link>
        </li>
      ))}
    </ul>
  )}
</nav>


);
};

export default Navbar;
