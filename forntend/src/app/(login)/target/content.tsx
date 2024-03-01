"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import { Grid, Stack } from "@mui/material";

//cookie//
import { useCookies } from "react-cookie";
import { useFormContent } from "./useFormContent";

const Form = () => {
  const [
    { distance, time, speed, memo },
    { handleDistanceChange, handleTimeChange, handleSpeedChange, handleMemoChange, handleSave },
  ] = useFormContent();

  const [cookies] = useCookies(["distance", "time", "speed", "memo"]);

  return (
    <Stack>
      <Box
        sx={{
          "& .MuiTextField-root": {
            marginLeft: "20%",
            marginTop: "10px",
            width: "15ch",
            float: "left",
          },
          textAlign: "center",
        }}
      >
        <TextField
          name='distance'
          label='距離'
          value={distance || ""}
          onChange={handleDistanceChange}
          sx={{
            backgroundColor: "white",
          }}
        />
        <h4 style={{ marginRight: "15%" }}>あたりの目標設定</h4>
      </Box>
      <br />
      <Box
        component='form'
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
          textAlign: "center",
        }}
        noValidate
        autoComplete='off'
      >
        <div>
          <TextField
            id='TGtime'
            label='目標タイム 分:秒'
            name='time'
            value={time || ""}
            onChange={handleTimeChange}
            sx={{ backgroundColor: "white" }}
          />
        </div>
        <br />
        <div>
          <TextField
            id='TGspeed'
            label='目標速度'
            name='speed'
            value={speed || ""}
            onChange={handleSpeedChange}
            sx={{ backgroundColor: "white" }}
          />
        </div>
        <br />
        <div>
          <TextField
            id='TGmemo'
            label='その他メモ'
            name='memo'
            value={memo || ""}
            onChange={handleMemoChange}
            sx={{ backgroundColor: "white" }}
          />
        </div>
        <br />
      </Box>

      <Grid container justifyContent={"flex-end"}>
        <IconButton type='submit' onClick={handleSave}>
          <SaveIcon fontSize='large' sx={{ color: "#007199" }} />
          <label style={{ fontSize: 15 }}>保存</label>
        </IconButton>
      </Grid>
      <hr style={{ width: "100%", border: "double #4496d3 3px" }}></hr>
      <h2
        style={{
          textAlign: "center",
          margin: 30,
          borderRadius: "10px",
          backgroundColor: "#4496d3",
          color: "white",
        }}
      >
        目標
      </h2>

      <Box
        sx={{
          m: "auto",
          width: "40ch",
          backgroundColor: "#f7f6fb",
          p: "8px",
          borderRadius: "4px",
          boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
        }}
      >
        <ul>
          <li>距離：{cookies.distance || ""}</li>
          <li>目標タイム：{cookies.time || ""}</li>
          <li>目標速度：{cookies.speed || ""}</li>
          <li>メモ：{cookies.memo || ""}</li>
        </ul>
      </Box>
    </Stack>
  );
};

export default Form;
