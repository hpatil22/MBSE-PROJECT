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

const CompressorPerformanceAnalysisRows = [
  createData(
    "Compressor Performance Analysis",
    "CP_TC_1",
    "Pressure (Design Point)",
    "Aero Tharmal Analysis",
    "Compre_perf.fmu ",
    ""
  ),
  createData("", "CP_TC_2", "Core Size", "CFD Analysis", "Compre_perf.fmu", ""),
  createData("", "CP_TC_3", "Compressor exit Match number", "Compressor Performance Analysis", "Compre_perf.fmu", ""),
  createData("", "CP_TC_4", "Last Stage Hub-Tip ratio", " Compresor Structural Analysis", "Compre_perf.fmu", ""),
  createData("", "CP_TC_5", "Length and Weight", "Compresor Structural Analysis", "Compre_perf.fmu", ""),
  createData("", "CP_TC_6", "Efficiency", "Compressor Performance Analysis", "Compre_perf.fmu", ""),
  createData("", "CP_TC_7", "Pressure Ratio", "Compressor Performance Analysis", "Compre_perf.fmu", ""),
  createData("", "CP_TC_8", "Mass flow State", "CFD Analysis ", "Compre_perf.fmu", ""),
  createData("", "CP_TC_9", "Surge Line", " Compressor ", "Compre_perf.fmu", ""),
];
const StructuralValidationRows = [
  createData(
    "Structural Validation",
    "STRUCT_TC_1",
    "Static Structural Stress",
    "",
    "",
    ""
  ),
  createData("", "STRUCT_TC_2", "Thermomechanical Stress", "", "", ""),
  createData("", "STRUCT_TC_3", "Natural frequency", "", "", ""),
  createData("", "STRUCT_TC_4", "Fatigue Life", "", "", ""),
  createData("", "STRUCT_TC_5", "Reliability and Safety ", "", "", ""),
  createData("", "STRUCT_TC_6", "Blade Flutter ", "", "", "")
];
const CFDValidationRows = [
  createData(
    "CFD Validation",
    "CFD_TC_1",
    "Pressure Ratio",
    "",
    "",
    ""
  ),
  createData("", "CFD_TC_2", "Mass flow rate", "", "", ""),
  createData("", "CFD_TC_3", "Isentropic efficiency", "", "", ""),
  createData("", "CFD_TC_4", "Mach number", "", "", ""),
  createData("", "CFD_TC_5", "Compressor exit mach number", "", "", ""),
  createData("", "CFD_TC_6", "Surge Line", "", "", ""),
 
];
const ControlSystemValidationRows = [
  createData(
    "Control System Validation",
    "CONTRLSYS_TC_1",
    "Surge Indication Flag",
    "",
    "",
    ""
  ),
  createData("", "CONTRLSYS_TC_2", "Smooth transition", "", "", ""),
  createData("", "CONTRLSYS_TC_3", "Fuel dipping ", "", "", ""),
  createData("", "CONTRLSYS_TC_4", "Fuel dipping control", "", "", ""),
  createData("", "CONTRLSYS_TC_5", "off-design condition", "", "", ""),
  createData("", "CONTRLSYS_TC_6", "off-design control", "", "", ""),
  createData("", "CONTRLSYS_TC_7", "Transient control", "", "", ""),
];

export default function TestCaseMatrixTable() {
  const [domain, setDomain] = React.useState(10);

  const handleChange = (event) => {
    setDomain(event.target.value);
  };

  return (
    <TableContainer component={Paper}  >
      <Table sx={{ width: "100%" , }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell></StyledTableCell> */}
            <StyledTableCell align="center">
              <Box sx={{}}>
                <FormControl fullWidth>
                  <Select value={""} onChange={handleChange} displayEmpty>
                    <MenuItem value="">
                      <Typography fontWeight={"bold"}>Domain</Typography>
                    </MenuItem>
                    <MenuItem value={10}>
                      Compressor Performance Analysis
                    </MenuItem>
                    <MenuItem value={20}>Structural Validation</MenuItem>
                    <MenuItem value={30}>CFD Validation</MenuItem>
                    <MenuItem value={40}>Control System Validation</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </StyledTableCell>
            <StyledTableCell align="center">Test Case ID </StyledTableCell>
            <StyledTableCell align="center">Test Objective</StyledTableCell>
            <StyledTableCell align="center">Ananlysis Model</StyledTableCell>
            <StyledTableCell align="center">FMU Model</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {domain === 10 &&
            CompressorPerformanceAnalysisRows.map((row, index) => (
              <StyledTableRow key={row.name}>
                {/* <StyledTableCell align="center"><Checkbox sx={{p:0}}/></StyledTableCell> */}
                {index === 0 && (
                  <StyledTableCell
                    sx={{ maxWidth: "120px" }}
                    align="center"
                    component="th"
                    scope="row"
                    rowSpan={CompressorPerformanceAnalysisRows.length}
                  >
                    <Box>{row.domain}</Box>
                  </StyledTableCell>
                )}
                <StyledTableCell align="center" component="th" scope="row">
                  {row.testCaseId}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.testObjective}{" "}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.analysisModel}{" "}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.fmuModel}{" "}
                </StyledTableCell>
              </StyledTableRow>
            ))}

          {domain === 20 &&
            StructuralValidationRows.map((row, index) => (
              <StyledTableRow key={row.name}>
                {/* <StyledTableCell align="center"><Checkbox sx={{p:0}}/></StyledTableCell> */}
                {index === 0 && (
                  <StyledTableCell
                    sx={{ maxWidth: "120px" }}
                    align="center"
                    component="th"
                    scope="row"
                    rowSpan={StructuralValidationRows.length}
                  >
                    <Box>{row.domain}</Box>
                  </StyledTableCell>
                )}
                <StyledTableCell align="center" component="th" scope="row">
                  {row.testCaseId}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.testObjective}{" "}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.analysisModel}{" "}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.fmuModel}{" "}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          {domain === 30 &&
            CFDValidationRows.map((row, index) => (
              <StyledTableRow key={row.name}>
                {/* <StyledTableCell align="center"><Checkbox sx={{p:0}}/></StyledTableCell> */}
                {index === 0 && (
                  <StyledTableCell
                    sx={{ maxWidth: "120px" }}
                    align="center"
                    component="th"
                    scope="row"
                    rowSpan={CFDValidationRows.length}
                  >
                    <Box>{row.domain}</Box>
                  </StyledTableCell>
                )}
                <StyledTableCell align="center" component="th" scope="row">
                  {row.testCaseId}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.testObjective}{" "}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.analysisModel}{" "}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.fmuModel}{" "}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          {domain === 40 &&
            ControlSystemValidationRows.map((row, index) => (
              <StyledTableRow key={row.name}>
                {/* <StyledTableCell align="center"><Checkbox sx={{p:0}}/></StyledTableCell> */}
                {index === 0 && (
                  <StyledTableCell
                    sx={{ maxWidth: "120px" }}
                    align="center"
                    component="th"
                    scope="row"
                    rowSpan={ControlSystemValidationRows.length}
                  >
                    <Box>{row.domain}</Box>
                  </StyledTableCell>
                )}
                <StyledTableCell align="center" component="th" scope="row">
                  {row.testCaseId}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.testObjective}{" "}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.analysisModel}{" "}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.fmuModel}{" "}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
