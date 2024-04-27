import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

export default function BasicTable({ columns, rows, pagination = true, paperProps={} }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const GreenBackgroundTableRow = ({ status, children }) => (
    <TableRow sx={status === 'Satisfied'  ? { backgroundColor: 'lightgreen' } : status === 'UnSatisfied' ? { backgroundColor: 'lightpink' } : {}}  
    // hover role="checkbox" 
    tabIndex={-1}>
      {children}
    </TableRow>
  );

  return (
    <Paper
      variant="outlined"
      sx={{ mt: 2, borderRadius: "4px", overflow: "hidden", ...paperProps }}
    >
      <TableContainer sx={{ maxHeight: 240 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#46B1E1",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {

                return (
                 
                  <GreenBackgroundTableRow key={row.parameter} status={row.status}>

                    {/* <TableRow key={row.code}> */}
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={column.sx || {}}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                          
                      })}
                    {/* </TableRow> */}
                  </GreenBackgroundTableRow>
                  );
             
              
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {pagination && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
}