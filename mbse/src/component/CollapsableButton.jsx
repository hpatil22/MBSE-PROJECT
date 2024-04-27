

import React, { useState } from 'react';

import { Box, Button, IconButton } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from 'styled-components';
// import React from 'react'
// import { useState } from 'react';

const CollapsableButton = ({buttonText ,children}) => {
    const [disable, setDisable] = useState(true);

  const handleClick = () => {
    setDisable((disable) => !disable);
  };    
  
  const [expanded, setExpanded] = useState(true);
    
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Button onClick={handleClick}  variant="contained"
      sx={{ backgroundColor: "#088F8F", p: "10px", width: "50%" ,mt:"5px", flexDirection:"column"}} 
     ><Box sx={{ display:"flex", flexDirection:"row"}}>
      {buttonText} 
      </Box>

   </Button>
    {!disable && <>{children}</>}
  </>
  )
}

export default CollapsableButton;