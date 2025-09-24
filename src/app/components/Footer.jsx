import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353F] bg-[#121212] text-[#ffffff]">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <Image
          src="/images/logo.png"
          alt="Anas Farooq Logo"
          width={150}
          height={50}
          className="w-[120px] sm:w-[150px] md:w-[200px] h-auto mb-2 sm:mb-0"
        />
        <p className="text-slate-400 text-center sm:text-left">© 2025 Anas Farooq. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;