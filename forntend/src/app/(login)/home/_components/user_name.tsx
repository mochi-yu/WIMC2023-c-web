"use client";

import { UserInfoContext } from "@/components/contexts/auth";
import { Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";

export const UserName = () => {
  const { userInfo } = useContext(UserInfoContext);
  const userName = userInfo?.userName || "";
  console.log(userInfo);

  return (
    <Stack sx={{ margin: "30px", marginBottom: "0px" }}>
      <Typography variant='h5'>{userName} さん</Typography>
      <Button sx={{ width: "120px", alignItems: "left" }}>ユーザ名を変更</Button>
    </Stack>
  );
};
