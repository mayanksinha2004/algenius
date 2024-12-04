import React from 'react';

const EmptyRow = () => {
  return (
    <div className="w-full h-[7.11vh] flex items-start p-0 ">
      {/* Div 1: Empty Block */}
      <div className="flex-none  w-[26.80vw] h-[7.11vh] border-t-[1px] border-r-[1px] border-b-[1px] border-l-[0px] border-solid border-[#2B1B38] box-border flex-none order-0 align-self-stretch flex-grow-1 "></div>

      {/* Div 2: Empty Block */}
      <div className="flex-none w-[4.5vw] h-[7.11vh] border-[1px] border-solid border-[#2B1B38] box-border flex-none order-1 align-self-stretch flex-grow-0 "></div>

      {/* Div 3: Empty Block */}
      <div className="flex-none w-[37.5vw] h-[7.11vh] border-[1px] border-solid border-[#2B1B38] box-border flex-none order-2 flex-grow-0 "></div>

      {/* Div 4: Empty Block */}
      <div className="flex-none w-[4.5vw] h-[7.11vh] border-[1px] border-solid border-[#2B1B38] box-border flex-none order-3 align-self-stretch flex-grow-0 "></div>

      {/* Div 5: Empty Block */}
      <div className="flex-none  w-[26.80vw] h-[7.11vh] border-t-[1px] border-r-[0px] border-b-[1px] border-l-[1px] border-solid border-[#2B1B38] box-border flex-none order-4 align-self-stretch flex-grow-1 "></div>
    </div>
  );
};

export default EmptyRow;
