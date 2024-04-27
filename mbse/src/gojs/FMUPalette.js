import React from 'react';
import { ReactPalette } from 'gojs-react';
import { init1 } from './FMU';

const FMUPalette = (props) => {
  return (
    <div>
  <ReactPalette initPalette={()=>init1()[1]} divClassName='myPaletteDiv'></ReactPalette>
      
    </div>
  );

};

export default FMUPalette;