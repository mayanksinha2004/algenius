import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-[18vh] flex items-stretch">
      {/* Empty Block 1 */}
      <div className="flex-none w-[26.80vw] h-[18vh] border-r-[1px] border-solid border-[#2B1B38] box-border flex-none order-0 align-self-stretch flex-grow-1 margin-x-[-1px]"></div>

      {/* Empty Block 2 */}
      <div className="flex-none w-[4.5vw] h-[18vh]  border-x-[1px] border-solid border-[#2B1B38] box-border flex-none order-1 align-self-stretch flex-grow-0 margin-x-[-1px]"></div>

      {/* Logo Block */}
      <div className="flex-none w-[37.5vw] h-[18vh] border-x-[1px] border-solid border-[#2B1B38] box-border flex items-center justify-center p-[24px] gap-[10px] flex-none order-2 flex-grow-0 margin-x-[-1px]">
        <div className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-b from-transparent to-[rgba(211, 135, 255, 0.2)] rounded-[12px]">
          <img
            src="/Logo.png"
            alt="Header Image"
            className="h-[20px] w-[20px]"
          />
        </div>
      </div>

      {/* Empty Block 3 */}
      <div className="flex-none w-[4.5vw] h-[18vh] border-l-[1px] border-solid border-[#2B1B38] box-border flex-none order-3 align-self-stretch flex-grow-0 margin-x-[-1px]"></div>

      {/* Empty Block 4 */}
      <div className="flex-none w-[26.80vw] h-[18vh] border-l-[1px] border-solid border-[#2B1B38] box-border flex-none order-4 align-self-stretch flex-grow-1 margin-x-[-1px]"></div>
    </div>
  );
};

export default Header;
