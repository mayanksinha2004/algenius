import React from 'react';

const Title = () => {
  return (
    <div className="w-full  h-[17vh] flex items-stretch">
      
      {/* Empty Block 1 */}
      <div className="flex-none w-[26.80vw]  h-[17vh] border-r-[1px] border-solid border-[#2B1B38] box-border flex-none order-0 align-self-stretch flex-grow-1 margin-x-[-1px]"></div>
      
      {/* Empty Block 2 */}
      <div className="flex-none w-[4.5vw]  h-[17vh] border-x-[1px] border-solid border-[#2B1B38] box-border flex-none order-1 align-self-stretch flex-grow-0 margin-x-[-1px]"></div>
      
      {/* Title Block */}
      <div className="flex-none w-[37.5vw]  h-[17vh] border-x-[1px] border-solid border-[#2B1B38] box-border flex items-center justify-center p-[24px] gap-[10px] flex-none order-2 flex-grow-0 margin-x-[-1px]">
        <h1 className="text-center font-[DM Sans] font-semibold text-[128px] leading-[88%] text-transparent bg-gradient-to-b from-[#49235F] to-[#D387FF] bg-clip-text w-[492px] h-[130px] -tracking-[0.04em] 
                       max-sm:text-[70px] max-sm:w-[300px] max-sm:h-[90px] max-sm:-tracking-[0.01em]">
          Algenius
        </h1>
      </div>

      {/* Empty Block 3 */}
      <div className="flex-none w-[4.5vw] border-l-[1px] border-solid border-[#2B1B38] box-border flex-none order-3 align-self-stretch flex-grow-0 margin-x-[-1px]"></div>
      
      {/* Empty Block 4 */}
      <div className="flex-none w-[26.80vw]  h-[17vh] border-l-[1px] border-solid border-[#2B1B38] box-border flex-none order-4 align-self-stretch flex-grow-1 margin-x-[-1px]"></div>

    </div>
  );
};

export default Title;
