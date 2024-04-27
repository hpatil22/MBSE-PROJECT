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
import BasicTable1 from "./BaiscTabel1";



const TestVerdict = (props) => {
  // const history = useNavigate();
  // const handleClick = () => {
  //   // Navigate to a different component on button click
  //   // history("/requirements-validation-two");
  // };
// const [saved, setSaved] = useState(false);
// console.log(props.caseId)
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
                   <Typography fullWidth
                      sx={{  mb: 3,  }}>
                        {props.caseId}
                   </Typography>
                  </Grid>
                  <Grid item md={3}>
                    <Box sx={{ mb: 3 }}>
                      <Typography fontWeight={"bold"}>
                        Test Objective​ :
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={9}>
                  <Typography fullWidth
                      sx={{ mb: 3 , }}>
                        {props.testObject}
                   </Typography>
                  </Grid>
                  <Grid item md={3}>
                    <Box sx={{}}>
                      <Typography fontWeight={"bold"}>Description : </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={9}>
                  <Typography fullWidth
                      sx={{ mb: 3 }}>
                        {props.description}
                   </Typography>
                  </Grid>
                  <Grid item md={12}>
                  <Typography sx={{ mt: 13 }} fontWeight={"bold"}>
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
                        status: "Satisfied",
                        
  
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
                        value: "160 ",
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
                        min: "140 ",
                        max: " 180",
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
              <Typography sx={{ ml: 1, color:"green",  height:"min-content" }} variant="h5" fontWeight={"bold"}>
                  Pass
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
              {/* {saved ? (
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
          )} */}
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
      
    </Box>
  );
};

export default TestVerdict;
