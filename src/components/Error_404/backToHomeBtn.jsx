import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackToHomeButton = () => {
  // Initialize the useNavigate hook
  const navigate = useNavigate();

  // Handle the button click event
  const handleClick = () => {
    navigate('/');  // This will navigate to the home route
  };

  return (
    <button 
      onClick={handleClick} 
      className="flex items-center justify-center mt-8 gap-2 w-[492px] h-[50px] bg-gradient-to-b from-transparent to-[#D387FF33] rounded-[8px] px-[24px] py-[16px] z-4"
    >
      <span className="w-[204px] h-[18px] text-[#D387FF] font-semibold text-[14px] leading-[128%] tracking-[0.01em]">
        Back to Home
      </span>
    </button>
  );
};

export default BackToHomeButton;
