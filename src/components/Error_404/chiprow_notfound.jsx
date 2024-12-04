import React from 'react';

const ChipRowNotFound = () => {
  return (
    <div className="w-full flex items-center justify-center space-x-4 mt-[43px]">
      {/* Left HR with Gradient */}

            <div className="w-[88px] h-[1px] bg-gradient-to-r from-transparent to-[#D387FF] rounded-full" />

      {/* Waitlist Text */}
      <span className="text-[#D387FF] text-[14px] font-normal leading-[128%] text-center">
        Not Found
      </span>

      {/* Right HR with Gradient */}
      <div className="w-[88px] h-[1px] bg-gradient-to-r from-[#D387FF] to-transparent rounded-full" />



     
     
    </div>
  );
};

export default ChipRowNotFound;
