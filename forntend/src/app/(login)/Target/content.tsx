'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import { Grid } from '@mui/material';

export default function FormPropsTextFields() {
  return (
    <><Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '27ch' },
        textAlign: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <OutlinedInput
          id="filled-far-input"
          type="Targetfar"
          endAdornment={<InputAdornment position="end">m</InputAdornment>}
          sx={{ float: "left", width: '15ch', marginLeft: '7ch' }} />
        <h4 style={{ paddingTop: '1ch' }}>あたりの目標設定</h4>
      </div><br />
      <div>
        <TextField
          id="TGtime"
          label="目標タイム"
          type="Targettime" />
      </div><br />
      <div>
        <TextField
          id="TGspeed"
          label="目標速度"
          type="Targetspeed" />
      </div><br />
      <div>
        <TextField
          id="TGmemo"
          label="その他メモ"
          type="Targetmemo" />
      </div><br />
    </Box>
    <Grid container justifyContent={'flex-end'}>
      <IconButton aria-label="Save" size="large">
      <SaveIcon fontSize="inherit" />
    </IconButton>
    </Grid>
    </>
  );
}
