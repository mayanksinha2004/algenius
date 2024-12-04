import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-[162px] relative">
      {/* Image placed exactly at the center using margin and absolute positioning */}
      <img
        src="/Logo.png"
        alt="Header Image"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[44px] w-[44px] -mt-2"
      />
    </div>
  );
};

export default Header;
