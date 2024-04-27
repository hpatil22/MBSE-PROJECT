import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TestCaseMatrixTable from "./TestCaseMatrixTable"
import {  useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const App = () => {
//   const history = useNavigate();
//   const handleClick = () => {
//     // Navigate to a different component on button click
//     history("/requirements-validation-two");
//   };
  return (
    <Box sx={{minHeight:"80vh"}}>
      <Typography variant="h5" fontWeight={"bold"} sx={{ mb: 3 }}>
       Test Case Matrix
      </Typography>
      <TestCaseMatrixTable />
     
    </Box>
  );
};

export default App;
