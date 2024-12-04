import React from 'react';
import Header from '../landing_page/header';
import ChipRowNotFound from './chiprow_notfound';
import Title404 from './title404';
import BackToHomeButton from './backToHomeBtn';
import SocialIcons from '../landing_page/socials';
const Error = () => {
  return (
    <div className="w-full h-screen bg-error">
      <Header/>
      <ChipRowNotFound/>
      <Title404/>
      <div className='w-full flex h-[90px] items-center justify-center'>
      <BackToHomeButton/>
      </div>
      <SocialIcons/>
     
    </div>
  );
};

export default Error;
