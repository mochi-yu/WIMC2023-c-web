import { RecentRecordCard } from "./recent_record_card";
import { Stack } from "@mui/material";
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
  return (
    <Stack className={zen.className} sx={{ backgroundColor: "#fff9f4" }}>
      <Stack sx={{ marginTop: 5 }}>
        <RecentRecordCard />
      </Stack>
      <br />

      <line style={{ width: "100%", border: "double #4496d3 3px" }}></line>
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
