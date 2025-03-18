import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353F] bg-[#121212] text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Image
          src="/images/logo.png"
          alt="Anas Farooq Logo"
          width={150}
          height={50}
          className="md:w-[200px] h-auto"
        />
        <p className="text-slate-400">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;