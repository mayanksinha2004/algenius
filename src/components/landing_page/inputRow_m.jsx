import React from 'react';
import InputWithButton from './input';
import SocialProof from './socialProof';
import SocialProof_M from './socialProof_m';
import InputWithButton_M from './input_m';

const InputRow_M= () => {
  return (
    <div className="w-full h-[19.30vh] border-solid border-[#2B1B38] border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] flex items-stretch">
      {/* H1 Wrapper */}
      <div className="flex-none w-full  h-[19.30vh]  border-solid border-[#2B1B38] box-border flex flex-col items-center justify-center  flex-none order-2 flex-grow-0  border-t-[1px] border-r-[1px] border-b-[0px] border-l-[1px] border-solid border-[#2B1B38]">
        {/* AIgenius Text */}
       <InputWithButton_M/>
       <SocialProof_M/>
      </div>

    </div>
  );
};

export default InputRow_M;
