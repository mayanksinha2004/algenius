import React from 'react';
import InputWithButton from './input'; // Assuming the component is located in the same folder
import SocialProof from './socialProof'; // Same here

const InputRow = () => {
  return (
    <div className="w-full h-[17.55vh] flex items-stretch">

      {/* Div 1: Empty Block */}
      <div className="flex-none w-[26.80vw] h-[17.55vh] border-t-[1px] border-r-[1px] border-b-[1px] border-l-[0px] border-solid border-[#2B1B38] box-border flex-none order-0 align-self-stretch flex-grow-1"></div>

      {/* Div 2: Shape Wrapper */}
      <div className="flex-none w-[4.5vw] h-[17.55vh] border-[1px] border-solid border-[#2B1B38] flex items-center justify-center box-border flex-none order-1 align-self-stretch flex-grow-0">
        {/* Shape inside Div 2 */}
        <div className="w-[20px] h-[20px] bg-[#2B1B38] transform rotate-45" style={{ transformOrigin: "center", transform: "rotate(45deg)" }} />
      </div>

      {/* Div 3: Input Block */}
      <div className="flex-none w-[37.5vw] h-[17.55vh] border-[1px] border-solid border-[#2B1B38] flex flex-col items-center justify-center gap-[20px] box-border flex-none order-2 flex-grow-0">
        
        {/* InputWithButton Component */}
        <InputWithButton />

        {/* SocialProof Component */}
        <div className="flex justify-center items-center w-full ">
          <SocialProof />
        </div>
      </div>

      {/* Div 4: Shape Wrapper (Same as Div 2) */}
      <div className="flex-none w-[4.5vw] h-[17.55vh] border-[1px] border-solid border-[#2B1B38] flex items-center justify-center box-border flex-none order-3 align-self-stretch flex-grow-0">
        {/* Shape inside Div 4 */}
        <div className="w-[20px] h-[20px] bg-[#2B1B38] transform rotate-45" style={{ transformOrigin: "center", transform: "rotate(45deg)" }} />
      </div>

      {/* Div 5: Empty Block */}
      <div className="flex-none w-[26.80vw] h-[17.55vh] border-t-[1px] border-r-[0px] border-b-[1px] border-l-[1px] border-solid border-[#2B1B38] box-border flex-none order-4 align-self-stretch flex-grow-1"></div>

    </div>
  );
};

export default InputRow;
