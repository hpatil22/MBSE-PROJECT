import React from 'react';
import { ReactPalette } from 'gojs-react';
import { init } from './BlockDiagram';

const PaletteDrag = (props) => {
  return (
    <div>
  <ReactPalette initPalette={()=>init(props.fmushowcase)[1]}
  divClassName='myPaletteDiv'></ReactPalette>
      
    </div>
  );

};

export default PaletteDrag;
