import React from 'react';
import Header from './header'; // Assuming this is your header component
import ChipRow from './chipRow';
import Title from './title';
import Description from './description';
import InputWithButton from './input';
import SocialProof from './socialProof';
import SocialIcons from './socials';
import EmptyRow from './emptyrow';
import InputRow from './inputRow';

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-custom">
      <Header />
      <EmptyRow/>
      <ChipRow />
      <Title/>
      <Description/>
      <InputRow/>
      <SocialIcons/>
    </div>
  );
};

export default LandingPage;
