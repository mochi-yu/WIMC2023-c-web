"use client";

import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";

export function LogoutIconButton() {
  const logout = () => {
    signOut(auth);
  };

  return (
    <IconButton onClick={logout} sx={{ color: "white" }}>
      <LogoutIcon />
    </IconButton>
  );
}
