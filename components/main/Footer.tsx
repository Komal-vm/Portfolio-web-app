import React from "react";
import { motion } from "framer-motion";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

          {/* Projects Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Projects</div>

            <a href="https://text-transfer-client.vercel.app" target="_blank" rel="noopener noreferrer" className="my-[15px] text-[15px] hover:underline">
              Token Text Transfer
            </a>

            <a href="https://github.com/yourusername/hotel-qr-dine" target="_blank" rel="noopener noreferrer" className="my-[15px] text-[15px] hover:underline">
              QR Dine App
            </a>

            <a href="https://github.com/yourusername/esp-rfid" target="_blank" rel="noopener noreferrer" className="my-[15px] text-[15px] hover:underline">
              RFID + ESP8266 System
            </a>
          </div>

          {/* Tech Stack Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Tech Stack</div>

            <p className="flex items-center my-[10px] text-[15px]">
              <FaReact className="mr-2" /> React & Next.js
            </p>
            <p className="flex items-center my-[10px] text-[15px]">
              <FaNodeJs className="mr-2" /> Node.js Backend
            </p>
            <p className="flex items-center my-[10px] text-[15px]">
              <FaDatabase className="mr-2" /> MongoDB / Firebase
            </p>
            <p className="flex items-center my-[10px] text-[15px]">
              <SiTailwindcss className="mr-2" /> Tailwind CSS
            </p>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>

            <a  href="https://github.com/komalcvm"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center my-[15px] text-[15px] hover:underline">
              <RxGithubLogo className="mr-2" /> GitHub
            </a>

            <a href="https://linkedin.com/in/komalcvm" target="_blank" rel="noopener noreferrer" className="flex items-center my-[15px] text-[15px] hover:underline">
              <RxLinkedinLogo className="mr-2" /> LinkedIn
            </a>

            <p className="my-[10px] text-[15px]">📞 +91 7892253772</p>
            <p className="my-[10px] text-[15px]">📧 komalchakradhar123@gmail.com</p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Fullstack Dev 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
