import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Dialouge from "../../Dailouge";

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
  domain,
  testCaseId,
  testObjective,
  analysisModel,
  fmuModel
) {
  return { domain, testCaseId, testObjective, analysisModel, fmuModel };
}

const rows = [
  createData(
    "Compressor Performance Analysis",
    "CP_TC_1",
    "Pressure (Design Point)",
    "",
    "",
    ""
  ),
  createData(
    "Compressor Performance Analysis",
    "CP_TC_2",
    "Core Size",
    "",
    "",
    ""
  ),
  createData(
    "Compressor Performance Analysis",
    "CP_TC_3",
    "Compressor exit Match number",
    "",
    "",
    ""
  ),
  createData(
    "Compressor Performance Analysis",
    "CP_TC_4",
    "Last Stage Hub-Tip ratio",
    "",
    "",
    ""
  ),
 
];

export default function ModelEditorTable() {
  const [domain, setDomain] = React.useState(10);

  const handleChange = (event) => {
    setDomain(event.target.value);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  sx={{width: "10%"}}>Select Test Context</StyledTableCell>
            <StyledTableCell align="center">Analysis</StyledTableCell>
            <StyledTableCell align="center">Test Case ID </StyledTableCell>
            <StyledTableCell align="center">Test Case Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center">
                <Checkbox sx={{ p: 0 }} />
              </StyledTableCell>
              {
                <StyledTableCell
                  sx={{ maxWidth: "120px" }}
                  align="center"
                  component="th"
                  scope="row"
                >
                  <Box>{row.domain}</Box>
                </StyledTableCell>
              }
              <StyledTableCell align="center" component="th" scope="row">
                {row.testCaseId}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.testObjective}{" "}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
     
    </TableContainer>
  );
}
