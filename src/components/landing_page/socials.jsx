import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaMediumM } from 'react-icons/fa'; // Importing icons from react-icons

const SocialIcons = () => {
  return (
    <div className="w-full h-[25vh] flex items-start p-0 ">
      {/* Div 1: Empty Block */}
      <div className="flex-none w-[26.80vw] h-[25vh] border-t-[1px] border-r-[1px] border-b-[1px] border-l-[0px] border-solid border-[#2B1B38] box-border flex-none order-0 align-self-stretch flex-grow-1 "></div>

      {/* Div 2: Empty Block */}
      <div className="flex-none w-[4.5vw] h-[25vh] border-[1px] border-solid border-[#2B1B38] box-border flex-none order-1 align-self-stretch flex-grow-0 "></div>

      {/* Div 3: Empty Block */}
      <div className="flex-none w-[37.5vw] h-[25vh] border-[1px] flex items-center justify-center border-solid border-[#2B1B38] gap-2 box-border flex-none order-2 flex-grow-0 ">
         {/* Social Icons */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 mt-32">
          <FaTwitter className="text-2xl" />
        </a>

        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700 mt-32">
          <FaFacebookF className="text-2xl" />
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 mt-32">
          <FaLinkedinIn className="text-2xl" />
        </a>

        <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700 mt-32">
          <FaMediumM className="text-2xl" />
        </a>


      </div>

      {/* Div 4: Empty Block */}
      <div className="flex-none w-[4.5vw] h-[25vh] border-[1px] border-solid border-[#2B1B38] box-border flex-none order-3 align-self-stretch flex-grow-0 "></div>

      {/* Div 5: Empty Block */}
      <div className="flex-none w-[26.80vw] h-[25vh] border-t-[1px] border-r-[0px] border-b-[1px] border-l-[1px] border-solid border-[#2B1B38] box-border flex-none order-4 align-self-stretch flex-grow-1 "></div>
    </div>
  );
};

export default SocialIcons;
