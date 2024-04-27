import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';

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

function createData(sno, reqID, name, derived, derivedFrom, satisfiedBy) {
  return {sno, reqID, name, derived, derivedFrom, satisfiedBy};
}

const rows = [
  createData("1.", "Req-CON-001", "Predict Surge Occurrence", "REQ-CON-001.1, REQ-CON-001.2, REQ-CON-001.3", "", ""),
  createData("2.", "Req-CON-001.1","Pressure Fluctuation Measure","","REQ-CON-001","Pressure Sensor"),
  createData("3.", "Req-CON-001.2","Spool SPeed Measure","","REQ-CON-001","Tachometer"),
  createData("4.", "Req-CON-001.3","Surge Margin","","REQ-CON-001","Compressor Map"),
  createData("5.", "<Abstraction>Derived 1","Derived 1","","",""),
  createData("6.", "<Abstraction>Derived 2","Derived 2","","",""),
  createData("7.", "<Abstraction>Derived 3","Derived 3","","",""),
  createData("8.", "Pressure Sensor Block","Pressure Sensor","","",""),
  createData("9.", "Tachometer Block","Tachometer","","",""),
  createData("10.", "Compressor Map Block","Compressor Map","","",""),
];

export default function TraceabilityMatrixTable() {
  return (
    <TableContainer component={Paper} >
      <Table sx={{width:"100%"}}  aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell></StyledTableCell> */}
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="left">Owned element</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Derived: <div></div> Abstract Requirement</StyledTableCell>
            <StyledTableCell align="left">Derived From</StyledTableCell>
            <StyledTableCell align="left">Satisfied By</StyledTableCell>
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
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.derived}</StyledTableCell>
              <StyledTableCell align="left">{row.derivedFrom}</StyledTableCell>
              <StyledTableCell align="left">{row.satisfiedBy}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
