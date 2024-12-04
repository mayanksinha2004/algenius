import React from 'react';

const Description = () => {
  return (
    <div className="w-full h-[7.77vh] flex items-stretch">
      
      {/* Div 1: Empty Block */}
      <div className="flex-none w-[26.80vw] h-[7.77vh]   border-t-[1px] border-r-[1px] border-b-[1px] border-l-[0px] border-solid border-[#2B1B38] box-border flex-none order-0 align-self-stretch flex-grow-1"></div>

      {/* Div 2: Shape Wrapper */}
      <div className="flex-none w-[4.5vw] h-[7.77vh]  border-[1px] border-solid border-[#2B1B38] flex items-center justify-center box-border flex-none order-1 align-self-stretch flex-grow-0">
        {/* Shape inside Div 2 */}
        <div className="w-[20px] h-[20px] bg-[#2B1B38] transform rotate-45" style={{ transformOrigin: "center", transform: "rotate(45deg)" }} />
      </div>

      {/* Div 3: Description Wrapper (with the paragraph inside) */}
      <div className="flex-none w-[37.5vw] h-[7.77vh]  border-[1px] border-solid border-[#2B1B38] flex items-center justify-center box-border flex-none order-2 flex-grow-0">
        <p className="text-center font-[DM Sans] font-normal text-[18px] leading-[128%] text-[#D387FF] w-[384px] max-w-[384px] h-[46px] -tracking-[0.02em] z-0">
          Be first in line to experience the future of AI with AIgenius! Join our waitlist for exclusive access.
        </p>
      </div>

      {/* Div 4: Shape Wrapper (Same shape as in Div 2) */}
      <div className="flex-none w-[4.5vw] h-[7.77vh]  border-[1px] border-solid border-[#2B1B38] flex items-center justify-center box-border flex-none order-3 align-self-stretch flex-grow-0">
        {/* Shape inside Div 4 */}
        <div className="w-[20px] h-[20px] bg-[#2B1B38] transform rotate-45" style={{ transformOrigin: "center", transform: "rotate(45deg)" }} />
      </div>

      {/* Div 5: Empty Block */}
      <div className="flex-none w-[26.80vw] h-[7.77vh]  border-t-[1px] border-r-[0px] border-b-[1px] border-l-[1px] border-solid border-[#2B1B38] box-border flex-none order-4 align-self-stretch flex-grow-1"></div>

    </div>
  );
};

export default Description;
