import { Box, Typography } from '@mui/material'
import React from 'react'
import UserRequirementTable from './UserRequirementTable'

const App = (props) => {
    return (
        <Box sx={{minHeight:"80vh"}}>
            <Typography variant='h5' fontWeight={"bold"} sx={{mb:0, color:"#3e7ba4"}}>
                Project Name
            </Typography>
            <Typography variant='body1' fontWeight={"bold"} sx={{mb:3, fontSize:"1.2rem", color:"#3e7ba4"}}>
                Project Type
            </Typography>   
            <Typography variant='h6' fontWeight={"bold"} sx={{mb:3}}>
                User Requirement Table
            </Typography>
            <UserRequirementTable user={props.userdata}/>
        </Box>
    )
}

export default App