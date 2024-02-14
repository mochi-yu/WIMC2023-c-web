'use client';

import { Stack, Typography, IconButton, createTheme, ThemeProvider } from '@mui/material';

export function Header() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{ px: '20px', bgcolor: '#4496d3' }}
      height="80px"
    >
      <Typography fontSize={32} color="white">
        スキー記録  
      </Typography>
      <IconButton />
    </Stack>
  );
}