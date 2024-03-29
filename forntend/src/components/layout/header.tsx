import { Stack, Typography } from "@mui/material";
import { LogoutIconButton } from "../ui/button/logout_icon";

export function Header() {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      spacing={2}
      sx={{ px: "20px", bgcolor: "#68a4d9" }}
      height='60px'
    >
      <Typography sx={{ fontSize: "30px", color: "white" }}>スキー記録</Typography>
      <LogoutIconButton />
    </Stack>
  );
}
