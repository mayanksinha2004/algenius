import React from 'react';

import Title_M from './title_m';
import Header_M from './header_m';
import EmptyRow_M from './emptyrom_m';
import ChipRow_M from './chiprRow_m';
import Description_M from './description_m';
import InputRow_M from './inputRow_m';
import Socials_M from './socials_m';

const MobileComponent = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-custom ">
      {/* Header */}
      <div className="w-full pl-[5.97vw] pr-[5.97vw]">
        <Header_M />
      </div>

      {/* Empty Row */}
      <EmptyRow_M/>

      {/* Title */}
      <div className="w-full pl-[5.97vw] pr-[5.97vw]">
        <ChipRow_M/>
      </div>

      {/* Additional Titles or other components */}
      <div className="w-full pl-[5.97vw] pr-[5.97vw]">
        <Title_M />
      </div>
      <div className="w-full pl-[5.97vw] pr-[5.97vw]">
        <Description_M />
      </div>
      <div className="w-full pl-[5.97vw] pr-[5.97vw]">
        <InputRow_M/>
      </div>
      <div className="w-full pl-[5.97vw] pr-[5.97vw]">
        <Socials_M/>
      </div>

      {/* Add more components here if needed */}
    </div>
  );
};

export default MobileComponent;
