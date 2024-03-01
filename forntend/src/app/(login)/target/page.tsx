import { Stack } from "@mui/material";
import Targetcontent from "./content";
import { Zen_Maru_Gothic } from "next/font/google";

const zen = Zen_Maru_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

{/*目標設定*/}
export default function TargetPage() {
  return (
    <Stack className={zen.className} sx={{backgroundColor: "#fff9f4"}}>
      <h1
        style={{
          background: "#68a9cf",
          boxShadow: "0px 0px 0px 5px #68a9cf",
          border: "dashed 2px white",
          padding: "0.2em 0.5em",
          width: 300,
          margin: "auto",
          marginTop: "20px",
          marginBottom: "20px",
          textAlign: "center",
          borderRadius: "10px",
          color: "white",
        }}
      >
        目標設定
      </h1>
      <Targetcontent />
    </Stack>
  );
}
