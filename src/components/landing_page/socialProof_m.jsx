import React from 'react';

const SocialProof_M = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center py-4">
      <div className="flex flex-col items-center justify-center w-[90%] sm:w-[400px] sm:h-[28px]">

        {/* Image Container */}
        <div className="flex  items-center justify-center gap-[-10px] sm:flex-row sm:gap-[-10px]">
          {/* Circle images with negative margins for overlap */}
          <img 
            src="/person1.jpg" 
            alt="Person 1" 
            className="w-[28px] h-[28px] rounded-full object-cover border-2 border-white z-10" 
          />
          <img 
            src="/person2.jpg" 
            alt="Person 2" 
            className="w-[28px] h-[28px] rounded-full object-cover border-2 border-white z-20" 
          />
          <img 
            src="/person3.jpg" 
            alt="Person 3" 
            className="w-[28px] h-[28px] rounded-full object-cover border-2 border-white z-30" 
          />
        </div>
        
        {/* Text */}
        <div className="w-full sm:w-[200px] h-[18px] text-[14px] text-[#D387FF99] font-normal leading-[128%] tracking-[0.01em] text-center  sm:mt-0">
          <p>Join 5,000+ already onboard</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProof_M;
