import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaMediumM } from 'react-icons/fa'; // Importing icons from react-icons

const Socials_M = () => {
  return (
    <div className="w-full h-[48px] flex flex-row justify-center items-start p-0 flex-none order-1 align-self-stretch flex-grow-0  ">
       <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 ">
          <FaTwitter className="text-2xl" />
        </a>

        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700 ">
          <FaFacebookF className="text-2xl" />
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 ">
          <FaLinkedinIn className="text-2xl" />
        </a>

        <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700">
          <FaMediumM className="text-2xl" />
        </a>
    </div>
  );
};

export default Socials_M;
