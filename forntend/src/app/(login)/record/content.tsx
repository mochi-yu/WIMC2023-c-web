'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { format} from 'date-fns';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#a2c2e6",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function createData(
  time: string,
  speed: string,
  date: string,
) {
  return { time, speed, date };
}

const day = new Date();
const formatday = format(day, 'yyyy年MM月dd日');
const hms = format(day, 'HH:mm:ss');

const rows = [
  createData('10分50秒', '100m/s', hms),
  createData('10分50秒', '100m/s', hms),
  createData('10分50秒', '100m/s', hms),
];

export default function BasicTable() {
  return (
    <>
    <><h3 style={{marginTop: 40, padding: 10}}>{formatday}</h3></>
    <TableContainer
      component={Paper}
      sx={{
        width: 380, 
        marginLeft: 1, 
        marginRight: 1
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">タイム</StyledTableCell>
            <StyledTableCell align="center">速度</StyledTableCell>
            <StyledTableCell align="center">日時</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.time}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row" align="center">{row.time}</StyledTableCell>
              <StyledTableCell align="center">{row.speed}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}