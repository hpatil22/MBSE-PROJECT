import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const App = () => {
  const history = useNavigate();
  const handleClick = () => {
    // Navigate to a different component on button click
    // history("/requirements-validation-two");
  };
  const [saved , setSaved]=useState(false)

  const [testcases, setTestcases] = useState([
    { inputParameters: [{}], ExpectedResults: [{}] },
  ]);

  return (
    <Box>
      <Typography variant="h5" fontWeight={"bold"} sx={{ mb: 3 }}>
        Project Context Editor
      </Typography>
      <Box>
        {testcases?.map((testcase, index) => (
          <Paper variant="outlined" sx={{ padding: 4, mb: 3, backgroundColor:"#f7f7f7" , }}>
            <Grid container sx={{}}>
              <Grid item md={12}>
                <Grid container alignItems={"flex-start"}>
                  <Grid item md={3}>
                    <Box sx={{ mb: 3 }}>
                      <Typography fontWeight={"bold"} sx={{ backgroundColor:"#46B1E1", width:"80%", padding:"5px", borderRadius:"5px",fontSize:"20px", color:"white" , pl:3}}>Project Title</Typography>
                    </Box>
                  </Grid>
                  <Grid item md={9}>
                    <TextField
                      required
                      id="test-case-id"
                      placeholder="Enter project title"
                      fullWidth
                      sx={{ mb: 3 }}
                    />
                  </Grid>

                  <Grid item md={3}>
                    <Box sx={{}}>
                      <Typography fontWeight={"bold"} sx={{ backgroundColor:"#46B1E1", width:"80%", padding:"5px", borderRadius:"5px",fontSize:"20px", color:"white" , pl:3}}>
                        Project Description
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={9}>
                    <TextField
                      required
                      id="project-title"
                      multiline
                      rows={4}
                      placeholder="Enter Description"
                      fullWidth
                      sx={{ mb: 3 }}
                    />
                  </Grid>

                  <Grid item md={3}>
                    <Box sx={{ mb: 3 }}>
                      <Typography fontWeight={"bold"} sx={{ backgroundColor:"#46B1E1", width:"80%", padding:"5px", borderRadius:"5px",fontSize:"20px", color:"white" , pl:3}}>
                        Project Sponsor
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={9}>
                    <TextField
                      required
                      id="project-sponsor"
                      placeholder="Enter the sponsor"
                      fullWidth
                      sx={{ mb: 3 }}
                    />
                  </Grid>
                  <Grid item md={3}>
                    <Box sx={{ mb: 3 }}>
                      <Typography fontWeight={"bold"} sx={{ backgroundColor:"#46B1E1", width:"80%", padding:"5px", borderRadius:"5px",fontSize:"20px", color:"white" , pl:3}}>
                        Key Stakeholder
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={9} container>
                    <Grid item md={3}>
                      <Box sx={{ mb: 3 }}>
                        <Typography fontWeight={"bold"} sx={{ backgroundColor:"#46B1E1", width:"50%", padding:"5px", borderRadius:"5px",fontSize:"20px", color:"white" , pl:3}}>Name</Typography>
                      </Box>
                    </Grid>
                    <Grid item md={9}>
                      <TextField
                        required
                        id="name"
                        placeholder="Enter the Name"
                        fullWidth
                        sx={{ mb: 3 }}
                      />
                    </Grid>
                    <Grid item md={3}>
                      <Box sx={{ mb: 3 }}>
                        <Typography fontWeight={"bold"} sx={{ backgroundColor:"#46B1E1", width:"50%", padding:"5px", borderRadius:"5px",fontSize:"20px", color:"white" , pl:3}}>Designation</Typography>
                      </Box>
                    </Grid>
                    <Grid item md={9}>
                      <TextField
                        required
                        id="designation"
                        placeholder="Enter the Designation"
                        fullWidth
                        sx={{ mb: 3 }}
                      />
                    </Grid>
                    <Grid item md={3}>
                      <Box sx={{ mb: 3 }}>
                        <Typography fontWeight={"bold"} sx={{ backgroundColor:"#46B1E1", width:"50%", padding:"5px", borderRadius:"5px",fontSize:"20px", color:"white" , pl:3}}>Email</Typography>
                      </Box>
                    </Grid>
                    <Grid item md={9}>
                      <TextField
                        required
                        id="email"
                        placeholder="Enter the email"
                        fullWidth
                        sx={{ mb: 3 }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={3}>
                <Box sx={{ mb: 3 }}>
                  <Typography fontWeight={"bold"} sx={{ backgroundColor:"#46B1E1", width:"80%", padding:"5px", borderRadius:"5px",fontSize:"20px", color:"white" , pl:3}}>Project Duration</Typography>
                </Box>
              </Grid>
              <Grid item md={9} container>
                <Grid item md={3}>
                  <Box sx={{ mb: 3 }}>
                    <Typography fontWeight={"bold"} sx={{ backgroundColor:"#46B1E1", width:"50%", padding:"5px", borderRadius:"5px",fontSize:"20px", color:"white" , pl:3}}>
                      Start Date 
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={3} container>
                  <TextField
                    required
                    id="start-date"
                    placeholder="Enter the Start Date"
                    fullWidth
                    sx={{ mb: 3 }}
                  />
                </Grid>
                <Grid item md={3}>
                  <Box sx={{ mb: 3, pl:6 }}>
                    <Typography fontWeight={"bold"} sx={{ backgroundColor:"#46B1E1", width:"50%", padding:"5px", borderRadius:"5px",fontSize:"20px", color:"white" , pl:3}}>
                      End Date 
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={3} container>
                  <TextField
                    required
                    id="end-date"
                    placeholder="Enter the End Date"
                    fullWidth
                    sx={{ mb: 3 }}
                  />
                </Grid>
              </Grid>
              <Grid item md={3}>
                <Box sx={{ mb: 3 }}>
                  <Typography fontWeight={"bold"} sx={{ backgroundColor:"#46B1E1", width:"50%", padding:"5px", borderRadius:"5px",fontSize:"20px", color:"white" , pl:3}}>Project Status</Typography>
                </Box>
              </Grid>
              <Grid item md={9}>
                <TextField
                  required
                  id="project-sponsor"
                  placeholder="Enter status"
                  fullWidth
                  sx={{ mb: 3 }}
                />
              </Grid>

              <Grid item md={12} container justifyContent={"flex-end"}>
                <Button variant="contained" sx={{ m: 3 }}>Edit</Button>
                {saved ? (
            <Typography
              fontWeight="bold"
              variant="h6"
              sx={{ px: 3, pt: 3, pb: 3, color: "green" }}
            >
              Saved Successfully
            </Typography>
          ) : (
            <Button
              sx={{ m: 3 }}
              onClick={() => setSaved(true)}
              variant="contained"
            >
              Save
            </Button>
          )}
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>

     
    </Box>
  );
};

export default App;
