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
    <>
    <Box
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
          endAdornment={<InputAdornment position="end">Km</InputAdornment>}
          sx={{ float: "left", width: '15ch', marginLeft: '7ch' }} />
        <h4 style={{ paddingTop: '1ch' }}>あたりの目標設定</h4>
      </div><br />
      <div>
        <TextField
          id="TGtime"
          label="目標タイム 分:秒"
          type="time" 
        />
      </div><br />
      <div>
        <TextField
          id="TGspeed"
          label="目標速度"
          type="text"

        />
      </div><br />
      <div>
        <TextField
          id="TGmemo"
          label="その他メモ"
          type="text"
        />
      </div><br />
    </Box>

    <Grid container justifyContent={'flex-end'}>
      <IconButton type='submit' aria-label="Save">
        <SaveIcon fontSize="large" sx={{color: "#007199"}}  />
        <label style={{fontSize: 15}}>保存</label>
      </IconButton>
    </Grid>
    </>
  );
}
