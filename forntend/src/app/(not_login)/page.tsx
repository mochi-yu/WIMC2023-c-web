import { GoogleLoginButton } from "@/components/ui/button/login_google";
import { Stack, Typography, Box } from "@mui/material";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { Header } from "@/components/layout/not_login_head";
import { Footer } from "@/components/layout/not_login_foot"

const M_Plus = M_PLUS_Rounded_1c({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
})

export default function RootPage() {
  return (
    <>
      <Header />
      <Stack justifyContent='center' alignItems='center' height='100vh' spacing='50px' sx={{backgroundColor: "#fff9f4"}}>
        <Stack alignItems='center'>
          <Box sx={{backgroundColor: "#68a4d9", width: "100%", height: "10px", marginBottom: "15px"}} />

          {/* TODO: 題字を追加 */}
          <Typography variant='h5' className={M_Plus.className}>Web IoT メイカーズチャレンジ</Typography>
          <Typography variant='h5' className={M_Plus.className}>信州Cチーム</Typography>

          <Box sx={{backgroundColor: "#68a4d9", width: "100%", height: "10px", marginTop: "15px"}} />
        </Stack>
        <GoogleLoginButton />
      </Stack>
      <Footer />
    </>
  );
}
