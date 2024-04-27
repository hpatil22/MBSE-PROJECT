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
import BasicTable from "../../component/BasicTable";
import logo1 from "./satisfied.png";


  
  const TestVerdictFail = (props) => {
   
      // const history = useNavigate();
      // const handleClick = () => {
      //   // Navigate to a different component on button click
      //   // history("/requirements-validation-two");
      // };
    console.log(props.caseId)
      const [testcases, setTestcases] = useState([
        { inputParameters: [{}], ExpectedResults: [{}] },
      ]);
      const [show , setShow]=useState(false)
    const showHandler =()=>{
      setShow(true);
    }
    return (
      <Box>
      <Typography variant="h5" fontWeight={"bold"} sx={{ mb: 3 }}>
        Test Verdict
      </Typography>
      <Box sx={{backgroundColor:"#f7f7f7"}}>
        {testcases?.map((testcase, index) => (
          <Paper
            key={index}
            variant="outlined"
            color={"default"}
            sx={{ padding: 4, mb: 3 ,backgroundColor:"#f7f7f7"}}
          >
            <Grid container sx={{}}>
              <Grid item md={4}>
                <Grid container alignItems={"flex-start"}>
                  <Grid item md={3}>
                    <Box sx={{ mb: 3 }}>
                      <Typography fontWeight={"bold"}>Test Case ID : </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={9}>
                  <input type="text" style={{ padding:"5px" , width:"100%"}}>
                    {props.caseId}
                    </input>
                   {/* <Typography fullWidth
                      sx={{  mb: 3,  }}>
                        {props.caseId}
                   </Typography> */}
                  </Grid>
                  <Grid item md={3}>
                    <Box sx={{ mb: 3 }}>
                      
                      <Typography fontWeight={"bold"}>
                        Test Objective​ :
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={9}>
                  <input type="text" style={{ padding:"5px" , width:"100%"}}>
                    {props.testObject}
                    </input>
                  {/* <Typography fullWidth
                      sx={{ mb: 3 , }}>
                        {props.testObject}
                   </Typography> */}
                  </Grid>
                  <Grid item md={3}>
                    <Box sx={{}}>
                      <Typography fontWeight={"bold"}>Description : </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={9}>
                    <input type="" style={{ padding:"5px" , width:"100%" ,paddingBottom:"80px"}}>
                    {props.description}
                    </input>
                  {/* <Typography fullWidth
                      sx={{ mb: 3 }}>
                        
                   </Typography> */}
                  </Grid>
                  <Grid item md={12}>
                  <Typography sx={{ mt: 3 }} fontWeight={"bold"}>
                  Input Parameters
                </Typography>
                <BasicTable sx={{backgroundColor:"green"}} 
                  columns={[
                    {
                      id: "parameter",
                      label: "Parameter​​",
                      minWidth: 170,
                    },
                    {
                      id: "value",
                      label: "Value",
                      minWidth: 170,
                      align: "center",
                    },
                    {
                      id: "units",
                      label: "Units",
                      minWidth: 170,
                      align: "center",
                    },
                  ]}
                  rows={[
                    {
                      parameter: "Altitude",
                      value: "0",
                      units: "m",
                    },
                    {
                      parameter: "Mass Flow​",
                      value: "10",
                      units: "kg/s",
                    },
                    {
                      parameter: "Isentropic Efficiency​",
                      value: "0.83",
                      units: "-",
                    },
                  ]}
                />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={5}>
                <Box sx={{ ml: 3 }}>
                  <Typography sx={{  }} fontWeight={"bold"}>
                    Results Validation
                  </Typography>
                  <BasicTable
                    columns={[ 
                      {
                        id: "parameter",
                        label: "Parameter ​​",
                        minWidth: 170,
                      },
                      {
                        id: "status",
                        label: "Status",
                        minWidth: 170,
                        align: "center",
                        
                        
                      },
                    ]}
                    rows={[
                      {
                        parameter: "Pressure",
                        status: "UnSatisfied",
                        
  
                      },
                      
                    ]}
                  />
                </Box>
                <Box sx={{ ml: 3 }}>
                  <Typography sx={{ mt: 3 }} fontWeight={"bold"}>
                    Actual Results
                  </Typography>
                  <BasicTable
                    columns={[
                      {
                        id: "parameter",
                        label: "Parameter​​",
                        minWidth: 170,
                      },
                      {
                        id: "value",
                        label: "Value",
                        minWidth: 170,
                        align: "center",
                      },
                      {
                        id: "units",
                        label: "Units",
                        minWidth: 170,
                        align: "center",
                      },
                    ]}
                    rows={[
                      {
                        parameter: " Pressure",
                        value: "746 ",
                        units: "KPa",
                      },
                      // {
                      //   parameter: " ",
                      //   value: " ",
                      //   units: " ",
                      // },
                    ]}
                  />
                </Box>
                <Box sx={{ ml: 3 }}>
                  <Typography sx={{ mt: 3 }} fontWeight={"bold"}>
                   Expected Results
                  </Typography>
                  <BasicTable
                    columns={[
                      {
                        id: "parameter",
                        label: "Parameter​​",
                        minWidth: 170,
                      },
                      {
                        id: "units",
                        label: "Units",
                        minWidth: 170,
                        align: "center",
                      },
                      {
                        id: "min",
                        label: "Min",
                        minWidth: 170,
                        align: "center",
                      },
                      {
                        id: "max",
                        label: "Max",
                        minWidth: 170,
                        align: "center",
                      },
                    ]}
                    rows={[
                      {
                        parameter: " Pressure",
                        units: "KPa", 
                        min: "706 ",
                        max: " 800",
                      },
                      // {
                      //   parameter: " ",
                      //   units: "", 
                      //   min: " ",
                      //   max: " ",
                      // },
                    ]}
                  />
                </Box>
              </Grid>
              <Grid item md={3} container justifyContent={"flex-start"} alignItems={"flex-start"}>
              <Typography sx={{ ml: 3, height:"min-content" }} variant="h5" fontWeight={"bold"}>
                  Test Verdict:
                </Typography>
              <Typography sx={{ ml: 1, color:"lightpink",  height:"min-content" }} variant="h5" fontWeight={"bold"}>
                  Fail
                </Typography>
                <Typography sx={{ mt: 6, ml:13, height:"min-content" }} variant="h5" fontWeight={"bold"}>
                  Result Graph
                  </Typography>
                <Paper variant="outlined" sx={{height:"410px",width:"410px", ml:3}}>
                  {show && <img src={logo1} style={{height:"410px",width:"330px",}}></img>}
                </Paper>
                <Button variant="contained" onClick={showHandler} sx={{ml:15, mt:0}}>View Graph</Button>
              </Grid>
              <Grid item md={12} sx={{mt:3}} container justifyContent={"flex-end"}>
                <Button variant="contained">Save Testcase</Button>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 3, width: "10%" }}
          // onClick={handleClick}
        >
          Close 
        </Button>
      </Box>
      {props.caseId}
    </Box>
  );
  };
  
  export default TestVerdictFail;
  