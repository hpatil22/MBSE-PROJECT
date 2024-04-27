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

const App = (props) => {
  const history = useNavigate();
  const handleClick = () => {
    // Navigate to a different component on button click
    // history("/requirements-validation-two");
  };
  const Modelexecution = () => {
    // Navigate to a different component on button click
    history("/model-editor");
  };
 const [save , setSaved]=useState(false);


  const [testcases, setTestcases] = useState([
    { inputParameters: [{}], ExpectedResults: [{}] },
  ]);

  const caseIdHandler = (event)=>{
  props.setCaseId(event.target.value);
  console.log(props.caseId)
  }
  const setTestObjectHandler = (event)=>{
    props.setTestObject(event.target.value);}

  const setDescriptionHandler= (event)=>{
    props.setDescription(event.target.value);}

  const setParameterNameHandler = (event)=>{
    props.setParameter(event.target.value);}

  const setparameterUnitHandler =(event)=>{
    props.setParameterUnit(event.target.value);
  }
  const setParameterValueHandler =(event)=>{
    props.setParameterValue(event.target.value);
  }

  const setExpectedHandler = (event)=>{
    props.setExpected(event.target.value);}

  return (
    <Box sx={{minHeight:"80vh"}}>
      <Box mb={2} sx={{display: "flex" , flexDirection:"row" , justifyContent:"space-between"}}>
      <Typography variant="h5" fontWeight={"bold"} sx={{ mb: 3 }}>
        Test Context Editor
      </Typography>
      {/* <Button
          variant="contained"
          // sx={{ mt: 3, mb: 3, width: "10%" }}
          onClick={moveToMatrixHandler}
        >
          View Test Matrix
        </Button> */}

      </Box>
      <Box >
        {testcases?.map((testcase, index) => (
          <Paper variant="outlined" sx={{ padding: 4, mb: 3 , backgroundColor:"#f7f7f7"}}>
            <Grid container sx={{}}>
              <Grid item md={4}>
                <Grid container alignItems={"flex-start"}>
                  <Grid item md={3}>
                    <Box sx={{ mb: 3 }}>
                      <Typography fontWeight={"bold"}>Test Case ID</Typography>
                    </Box>
                  </Grid>
                  <Grid item md={9} >
                    <TextField
                      required
                      id="test-case-id"
                      placeholder="Automatically Generated"
                      fullWidth
                      value={props.caseId}
                      onChange={caseIdHandler}
                      sx={{ mb: 3 }}
                    ></TextField>
                  </Grid>
                  <Grid item md={3}>
                    <Box sx={{ mb: 3 }}  >
                      <Typography fontWeight={"bold"} >
                        Test Objective​
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={9}>
                    <TextField
                      required
                      id="test-objective"
                      placeholder="Enter the objective"
                      fullWidth
                      value={props.testObject}
                      onChange={setTestObjectHandler}
                      sx={{ mb: 3 }}
                    />
                  </Grid>
                  <Grid item md={3}>
                    <Box sx={{}}>
                      <Typography fontWeight={"bold"}>Description</Typography>
                    </Box>
                  </Grid>
                  <Grid item md={9}>
                    <TextField
                      required
                      id="test-case-id"
                      multiline
                      rows={4}
                      placeholder="Enter description"
                      fullWidth
                      value={props.description}
                      onChange={setDescriptionHandler}
                      sx={{}}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={8}>
                <Grid sx={{ pl: 3 }} container alignItems={"flex-start"}>
                  {testcase.inputParameters.map((input, i) => {
                    return (
                      <>
                        <Grid item md={2}>
                          <Box sx={{ mb: 3 }}>
                            <Typography fontWeight={"bold"}>
                              Input Parameters
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item md={3}>
                          <TextField
                            required
                            id="input-param-name"
                            label="Parameter Name ​"
                            fullWidth
                            // value={props.parameterName}
                            // onChange={setParameterNameHandler}
                            sx={{ mb: 3, pr: 2 }}
                          />
                        </Grid>
                        <Grid item md={3}>
                          <TextField
                            required
                            id="input-param-unit"
                            label="Units​"
                            fullWidth
                            // value={props.parameterUnit}
                            // onChange={setparameterUnitHandler}
                            sx={{ mb: 3, pr: 2 }}
                          />
                        </Grid>
                        <Grid item md={3}>
                          <TextField
                            required
                            id="input-param-value"
                            label="Value"
                            fullWidth
                            // value={props.parameterValue}
                            // onChange={setParameterValueHandler}
                            sx={{ mb: 3, pr: 2 }}
                          />
                        </Grid>
                        <Grid item md={1}>
                          {testcase.inputParameters.length - 1 === i && (
                            <Button
                              onClick={() => {
                                let x = testcases;
                                x[index].inputParameters.push({});
                                setTestcases((value) => [...x]);
                              }}
                              variant="contained"
                            >
                              +
                            </Button>
                          )}
                        </Grid>
                      </>
                    );
                  })}
                  {testcase.ExpectedResults.map((input, i) => {
                    return (
                      <>
                        <Grid item md={2}>
                          <Box sx={{ mb: 3 }}>
                            <Typography fontWeight={"bold"}>
                              Expected Results​
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item md={3}>
                          <TextField
                            required
                            id="input-param-name"
                            label="Parameter Name ​"
                            fullWidth
                            sx={{ mb: 3, pr: 2 }}
                          />
                        </Grid>
                        <Grid item md={2}>
                          <TextField
                            required
                            id="input-param-unit"
                            label="Units​"
                            fullWidth
                            sx={{ mb: 3, pr: 2 }}
                          />
                        </Grid>
                        <Grid item md={2}>
                          <TextField
                            required
                            id="input-param-min"
                            label="Min"
                            fullWidth
                            sx={{ mb: 3, pr: 2 }}
                          />
                        </Grid>
                        <Grid item md={2}>
                          <TextField
                            required
                            id="input-param-max"
                            label="Max"
                            fullWidth
                            sx={{ mb: 3, pr: 2 }}
                          />
                        </Grid>
                        <Grid item md={1}>
                          {testcase.ExpectedResults.length - 1 === i && (
                            <Button
                              variant="contained"
                              onClick={() => {
                                let x = testcases;
                                x[index].ExpectedResults.push({});
                                setTestcases((value) => [...x]);
                              }}
                            >
                              +
                            </Button>
                          )}
                        </Grid>
                      </>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item md={12} container justifyContent={"flex-end"}>
              {save ? (
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
              Save Test Case
            </Button>
          )}
                
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 3 }}
          onClick={() =>
            setTestcases((value) => [
              ...value,
              { inputParameters: [{}], ExpectedResults: [{}] },
            ])
          }
        >
          + Add New Testcase
        </Button>
      </Box>
      <Box sx={{ display:"flex" ,justifyContent:"space-between"}}>
        <Button
          variant="contained"
          // sx={{ mt: 3, mb: 3, width: "10%" }}
          onClick={handleClick}
        >
          Close Editor
        </Button>
        <Button
          variant="contained"
          // sx={{ mt: 3, mb: 3, width: "10%" }}
          onClick={Modelexecution}
        >
          Model Execution
        </Button>
      </Box>
     
    </Box>
  );
};

export default App;
