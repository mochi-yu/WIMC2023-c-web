"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { format } from "date-fns";
import { Stack } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#a2c2e6",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(time: string, speed: string, date_hms: string) {
  return { time, speed, date_hms };
}

const day = new Date();
const formatday = format(day, "yyyy年MM月dd日");
const hms = format(day, "HH:mm:ss");

// export function Record() {
  const rows = [
    createData("10分50秒", "101m/s", hms),
    createData("9分51秒", "110m/s", hms),
    createData("11分50秒", "98m/s", hms),
  ];
//}

export default function BasicTable() {
  return (
    <Stack>
      <h3 style={{ marginTop: 20, padding: 10 }}>{formatday}</h3>
      <TableContainer
        component={Paper}
        sx={{
          width: 300,
          m: "auto",
          mb: "30px",
          border: "5px black"
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>タイム</StyledTableCell>
              <StyledTableCell align='center'>速度</StyledTableCell>
              <StyledTableCell align='center'>日時</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component='th' scope='row' align='center'>
                  {row.time}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.speed}</StyledTableCell>
                <StyledTableCell align='center'>{row.date_hms}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
