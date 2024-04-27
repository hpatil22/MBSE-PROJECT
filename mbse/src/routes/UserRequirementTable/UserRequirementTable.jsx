import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";
import ReviewEditor from "./ReviewEditor";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#B7B7B7",
    color: "#000000",
    fontWeight: "bold",
    border: "1px solid #a1a0a0",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "1px solid #a1a0a0",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {},
}));

function createData(
  reqID,
  businessNeeds,
  businessRequirements,
 
  systemEngineerName,
  Review
) {
  return {
    reqID,
    businessNeeds,
    businessRequirements,
    
    systemEngineerName,
    Review,
  };
}

const rows = [
  createData("Blisk_AT_1 ", " ", "The blisk design should be able to develop the expected stage pressure ratio. ", " Payal Mandloi", " ", " ",),
  createData("Blisk_Str_1"," "," The natural frequency and mode shapes of the blisk during operation should be within acceptable limit", "Payal Mandloi"),
  createData("Blisk_MPA_1"," "," The porosity of the final blisk should be within defined limits","Payal Mandloi"),
  // createData(),
  // createData(),
  // createData(),
  // createData(),
  // createData(),
];



export default function UserRequirementTable(props) {
  console.log(props.user );
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Req. ID</StyledTableCell>
            <StyledTableCell align="center">Business Needs</StyledTableCell>
            <StyledTableCell align="center">
              Business Requirements
            </StyledTableCell>
            {/* <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">User Name</StyledTableCell> */}
            <StyledTableCell align="center">
              System Engineer Name
            </StyledTableCell>
            <StyledTableCell align="center">Review</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center">
                <Checkbox sx={{ p: 0 }} />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row. reqID}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.businessNeeds}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row. businessRequirements}
              </StyledTableCell>
              {/* <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.userName}</StyledTableCell> */}
              <StyledTableCell align="center">
                {row.systemEngineerName}
              </StyledTableCell>
              <StyledTableCell align="left" sx={{ width: "250px", p:0 }}>
                <ReviewEditor/>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
