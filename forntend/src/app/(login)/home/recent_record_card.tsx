"use client";

import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function RecentRecordCard() {
  const sampleData = {
    placeName: "白馬五竜",
    distance: 3,
    time: "2分15秒",
    speed: "80 m/s",
  };

  return (
    <>
      <Stack
        sx={{
          backgroundColor: "#f7f6fb",
          m: "20px",
          p: "8px",
          borderRadius: "4px",
          boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#4496d3",
            fontSize: "20px",
            textAlign: "center",
            mb: "20px",
            color: "white"
          }}
        >
          最新の記録
        </Box>
        <Stack
          sx={{
            fontSize: "20px",
            alignItems: "center",
            mb: "20px"
          }}
        >
          <Stack>
            <Typography>場　所　：{sampleData.placeName}</Typography>
            <Typography>距　離　：{sampleData.distance}km</Typography>
            <Typography>タイム　：{sampleData.time}</Typography>
            <Typography>平均速度：{sampleData.speed}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
