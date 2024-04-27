import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Checkbox } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#B7B7B7",
    color: "#000000",
    fontWeight:"bold", 
    border:"1px solid #a1a0a0"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border:"1px solid #a1a0a0"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': { 
  },
}));

function createData(sno, reqID,SurgePR, AdapCL, LowWL,PsensInterface1,PsensInterface2,ClockInterface,SpeedInterface ) {
  return {sno, reqID, SurgePR, AdapCL, LowWL,PsensInterface1,PsensInterface2,ClockInterface,SpeedInterface};
}

const rows = [
  createData("1.", "Req-CON-001 Predict Surge", "", "", "", ""),
  createData("2.", "Req-CON-001.1Pressure Fluctuation"),
  createData("3.", "Req-CON-001.2Spool Speed measure"),
  createData("4.", "Req-CON-002.2Transition"),
  createData("5.", "Req-CON-002 Avert Surge"),
  createData("6.", "Req-CON-003 Minimum loss"),
  createData("7.", "Req-CON-004.1Fuel Flow measure"),
  createData("8.", "Req-CON-004.2 Time Tracking"),
  createData("9.", "Req-CON-004 Fuel Dip"),
];

export default function AllocationMatrixTable() {
  return (
   
    <TableContainer component={Paper} >
      <Table sx={{width:"100%"}}  aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell></StyledTableCell> */}
            <StyledTableCell colSpan={2} rowSpan={2}></StyledTableCell>
            <StyledTableCell align="center">A</StyledTableCell>
            <StyledTableCell align="center">B </StyledTableCell>
            <StyledTableCell align="center">C</StyledTableCell>
            <StyledTableCell align="center">D</StyledTableCell>
            <StyledTableCell align="center">E</StyledTableCell>
            <StyledTableCell align="center">F</StyledTableCell>
            <StyledTableCell align="center">G</StyledTableCell>
          </TableRow>
          <TableRow>
            {/* <StyledTableCell></StyledTableCell> */}
            <StyledTableCell align="center">SurgePR</StyledTableCell>
            <StyledTableCell align="center">AdapCL </StyledTableCell>
            <StyledTableCell align="center">LowWL</StyledTableCell>
            <StyledTableCell align="center">PsensInterface1</StyledTableCell>
            <StyledTableCell align="center">PsensInterface2</StyledTableCell>
            <StyledTableCell align="center">ClockInterface</StyledTableCell>
            <StyledTableCell align="center">SpeedInterface</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              {/* <StyledTableCell align="center"><Checkbox sx={{p:0}}/></StyledTableCell> */}
              <StyledTableCell component="th" scope="row">
                {row.sno}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.reqID}</StyledTableCell>
              <StyledTableCell align="center">{row.SurgePR} <Checkbox sx={{p:0}}/></StyledTableCell>
              <StyledTableCell align="center">{row.AdapCL} <Checkbox sx={{p:0}}/> </StyledTableCell>
              <StyledTableCell align="center">{row.LowWL} <Checkbox sx={{p:0}}/> </StyledTableCell>
              <StyledTableCell align="center">{row.PsensInterface1} <Checkbox sx={{p:0}}/> </StyledTableCell>
              <StyledTableCell align="center">{row.PsensInterface2} <Checkbox sx={{p:0}}/> </StyledTableCell>
              <StyledTableCell align="center">{row.ClockInterface} <Checkbox sx={{p:0}}/> </StyledTableCell>
              <StyledTableCell align="center">{row.SpeedInterface} <Checkbox sx={{p:0}}/> </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
  );
}
