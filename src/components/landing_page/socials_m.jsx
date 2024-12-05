import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaMediumM } from 'react-icons/fa'; // Importing icons from react-icons

const Socials_M = () => {
  return (
    <div className="w-full h-[34.55vh] flex flex-col justify-end items-center p-0">
      <div className="flex space-x-4 pb-4"> {/* Added space-x-4 for spacing between icons */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500">
          <FaTwitter className="text-2xl" />
        </a>

        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700">
          <FaFacebookF className="text-2xl" />
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
          <FaLinkedinIn className="text-2xl" />
        </a>

        <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700">
          <FaMediumM className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Socials_M;
