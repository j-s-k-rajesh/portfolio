import React from "react";
const Navbar = () => {

  return (
    <nav className="bg-[#131313] fixed  w-full top-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        <span className="text-white text-2xl font-[Pacifico]">

         <span className="text-[#FF014F]" >J</span>
          ami.
          <span className="text-[#FF014F]" >S</span>
          <span>iva </span>
          <span className="text-[#FF014F]" >K</span>
          <span>rishna </span>  
          <span className="text-[#FF014F]" >R</span>
          <span>ajesh </span>
        </span>

        <ul className="flex space-x-8 text-[#cccccc] font-small">
          <li>
            <a href="#" className="hover:text-[#FF014F] transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-[#FF014F] transition">
              About
            </a>
          </li>

          <li>
            <a href="#resume" className="hover:text-[#FF014F] transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-[#FF014F] transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-[#FF014F] transition">
              Contact
            </a>
          </li>
        </ul>
      <a href="#contact">

        <button className="bg-[#FF014F] hover:bg-[#79002c] text-white px-4 py-2 rounded-md">
          Hire Me
        </button>
      </a>

      </div>
    </nav>
  );
};

export default Navbar;