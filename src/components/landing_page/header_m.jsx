import React from 'react';

const Header_M = () => {
  return (
    <header className="w-full h-[128px] flex flex-col justify-center items-center p-0 flex-none order-0 self-stretch flex-grow-0  border-t-[1px] border-r-[1px] border-b-[0px] border-l-[1px] border-solid border-[#2B1B38]">
      <img 
        src="/Logo.png"  // Replace with your logo file
        alt="Logo"
        className="w-[20px] h-[20px]" // Ensures the logo fits within the specified dimensions
      />
    </header>
  );
};

export default Header_M;
