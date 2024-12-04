import React from 'react';

const ChipRow = () => {
  return (
    <div className="w-full h-[7.3vh] flex items-stretch">

      {/* Div 1: Empty Block */}
      <div className="flex-none  w-[26.80vw] h-[7.3vh] border-t-[1px] border-r-[1px] border-b-[1px] border-l-[0px] border-solid border-[#2B1B38] box-border flex-none order-0 align-self-stretch flex-grow-1"></div>

      {/* Div 2: Shape Wrapper */}
      <div className="flex-none w-[4.5vw] h-[7.3vh] border-[1px] border-solid border-[#2B1B38] flex items-center justify-center box-border flex-none order-1 align-self-stretch flex-grow-0">
        {/* Shape inside Div 2 */}
        <div className="w-[20px] h-[20px] bg-[#2B1B38] transform rotate-45" style={{ transformOrigin: "center", transform: "rotate(45deg)" }} />
      </div>

      {/* Div 3: Waitlist Block (Align HRs, Waitlist Text in same line) */}
      <div className="flex-none w-[37.5vw] h-[7.3vh] border-[1px] border-solid border-[#2B1B38] flex items-center justify-center gap-[16px] box-border flex-none order-2 flex-grow-0">
        {/* Left HR with Gradient */}
        <div className="w-[88px] h-[1px] bg-gradient-to-r from-transparent to-[#D387FF] rounded-full" />

        {/* Waitlist Text */}
        <span className="text-[#D387FF] text-[14px] font-normal leading-[128%] text-center">
          Waitlist
        </span>

        {/* Right HR with Gradient */}
        <div className="w-[88px] h-[1px] bg-gradient-to-r from-[#D387FF] to-transparent rounded-full" />
      </div>

      {/* Div 4: Shape Wrapper (Same as Div 2) */}
      <div className="flex-none w-[4.5vw] h-[7.3vh] border-[1px] border-solid border-[#2B1B38] flex items-center justify-center box-border flex-none order-3 align-self-stretch flex-grow-0">
        {/* Shape inside Div 4 */}
        <div className="w-[20px] h-[20px] bg-[#2B1B38] transform rotate-45" style={{ transformOrigin: "center", transform: "rotate(45deg)" }} />
      </div>

      {/* Div 5: Empty Block */}
      <div className="flex-none  w-[26.80vw] h-[7.3vh] border-t-[1px] border-r-[0px] border-b-[1px] border-l-[1px] border-solid border-[#2B1B38] box-border flex-none order-4 align-self-stretch flex-grow-1"></div>

    </div>
  );
};

export default ChipRow;
