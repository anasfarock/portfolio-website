import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image
          src="/images/logo.png"
          alt="Anas Farooq Logo"
          width={150} // Base width in pixels
          height={50} // Adjust this based on your logo’s aspect ratio
          className="md:w-[200px] h-auto"
        />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;