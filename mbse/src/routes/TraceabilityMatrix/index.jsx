import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import TraceabilityMatrixTable from './TraceabilityMatrixTable'
import {  useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const App = () => {
    const history = useNavigate();
    const handleClick = () => {
      // Navigate to a different component on button click
      history("/requirements-validation-two");
    };
    return (
        <Box>
            <Typography variant='h5' fontWeight={"bold"} sx={{mb:3}}>
                Traceability  Matrix
            </Typography>
            <TraceabilityMatrixTable/>
            <Box>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 3, width: "10%" }}
          onClick={handleClick}
          startIcon={<ChevronLeftIcon />}
        >
          
        </Button>
      </Box>
        </Box>
    )
}

export default App