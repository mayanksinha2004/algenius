import React from 'react';

const SocialProof = () => {
  return (
    <div className='w-full h-[64px] flex items-center justify-center  ml-[78px]'>
      <div className="flex items-center w-[400px] h-[28px] ">
        {/* Circle images with negative margins for overlap */}
        <img 
          src="/person1.jpg" 
          alt="Person 1" 
          className="w-[28px] h-[28px] rounded-full object-cover border-2 border-white -ml-[10px] z-10" 
        />
        <img 
          src="/person2.jpg" 
          alt="Person 2" 
          className="w-[28px] h-[28px] rounded-full object-cover border-2 border-white -ml-[10px] z-20" 
        />
        <img 
          src="/person3.jpg" 
          alt="Person 3" 
          className="w-[28px] h-[28px] rounded-full object-cover border-2 border-white -ml-[10px] z-30" 
        />
        
        {/* Text */}
        <p className="w-[200px] h-[18px] text-[14px] text-[#D387FF99] font-normal leading-[128%] tracking-[0.01em] text-center">
          Join 5,000+ already onboard
        </p>
      </div>
    </div>
  );
};

export default SocialProof;
