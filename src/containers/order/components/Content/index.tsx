import React, { ReactNode } from 'react';
import Inside from '../Inside';

const Content: React.FC<{ children?: ReactNode }> = (props) => {
  return (
    <div>
      <Inside />
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default Content;
