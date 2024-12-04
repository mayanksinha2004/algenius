import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaMediumM } from 'react-icons/fa'; // Importing icons from react-icons

const SocialIcons = () => {
  return (
    <div className="flex items-center  justify-center gap-2 absolute w-[152px] h-[32px] left-1/2 bottom-[40px] transform -translate-x-1/2 z-2">
      {/* Twitter Icon */}
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500">
        <FaTwitter className="text-lg" />
      </a>

      {/* Facebook Icon */}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700">
        <FaFacebookF className="text-lg" />
      </a>

      {/* LinkedIn Icon */}
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
        <FaLinkedinIn className="text-lg" />
      </a>

      {/* Medium Icon */}
      <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700">
        <FaMediumM className="text-lg" />
      </a>
    </div>
  );
};

export default SocialIcons;
