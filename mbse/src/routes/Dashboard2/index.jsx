import { Box, Card, CardActions, CardContent, Collapse, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


// import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#79c9dd",
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Kaveri Engine Design- V1', "GTRE", "Performance","-", "Done"),
  createData('Small Engine Testbed Twin- V1.1​', "NAL", "Performance ", "-", "Current"),
  createData('ATGG Engine Design - V1.2​', "GTRE", "Performance", "-", "Proposal"),
 
];
const App =(props)=>{
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    // transition: theme.transitions.create('transform', {
    //   duration: theme.transitions.duration.shortest,
    // }),
  }));
  const [expanded, setExpanded] = useState(true);
    
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
     
    return(
        <Box sx={{backgroundColor:"#f7f7f7"}}>
            <Box mb={2} sx={{display:"flex", flexDirection:"row", textAlign:"center", alignItems:"center"} }>
                <Typography sx={{ fontSize:"20px", textAlign:"center", alignItems:"center"}}>
                    Persons Profile :
                </Typography>
                <Paper elevation={3} type="text" style={{ width:"80%", height:"20vh", borderRadius:"10px", marginLeft:"40px"}}>

             <Box sx={ {ml:"20px"}}>
                
              <Box sx={{display:"flex", flexDirection:"row", mt:"10px" ,}}>
                <Box sx={{display:"flex", flexDirection:"row", mt:"10px" ,}}>
                <Typography  sx={{color:"#2e9cb8", fontSize:"20px"}}>
                    Name: 
                </Typography>
                <Typography ml={2} sx={{fontSize:"20px"}}>
                    Payal Mandloi
                </Typography>
                {/* <input type="text" style={{marginLeft:"40px"}}></input> */}
                </Box>
                {/* <Box sx={{display:"flex", flexDirection:"row", mt:"10px" , ml:"40px"}}>
                <Typography >
                Email:
                </Typography>
                </Box> */}
              </Box>
              <Box sx={{display:"flex", flexDirection:"row", mt:"20px"}}>
                <Typography sx={{color:"#2e9cb8",fontSize:"20px"}}>
                    Designation: 
                </Typography>
                <Typography ml={2} sx={{fontSize:"20px"}} >
                     System Engineer
                </Typography>
                {/* <input type="text"></input> */}
              </Box>
              <Box sx={{display:"flex", flexDirection:"row", mt:"20px"}}>
                <Typography sx={{color:"#2e9cb8", fontSize:"20px"}}>
                    Organization:  
                </Typography>
                <Typography ml={2} sx={{fontSize:"20px"}}>
                Paninian Aerospace​
                </Typography>
                {/* <input type="text" ></input> */}
              </Box>
                </Box>       
                </Paper>
            </Box>
        <Box>



<Box>

        <Box
        sx={{
          boxShadow: "3px 3px 13px gray",
          border: "1px solid gray",
          borderRadius: "10px",
          cursor: "pointer",
          backgroundColor:"#46B1E1"
         
        }}
      >
        <CardActions
          disableSpacing
          sx={{
            justifyContent: "space-between",
            // backgroundColor: "navyblue",
            color: "white",
            borderBottom: "1px solid gray",
          }}
        >
          <span
            style={{
            //   backgroundColor: "#0193F5",
              padding: "8px",
              borderRadius: "5px",
            }}
            expand={expanded}
            onClick={handleExpandClick}
          >
            My Projects
          </span>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
</Box>

        
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700,  }} aria-label="customized table">
        <TableHead sx={{backgroundColor:"#2e9cb8"}}>
          <TableRow>
            <StyledTableCell>Project ​Description​</StyledTableCell>
            <StyledTableCell align="right">Customer</StyledTableCell>
            <StyledTableCell align="right">Project​ Reviewer</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </CardContent>
        </Collapse>
      </Box>

        </Box>


        <Box mt={3} >
        <Card
        sx={{
          boxShadow: "3px 3px 13px gray",
          border: "1px solid gray",
          borderRadius: "10px",
          cursor: "pointer",
          backgroundColor:"#46B1E1"
         
        }}
      >
        <CardActions
          disableSpacing
          sx={{
            justifyContent: "space-between",
            // backgroundColor: "navyblue",
            color: "white",
            borderBottom: "1px solid gray",
          }}
        >
          <span
            style={{
            //   backgroundColor: "#0193F5",
              padding: "8px",
              borderRadius: "5px",
            }}
            expand={expanded}
            // onClick={handleExpandClick}
          >
            My Models
          </span>

          <ExpandMore
            // expand={expanded}
            // onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          </CardActions>
          </Card>
        </Box>
        <Box mt={3} >
        <Card
        sx={{
          boxShadow: "3px 3px 13px gray",
          border: "1px solid gray",
          borderRadius: "10px",
          cursor: "pointer",
          backgroundColor:"#46B1E1"
         
        }}
      >
        <CardActions
          disableSpacing
          sx={{
            justifyContent: "space-between",
            color: "white",
            borderBottom: "1px solid gray",
          }}
        >
          <span
            style={{
            //   backgroundColor: "#0193F5",
              padding: "8px",
              borderRadius: "5px",
            }}
            expand={expanded}
            // onClick={handleExpandClick}
          >
            My Design Reviews
          </span>

          <ExpandMore
            // expand={expanded}
            // onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          </CardActions>
          </Card>
        </Box>
        </Box>
    )
};

export default App;