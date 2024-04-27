import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
const GreenBackgroundTableRow = ({ status, children }) => (
    <TableRow sx={status === 'satisfied' ? { backgroundColor: 'green' } : {}}>
      {children}
    </TableRow>
  );
  
  const BasicTable1 = ({ columns, rows }) => {
    return (
      <TableContainer>
        <Table>
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <GreenBackgroundTableRow key={row.parameter} status={row.status}>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {row[column.id]}
                  </TableCell>
                ))}
              </GreenBackgroundTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  export default BasicTable1;