import React from "react";
import { RxDiscordLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[30] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://github.com/Orace227"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaInstagram />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              href="https://github.com/Orace227"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <a
              href="mailto:prajapati.bhavin227@gmail.com"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">
                prajapati.bhavin227@gmail.com
              </span>
            </a>
            <a
              href="tel:+919016600610"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">+91 9016600610</span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Orace 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
