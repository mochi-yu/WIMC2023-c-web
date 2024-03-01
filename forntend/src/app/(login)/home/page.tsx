import { RecentRecordCard } from "./recent_record_card";
import { Button, Divider, Stack, Typography } from "@mui/material";
import Map from "./map";
import { Zen_Maru_Gothic } from "next/font/google";

const zen = Zen_Maru_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

{
  /*ホーム*/
}
export default function HomePage() {
  const userName = "サンプルユーザー";
  return (
    <Stack className={zen.className} sx={{ backgroundColor: "#fff9f4" }}>
      <Stack sx={{ margin: "30px", marginBottom: "0px" }}>
        <Typography variant='h5'>{userName} さん</Typography>
        <Button sx={{ width: "120px", alignItems: "left" }}>ユーザ名を変更</Button>
      </Stack>

      <Stack>
        <RecentRecordCard />
      </Stack>
      <br />

      <Divider style={{ width: "100%", border: "double #4496d3 3px" }} />

      <h2
        style={{
          textAlign: "center",
          margin: 30,
          borderRadius: "10px",
          backgroundColor: "#4496d3",
          color: "white",
        }}
      >
        スキーコース
      </h2>
      <Map />
      <br />
    </Stack>
  );
}
