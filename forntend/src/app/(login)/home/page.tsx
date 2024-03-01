import { RecentRecordCard } from "./recent_record_card";
import { Divider, Stack } from "@mui/material";
import Map from "./map";
import { Zen_Maru_Gothic } from "next/font/google";
import { UserName } from "./_components/user_name";

const zen = Zen_Maru_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

// ホーム
export default function HomePage() {
  return (
    <Stack className={zen.className}>
      <UserName />

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
