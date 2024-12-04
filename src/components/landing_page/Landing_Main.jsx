import React from 'react';
import { useMediaQuery } from 'react-responsive';
import LandingPage from './landing_page';
import MobileComponent from './mobileLanding';
const DesktopComponent = () => <LandingPage/>;
const Mobile_Component = () => <MobileComponent/>;

const ResponsiveLandingComponent = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div>
      {isMobile ? <Mobile_Component /> : <DesktopComponent />}
    </div>
  );
};

export default ResponsiveLandingComponent;
