import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <img 
          src="/images/logo.png" 
          alt="Anas Farooq Logo" 
          className="w-[150px] h-auto md:w-[200px]" 
        />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
