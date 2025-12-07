import React, { useState } from "react";
import { FaBars, FaTimes, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
const [nav, setNav] = useState(false);

const links = [
{ id: 1, link: "home" },
{ id: 2, link: "about" },
{ id: 3, link: "portfolio" },
{ id: 4, link: "skills" },
];

const contact = { id: 5, link: "contact" };

return ( <div className="fixed top-0 left-0 w-full h-20 flex items-center px-6 z-50
                 bg-black/40 backdrop-blur-xl shadow-xl transition-colors duration-500">

  {/* Left: Logo */}
  <div className="flex-1">
    <h1 className="text-4xl font-extrabold tracking-tight 
                   bg-linear-to-r from-[#6366f1] to-[#a855f7] 
                   bg-clip-text text-transparent 
                   hover:bg-linear-to-r hover:from-orange-400 hover:to-yellow-400 
                   hover:bg-clip-text hover:text-transparent transition-all duration-500 cursor-pointer">
      Ahmed Hossam
    </h1>
  </div>

  {/* Center: Menu Links with Active Class */}

<ul className="hidden md:flex flex-1 justify-center gap-4">
  {links.map(({ id, link }) => (
    <li key={id} className="relative group">
      <Link
        to={link}
        smooth={true}
        duration={500}
        spy={true}
        offset={-150}
        activeClass="bg-linear-to-r from-[#6366f1] to-[#a855f7] text-black font-semibold px-4 py-2 rounded-lg shadow-lg"
        className="capitalize text-gray-300 font-semibold transition-all duration-300 px-4 py-2 rounded-lg cursor-pointer
        hover:text-white "
      >
        {link}
      </Link>
      {/* Optional animated underline on hover */}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 
                       bg-linear-to-r from-[#6366f1] to-[#a855f7] 
                       group-hover:w-full transition-all duration-300"></span>
    </li>
  ))}
</ul>


  {/* Right: Contact Button with Icon and Active Class */}
  <div className="hidden md:flex flex-1 justify-end">
    <Link
      to={contact.link}
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      activeClass="ring-2 ring-orange-400"
      className="flex items-center gap-2 px-5 py-2 bg-linear-to-r from-[#6366f1] to-[#a855f7] 
                 text-black font-semibold rounded-lg shadow-lg 
                 hover:scale-105 transition-transform duration-300 cursor-pointer
                 hover:bg-linear-to-r hover:from-orange-400 hover:to-yellow-400"
    >
      <FaEnvelope size={18} /> {contact.link}
    </Link>
  </div>

  {/* Mobile Icon */}
  <div
    onClick={() => setNav(!nav)}
    className="md:hidden cursor-pointer text-gray-300 hover:text-orange-400 transition-colors duration-300 z-10"
  >
    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
  </div>

  {/* Mobile Menu with Active Class */}
  {nav && (
    <ul className="flex flex-col justify-center items-center fixed inset-0 
                    bg-linear-to-b from-black via-gray-900 to-gray-800 
                    text-gray-300 gap-8 animate-fadeIn">
      {[...links, contact].map(({ id, link }) => (
        <li key={id} className="text-4xl capitalize hover:scale-110 transition-transform duration-300">
          <Link
            onClick={() => setNav(false)}
            to={link}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-orange-400"
            className="flex items-center gap-2 transition-colors duration-300"
          >
            {link === "contact" && <FaEnvelope size={18} />} {link}
          </Link>
        </li>
      ))}
    </ul>
  )}

</div>


);
};

export default NavBar;
