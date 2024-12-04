import React from 'react';

const ChipRow = () => {
  return (
    <div className="w-full flex items-center h-[66px] justify-center space-x-4 mt-[20px]">
      {/* Left HR with Gradient */}
      <div className="w-[88px] h-[1px] bg-gradient-to-r from-transparent to-[#D387FF] rounded-full" />

      {/* Waitlist Text */}
      <span className="text-[#D387FF] text-[14px] font-normal leading-[128%] text-center">
        Waitlist
      </span>

      {/* Right HR with Gradient */}
      <div className="w-[88px] h-[1px] bg-gradient-to-r from-[#D387FF] to-transparent rounded-full" />
    </div>
  );
};

export default ChipRow;
