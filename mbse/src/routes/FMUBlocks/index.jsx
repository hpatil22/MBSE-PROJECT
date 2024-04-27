import { Box, Button, Card, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Link } from "@mui/material"
import React, { useState } from "react"
import FMU from "../../gojs/FMU";
import FMUPalette from "../../gojs/FMUPalette";
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import Draggable from 'react-draggable';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PaletteDrag from "../../gojs/PaletteDrag";
// import { Link } from "react-router-dom";
import {  useNavigate } from 'react-router-dom';
import * as go from "gojs";
import { gojsanimation } from "../../gojs/FMU";
import logo from "./fmi.png";
import logo2 from "./paython.png";
import "./gojs.css"
import CollapsableButton from "../../component/CollapsableButton";
import Tree from "./Tree";
import CollapsableButton1 from "../../component/BasicTable/CollapsableButton1";
import ReusableCollapsButton from "../../component/ReusableCollapsButton";
// import DesignView from "./routes/DesignView/ModelExplorer"
const fileIcon = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z"></path>
</svg>

export const fmublock=()=>{
  const $ = go.GraphObject.make;  // for conciseness in defining templates

  const myDiagram = new go.Diagram(  // create a Diagram for the DIV HTML element
    {
      "clickCreatingTool.archetypeNodeData": {
        color: "palegreen",
        key: "node"
      },
      "undoManager.isEnabled": true,
      // "animationManager.isInitial": false, // To use custom initial animation instead
      // "InitialLayoutCompleted": animateFadeIn // animate with this function
    });
    myDiagram.nodeTemplate =
    $(go.Node, "Auto",
      {
        // selectionAdornmentTemplate: addNodeAdornment,
        locationSpot: go.Spot.Center
      },
      new go.Binding("location", "loc").makeTwoWay(),
      $(go.Shape, "RoundedRectangle", {
        strokeWidth: 2,
        portId: "",  // this Shape is the Node's port, not the whole Node
        fromLinkable: true, fromLinkableSelfNode: true, fromLinkableDuplicates: true,
        toLinkable: true, toLinkableSelfNode: true, toLinkableDuplicates: true,
        cursor: "pointer"
      },
        new go.Binding("fill", "color")),
      $(go.TextBlock,
        { margin: 10, font: '14px sans-serif' },
        new go.Binding("text", "key"))
    );

  myDiagram.model = new go.GraphLinksModel(
    [
      { key: "Alpha", loc: new go.Point(0, 0), color: "lightblue" },
     
    ],
    [
      // No links to start
    ]);
    return myDiagram;
}

function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
}

let myAnimation = null;
function updateAnimation() {
  if (myAnimation) myAnimation.stop();
  // Animate the flow in the pipes
  myAnimation = new go.Animation();
  myAnimation.easing = go.Animation.EaseLinear;
  gojsanimation[0].links.each(link => myAnimation.add(link.findObject("PIPE"), "strokeDashOffset", 20, 0));
  // Run indefinitely
  myAnimation.runCount = Infinity;
  console.log("myanimation" , myAnimation)
  myAnimation.start();
}


const App =()=>{
    const [selectedFile ,setSelectedFile]= useState([])
    const [open, setOpen] = React.useState(false);
    const [verdict , setVerdict] = useState(false);
    const history = useNavigate();

   const TestverdictHandler=()=>{
    setVerdict(true);
    updateAnimation();
   }
  
    const handleClose = () => {
      setOpen(false);
    };
    const VisuallyHiddenInput = styled('input')({
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: 1,
      overflow: 'hidden',
      position: 'absolute',
      bottom: 0,
      left: 0,
      whiteSpace: 'nowrap',
      width: 1,
    });
    const handleFileChange = (event) => {           
        const File= event.target.files[0]
        setSelectedFile((prev)=>{
           return[...prev , File]
        })
        if(File){
            setOpen(true)
        }
    }

    function createData(name, pass, link, ) {
      return { name, pass, link, };
    }
    const fmuimporthandler =()=>{
      fmublock();
    }
    const rows = [
      createData("CP_TC_1​", "Pass", "View Report" ),
      // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      // createData('Eclair', 262, 16.0, 24, 6.0),
      // createData('Cupcake', 305, 3.7, 67, 4.3),
      // createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
   
    

return (
  <Box sx={{minHeight:"80vh"}}>
    <Box
     
    >
      <Typography variant="h5" fontWeight={"bold"} sx={{ mb: 2 ,}}>
        Model Execution Engine
      </Typography>
    </Box>
    <Grid
      container
      flexDirection={"row"}
      sx={{ justifyContent: "space-evenly" }}
    >
      <Box sx={{ width: "18%", textAlign: "center" }}>
        {/* <Card variant="outlined" sx={{ height: "330px" }}> */}
        <CardHeader
          title="Structural Diagrams"
          titleTypographyProps={{ fontWeight: "bold", variant: "p" }}
          sx={{
            backgroundColor: "#0193F5",
            color: "white",
            padding: "4px 16px",
          }}
        />
        <Card sx={{ height: "500px", overflow: "auto" }}>

        {selectedFile.length > 0 && <ReusableCollapsButton></ReusableCollapsButton>
            }
          
        

        </Card>

        {/* </Card> */}
      </Box>
      <Box sx={{ width: "15%", textAlign: "center" }}>
        <CardHeader
          title="Palette"
          titleTypographyProps={{ fontWeight: "bold", variant: "p" }}
          sx={{
            backgroundColor: "#0193F5",
            color: "white",
            padding: "4px 16px",
          }}
        />
        <Card sx={{ height: "500px", overflow: "auto" }}>
          {selectedFile.length > 0 && <FMUPalette ></FMUPalette>}
        </Card>
      </Box>
      <Box sx={{ width: "42%", textAlign: "center", height: "500px" }}>
        <CardHeader
          title="Model Editor"
          titleTypographyProps={{ fontWeight: "bold", variant: "p" }}
          sx={{
            backgroundColor: "#0193F5",
            color: "white",
            padding: "4px 16px",
          }}
        />
        <Card sx={{ height: "500px", resize: "both", overflow: "auto" }}>
          <Box sx={{ position: "relative" }}>
            <Box sx={{ position: "relative" }}>
              <FMU ></FMU>
            </Box>
            <Button onClick={TestverdictHandler}
              sx={{
                backgroundColor: "lightblue",
                mt: 3,
                position: "absolute",
                right: 0,
                
              }}
            >
              Execute Model
            </Button>
          </Box>
        </Card>
      </Box>
      <Box sx={{ width: "20%", textAlign: "center" }}>
        <CardHeader
          title="FMU Library​"
          titleTypographyProps={{ fontWeight: "bold", variant: "p" }}
          sx={{
            backgroundColor: "#0193F5",
            color: "white",
            padding: "4px 16px",
          }}
        />
        <Card sx={{ height: "500px", overflow: "auto" }}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            // endIcon={}
            sx={{ mt: 2 }}
            // onClick={handleClickOpen}
            onChange={handleFileChange}
          >
            Import file
            <VisuallyHiddenInput type="file" />
            {/* <input type="file" onChange={handleFileChange}></input> */}
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
          >
            {/* <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          
        </DialogTitle> */}
            <DialogContent>
              <DialogContentText>
                Successfully Imported FMU file
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Ok
              </Button>
              {/* <Button onClick={handleClose}>Subscribe</Button> */}
            </DialogActions>
          </Dialog>
          {selectedFile.map((file) => {
            return (
              <Button
            component="label"
            variant="contained"
            // endIcon={}
            sx={{ mt: 2 }}
            onClick={fmuimporthandler}
           
          >
             {<img src={logo} style={{width:"30px", height:"20px"}}/>}
                { file.name}
             { <img src={logo2} style={{width:"30px", height:"20px"}}></img>}
             {/* { } */}
          </Button>
            );
          })}
        </Card>
      </Box>
    </Grid>

{/* test verdict content */}
   {verdict &&
    <Box>
    <Box
      sx={{
        width: "15%",
        padding: "6px",
        backgroundColor: "#0193F5",
        textAlign: "center",
        borderRadius: "20px",
        mb: 2,
        mt:2
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>
        Test Verdict
      </Typography>
    </Box>

    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 400, }} aria-label="simple table">
        <TableHead sx={{backgroundColor:"lightgray"}}>
          <TableRow>
            <TableCell align="right">Case ID</TableCell>
            <TableCell align="right">Case Verdict</TableCell>
            <TableCell align="right">Verdict Report</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } , backgroundColor:"lightgreen"}}
          >
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right" >{row.pass}</TableCell>
            <TableCell align="right">
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  history("/test-verdict");
                }}
              >
               {row.link}
              </Link>
            </TableCell>
           
          </TableRow>
           ))} 
        </TableBody>
      </Table>
    </TableContainer>
    </Box>}

  </Box>
);

}
export default App;