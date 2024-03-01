"use client";

import { UserInfoContext } from "@/components/contexts/auth";
import { Button, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { UserNameChangeModal } from "./user_name_change_modal";

export const UserName = () => {
  const { userInfo } = useContext(UserInfoContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  const userName = userInfo?.userName || "";
  console.log(userInfo);

  return (
    <Stack sx={{ margin: "30px", marginBottom: "0px" }}>
      <Typography variant='h5'>{userName} さん</Typography>
      <Button sx={{ width: "120px", alignItems: "left" }} onClick={handleOpen}>
        ユーザ名を変更
      </Button>
      <UserNameChangeModal isOpen={isOpen} handleClose={handleClose} userName={userName} />
    </Stack>
  );
};
