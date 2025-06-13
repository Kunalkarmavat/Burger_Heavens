import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Hamburger and close icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sm:px-[4rem] px-[2rem] py-[1rem] flex justify-between items-center relative bg-[#1E1E1E] text-white">
      <h1 className="text-[1rem] sm:text-2xl">BURGER HEAVEN</h1>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex items-center space-x-12 text-sm">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#menu">MENU</a></li>
        <li><a href="#locations">LOCATIONS</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li>
          <button
            className="bg-purple-300 text-black px-6 py-2 rounded"
            style={{ background: '#B3A0CD' }}
          >
            ORDER ONLINE
          </button>
        </li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="sm:hidden absolute top-[100%] left-0 w-full bg-[#2a2a2a] text-white flex flex-col space-y-4 py-6 px-6 z-50 rounded-b-xl">
          <li><a href="#home" onClick={toggleMenu}>HOME</a></li>
          <li><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
          <li><a href="#menu" onClick={toggleMenu}>MENU</a></li>
          <li><a href="#locations" onClick={toggleMenu}>LOCATIONS</a></li>
          <li><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
          <li>
            <button
              className="bg-purple-300 text-black px-6 py-2 w-full"
              style={{ background: '#B3A0CD' }}
              onClick={toggleMenu}
            >
              ORDER ONLINE
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
