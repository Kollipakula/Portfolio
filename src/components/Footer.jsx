import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-gray-400 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center gap-4">
        {/* Left: Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Anudeep. All rights reserved.
        </p>

        

        {/* Right: Scroll to Top */}
        <a href="/" className="text-sm hover:text-purple-400 transition-colors">
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
