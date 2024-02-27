'use client';

import { Stack, Typography, IconButton, createTheme, ThemeProvider } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { prepareForSlot } from '@mui/base/utils';
import Link from 'next/link';

const LinkSlot = prepareForSlot(Link);

export function Header() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{ px: '20px', bgcolor: '#68a4d9' }}
      height="80px"
    >
      
      <Typography sx={{fontSize: '30px', color: "white", float: 'right'}}>
        スキー記録  
      </Typography>
      <IconButton<typeof LinkSlot> href="/" slots={{ root: LinkSlot }} prefetch={false}>
        <LoginIcon />
        <label style={{fontSize: 20}}>login</label>
      </IconButton>
    </Stack>
  );
}