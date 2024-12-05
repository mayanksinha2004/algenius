import React, { useState } from 'react';

const InputWithButton_M = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle email submission logic
      console.log(`Email submitted: ${email}`);
    };
  
    return (
      <div className='w-full h-[79px] flex items-center justify-center '>
        <form 
          onSubmit={handleSubmit}
          className="flex items-center justify-center gap-[24px]  h-[44px] w-[240px] bg-gradient-to-b from-transparent to-[#D387FF33] rounded-[8px] mt-2"
        >
          {/* Email input field */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full h-full text-base text-gray-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D387FF] bg-transparent"
            required
          />
  
          {/* Join Watchlist button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-[10px] w-[143px] h-[38px] bg-[#D387FF] text-black text-sm font-semibold rounded-[4px] shadow-[0px_0px_28px_rgba(211,135,255,0.32)] hover:bg-[#B76CE5] focus:outline-none focus:ring-2 focus:ring-[#D387FF] "
          >
            Join Watchlist
          </button>
        </form>
      </div>
    );
};

export default InputWithButton_M;
