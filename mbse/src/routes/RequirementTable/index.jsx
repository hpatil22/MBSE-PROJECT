import { Box, Typography } from '@mui/material'
import React from 'react'
import RequirementTable from './RequirementTable'

const App = () => {
    return (
        <Box>
            <Typography variant='h5' fontWeight={"bold"} sx={{mb:3}}>
               User Requirement
            </Typography>
            <RequirementTable/>
        </Box>
    )
}

export default App