import { Box, Card, CardHeader, Grid, Paper, TextField } from '@mui/material'
import React from 'react'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const App = () => {
    return (
        <Grid sx={{ m: -3}} container flexDirection={"row"} 
        >
            <Grid item md={3}>
                <Box >
                    <Card variant="outlined" sx={{ height: "220px" }}>
                        <CardHeader title="Business Requirements" titleTypographyProps={{ fontWeight: "bold", variant: "p" }} sx={{ backgroundColor: "#EA9A9A", color: "#CD1D1D", padding: "4px 16px" }} />
                    </Card>
                    <Card variant="outlined" sx={{ height: "220px" }}>
                        <CardHeader title="Functional Requirements" titleTypographyProps={{ fontWeight: "bold", variant: "p" }} sx={{ backgroundColor: "#EA9A9A", color: "#CD1D1D", padding: "4px 16px" }} />
                    </Card>
                    <Card variant="outlined" sx={{ height: "220px" }}>
                        <CardHeader title="Compliance Requirements" titleTypographyProps={{ fontWeight: "bold", variant: "p" }} sx={{ backgroundColor: "#EA9A9A", color: "#CD1D1D", padding: "4px 16px" }} />
                    </Card>
                </Box>
            </Grid>
            <Grid item md={9} >
                <Box >
                    <Paper variant="outlined" sx={{ height: "265px" }}>
                    </Paper>
                    <Paper variant="outlined" sx={{ padding: 4 }}>

                        <TextField
                            required
                            id="req-id"
                            label="Req. ID"
                            fullWidth
                            sx={{ width: "30%", mr: 3, mb: 3 }}
                        />
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
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    )
}

export default App