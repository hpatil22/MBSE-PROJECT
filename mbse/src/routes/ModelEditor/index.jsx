import {
  Box,
  Button,
  Card,
  CardHeader,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ModelEditorTable from "./ModelEditorTable";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DialogueboxModel from "./DialogueboxModel";
import Dialouge from "../../Dailouge";

const App = () => {

    const [selected, setSelected] = useState(false)
    const history = useNavigate();
    const handleClick = () => {
      // Navigate to a different component on button click
      history("/modeleditor");
    };

  const [domain, setDomain] = React.useState("");

  const handleChange = (event) => {
    setDomain(event.target.value);
  };

  const handleDropdownClick = ()=>{
    console.log('Entered');
    setSelected(true)
  }

  return (
    <Box>
      <Typography variant="h5" fontWeight={"bold"} sx={{ mb: 2 }}>
        Model Execution Context Editor​
      </Typography>
      {/* <Typography
        variant="body1"
        fontWeight={"bold"}
        sx={{ mb: 2, fontSize: "1.2rem", color: "#CD1D1D" }}
      >
        Compressor Performance Analysis Validation​​
      </Typography> */}
      <Box sx={{backgroundColor:"#f7f7f7", padding:"20px" , height:"80vh"}}>

      <Grid container sx={{backgroundColor:"#f7f7f7"}}>
        <Grid item md={4}>
          <Card variant="outlined" sx={{ height: "max-content", mr:2 }}>
            <CardHeader
              title="Compressor Performance Analysis Validation​​"
              titleTypographyProps={{ fontWeight: "bold", variant: "p" }}
              sx={{
                backgroundColor: "#0193F5",
                color: "White",
                padding: "4px 16px",
              }}
            />
          <Box sx={{ p:2 }}>
          <Box  sx={{ mb: 2 , textAlign: "center" , border: "1px solid gray" , padding:"10px", backgroundColor: "lightgray"}}
                value={domain}
              >
                <Typography >
                    Analysis Context​
                  </Typography>
                </Box>
            <FormControl fullWidth>
              <Select
                sx={{ mb: 2,backgroundColor: "lightgray", textAlign:"center" }}
                value={domain}
                onChange={handleChange}
                displayEmpty
              >
               
                <MenuItem value="">
                  <Typography component={"em"}>
                    Select Analysis Context​
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleDropdownClick} value={10}>Compressor Performance Analysis</MenuItem>
                <MenuItem value={20}>Combustor Analysis</MenuItem>
                <MenuItem value={30}>Turbine Analysis</MenuItem>
                {/* <MenuItem value={40}>Control System Validation</MenuItem> */}
              </Select>
              <TextField
                sx={{ mb: 2 }}
                multiline
                minRows={10}
                placeholder="Description of the Modeling ​Context"
              />
            </FormControl>
          </Box>
          </Card>
        </Grid>
        <Grid item md={8}>
          {
            selected && <ModelEditorTable />
          }
          
        </Grid>
      </Grid>
      {
        selected && 
            <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" onClick={handleClick} sx={{marginRight:"10px"}}>Create Execution Workflow</Button>
              <Dialouge></Dialouge>
            </Box>
      }
    </Box>
    
      </Box>
  );
};

export default App;
