import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-80 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">MyPortfolio</h1>
        <ul className="flex space-x-6 text-purple-300 font-medium">
  <li><a href="" className="hover:text-purple-500">Home</a></li>
  <li><a href="#about" className="hover:text-purple-500">About</a></li>
  <li><a href="#projects" className="hover:text-purple-500">Projects</a></li>
  <li><a href="#contact" className="hover:text-purple-500">Contact</a></li>
</ul>

      </div>
    </nav>
  );
};

export default Navbar;
