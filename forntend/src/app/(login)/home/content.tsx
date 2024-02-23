'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NestedGrid() {
  return (
    <><Box>
      <Grid container spacing={10} justifyContent={'center'}>
        <Grid container xs={12} md={9} lg={8} spacing={4}>

          <Grid xs={30} lg={3}>
            <Item sx={{ backgroundColor: '#f7f6fb' }}>
              <Box
                id="RecentRecord"
                sx={{
                  backgroundColor: "#b2cbe4",
                  fontSize: '16px',
                  textTransform: 'uppercase'
                }}
              >
                最新の記録
              </Box>
              <Box component="ul" aria-labelledby="RecentRecord"
                sx={{
                  fontSize: '16px',
                  marginLeft: '10px',
                  textAlign: 'left',
                  listStyle: 'none'
                }}>
                <li>場　所　：白馬五竜</li>
                <li>距　離　：3 km</li>
                <li>タイム　：２分15秒</li>
                <li>平均速度：80 m/s</li>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </>
  );
}
