import React, { useState } from 'react';

import { Button } from '@mui/material';
// import React from 'react'
// import { useState } from 'react';

const CollapsableButton1 = ({buttonText ,children}) => {
    const [disable, setDisable] = useState(true);

  const handleClick = () => {
    setDisable((disable) => !disable);
  };    

  return (
    <>
    <Button onClick={handleClick}  variant="contained"
      sx={{ backgroundColor: "#5F9EA0", p: "10px", width: "50%" ,mt:"5px", flexDirection:"column"}} 
     >{buttonText}</Button>
    {!disable && <>{children}</>}
  </>
  )
}

export default CollapsableButton1;