import React from 'react';
import Header from './header'; // Assuming this is your header component
import ChipRow from './chipRow';
import Title from './title';
import Description from './description';
import InputWithButton from './input';
import SocialProof from './socialProof';
import SocialIcons from './socials';

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-custom">
      <Header />
      <ChipRow />
      <Title/>
      <Description/>
      
      <InputWithButton/>
      <SocialProof/>
      <SocialIcons/>
    </div>
  );
};

export default LandingPage;
