import React from "react";
import { FaHome, FaSearch, FaPlusSquare, FaHeart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const username = "gururaj_t"; // replace with dynamic username later

  return (
    <footer className="footer-container">
      <div className="d-flex justify-content-between align-items-center px-4">
        <Link to="/"><FaHome size={24} className="text-white" /></Link>
        <FaSearch size={24} className="text-white" />
        <FaPlusSquare size={24} className="text-white" />
        <FaHeart size={24} className="text-white" />
        <Link to={`/profile/${username}`}><FaUser size={24} className="text-white" /></Link>
      </div>
    </footer>
  );
};

export default Footer;
