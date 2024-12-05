import React from 'react';

const ChipRow_M = () => {
  return (
    <div className="w-full h-[5.49vh] flex flex-row justify-center items-center p-0 flex-none order-1 align-self-stretch flex-grow-0  border-t-[1px] border-r-[1px] border-b-[0px] border-l-[1px] border-solid border-[#2B1B38]">
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

export default ChipRow_M;
