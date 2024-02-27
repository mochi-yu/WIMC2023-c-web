import { GoogleLoginButton } from "@/components/ui/button/login_google";
import { Stack, Typography } from "@mui/material";

export default function RootPage() {
  return (
    <>
      <Stack justifyContent='center' alignItems='center' height='100vh' spacing='50px'>
        <Stack alignItems='center'>
          <Typography variant='h5'>Web IoT メイカーズチャレンジ</Typography>
          <Typography variant='h5'>信州Cチーム</Typography>
        </Stack>
        <GoogleLoginButton />
      </Stack>
    </>
  );
}
