import { Box, Button, Card, CardHeader, Grid, Paper, TextField } from '@mui/material'
import React, { Component, useState } from 'react'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PaletteDrag from '../../gojs/PaletteDrag';
import BlockDiagram from '../../gojs/BlockDiagram';
import {  useNavigate } from 'react-router-dom';
// import Overview from '../../gojs/Overview';

const App = () => {
    const [reqID , setReqID]=useState("")
    const history = useNavigate();
    const ReqidHandler =(e)=>{
        setReqID(e.target.value);
        // console.log(reqID)
    }
    const TracehandleClick = () => {
        // Navigate to a different component on button click
        history("/traceability-matrix");
      };
    const AllocationhandleClick = () => {
        // Navigate to a different component on button click
        history("/allocation-matrix");
      };
    

    return (
        <Grid sx={{ m: -3, mt:-1}} container flexDirection={"row"} 
        >
            <Grid item md={3}>
                <Box >
                    <Card variant="outlined" sx={{ height: "330px" }}>
                        <CardHeader title="Project Explorer" titleTypographyProps={{ fontWeight: "bold", variant: "p" }} sx={{ backgroundColor: "#0193F5", color: "white", padding: "4px 16px", }} />
                    <Card sx={{ height: "330px",resize:"vertical" ,overflow:"auto" }}>
                    <PaletteDrag ></PaletteDrag>
                    </Card>

                    </Card>
                    <Card variant="outlined" sx={{ height: "330px" }}>
                        <CardHeader title=" Model Explorer" titleTypographyProps={{ fontWeight: "bold", variant: "p" }} sx={{ backgroundColor: "#0193F5", color: "white", padding: "4px 16px" }} />
                  {/* <Overview></Overview> */}
                   </Card>
                </Box>
            </Grid>
            <Grid item md={9} >
                <Box >
                    <Paper variant="outlined" sx={{ height: "200px", resize:"vertical" ,overflow:"auto"}}> 
                    <BlockDiagram reqid={reqID}></BlockDiagram>
                    </Paper>
                    <Paper variant="outlined" sx={{ pt:4, px: 4 }}>

                        <TextField
                        // label="Request ID"
                        onChange={ReqidHandler}
                        value={reqID}
                            required
                            id="req-id"
                            label="Req. ID"
                            fullWidth
                            sx={{ width: "30%", mr: 3, mb: 3 }}
                        ></TextField>
                        <TextField
                            required
                            id="req-name"
                            label="Name of Requirement"
                            fullWidth
                            sx={{ width: "67%", mb: 3 }}
                        />
                        <TextField
                            required
                            id="desc"
                            label="Description"
                            rows={3}
                            multiline
                            fullWidth
                            sx={{ width: "100%", mb: 3 }}
                        />
                        <FormControl sx={{flexDirection:"row", alignItems:"center", mb:3 , width:"50%"}}>
                            <FormLabel sx={{mr:3}} id="is-abstract-label">Is abstract</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="is-abstract-label"
                                name="isAbstract"
                            >
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />  
                            </RadioGroup>
                        </FormControl>
                        <FormControl sx={{flexDirection:"row", alignItems:"center", mb:3 , width:"50%"}}>
                            <FormLabel  sx={{mr:3}} id="is-abstract-label">Is Leaf</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="is-abstract-label"
                                name="isAbstract"
                            >
                                <FormControlLabel value="Yes"  control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />  
                            </RadioGroup>
                        </FormControl>
                        <div></div>
                        <TextField
                            required
                            id="derived"
                            label="Derived"
                            sx={{ width: "48%", mr: 3, mb: 3 }}
                        />
                        <TextField
                            required
                            id="derived from"
                            label="Derived From"
                            sx={{ width: "49%", mb: 3 }}
                        />
                        <TextField
                            required
                            id="Satisfied By"
                            label="Satisfied By"
                            sx={{ width: "49%", mb: 3 }}
                        />
                        <Box sx={{display:"flex", justifyContent:"space-between"}}>
                        <Box >
                            <Button variant="contained" sx={{ mt: 3, mb: 3, width: "10%", }} onClick={TracehandleClick}
                            >
                                Trace
                            </Button>
                        </Box>
                        <Box>
                        <Button variant="contained" sx={{ mt: 3, mb: 3, }} onClick={AllocationhandleClick}
                            >
                                Allocation
                            </Button>
                        </Box>


                        </Box>
                        {/* <Button  sx={{ width: "10%", mr: 3, mb: 3 , ml: 5, backgroundColor:"lightblue", }}>Export</Button> */}
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    )
}

export default App