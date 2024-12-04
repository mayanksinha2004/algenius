import React from 'react';
import Header from './header'; // Assuming this is your header component
import ChipRow from './chipRow';

const Title = () => {
  return (
    <div className=" w-full h-[153px] flex items-center justify-center ">
     
      <h1 className="text-center font-[DM Sans] font-semibold text-[128px] leading-[88%] text-transparent bg-gradient-to-b from-[#49235F] to-[#D387FF] bg-clip-text w-[492px] h-[130px] -tracking-[0.04em]">
        Algenius
      </h1>
    </div>
  );
};

export default Title;
