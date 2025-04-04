import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";

const Navbar = () => {
  return (
     <nav className="navbar navbar-light bg-white border-bottom px-3 d-flex justify-content-between custom-navbar">
      {/* Left: Logo & Brand Name */}
      <div className="d-flex align-items-center">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
          width="40" 
          height="40" 
          alt="logo" 
          className="me-2"
        />
        <h4 className="fw-bold m-0">Polity</h4>
      </div>

      {/* Right: Profile & Messenger Icon */}
      <div className="d-flex align-items-center">
        <img src="https://i.pravatar.cc/40" className="rounded-circle me-3" alt="profile" />
        <FaFacebookMessenger size={25} />
      </div>
    </nav>
  );
};

export default Navbar;