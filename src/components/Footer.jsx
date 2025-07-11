import { useState } from "react";

export const Footer = () => {

  return (
    <footer className="text-[#F6ECE3] py-4">
      <div className=" justify-center items-center">
        <div className="text-sm text-center">
          &copy; {new Date().getFullYear()} Andrea Belen Jacho
          <br />
          All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
