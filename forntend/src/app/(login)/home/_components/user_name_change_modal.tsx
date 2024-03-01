"use client";

import { AuthContext, SetUserInfoContext, UserInfoContext } from "@/components/contexts/auth";
import { Loading } from "@/components/ui/loading";
import { PatchWithLogin } from "@/lib/axios";
import { UserData } from "@/model/user";
import { Box, Button, Modal, Stack, TextField } from "@mui/material";
import { ChangeEventHandler, useState, useContext } from "react";

interface Props {
  isOpen: boolean;
  userName: string;
  handleClose: () => void;
}

export const UserNameChangeModal = ({ isOpen, userName, handleClose }: Props) => {
  const { currentUser } = useContext(AuthContext);
  const { userInfo } = useContext(UserInfoContext);
  const { setUserInfo } = useContext(SetUserInfoContext);

  const [newName, setNewName] = useState(userName);
  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setNewName(e.target.value);
  };

  const [isLoading, setIsLoading] = useState(false);
  const handleSave = async () => {
    setIsLoading(true);
    const userId = currentUser?.uid;
    if (!userId || !userInfo) {
      setIsLoading(false);
      return;
    }

    await PatchWithLogin("/users/" + userId + "/name", { updateName: newName }).then(() => {
      const newUser: UserData = {
        userName: newName,
        userId: userInfo?.userId,
      };
      setUserInfo(newUser);
      handleClose();
    });

    setIsLoading(false);
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={style}>
        <Stack spacing={2}>
          <TextField variant='outlined' value={newName} onChange={handleChange} label='ユーザ名' />
          <Stack alignItems='end'>
            <Button
              variant='contained'
              sx={{ width: "40px", textAlign: "right" }}
              onClick={handleSave}
            >
              保存
            </Button>
          </Stack>
        </Stack>
        <Loading open={isLoading} />
      </Box>
    </Modal>
  );
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
