import { Stack, Box } from "@mui/material";
import RecordContent from "./content";
import Showmore from "./showmore";
import { Zen_Maru_Gothic } from "next/font/google";

const zen = Zen_Maru_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

// 記録一覧
export default function RecordPage() {
  return (
    <Stack>
      <Box className={zen.className}>
        <h1
          style={{
            background: "#68a9cf",
            boxShadow: "0px 0px 0px 5px #68a9cf",
            border: "dashed 2px white",
            padding: "0.2em 0.5em",
            width: 300,
            margin: "auto",
            marginTop: "30px",
            textAlign: "center",
            borderRadius: "10px",
            color: "white",
          }}
        >
          記録一覧
        </h1>
        <RecordContent />
        <RecordContent />
      </Box>
      <Box className={zen.className}>
        <Showmore />
      </Box>
    </Stack>
  );
}
