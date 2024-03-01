"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RecordContent from "./content";
import { Stack } from "@mui/material";

export default function SimpleAccordion() {
  return (
    <Stack sx={{m: "auto"}}>
      <Accordion sx={{ mt: 8 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          style={{backgroundColor: "#4496d3", color:"white"}}
        >
          <Typography >もっと見る</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: "#fff9f4"}}>
          <RecordContent />
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
