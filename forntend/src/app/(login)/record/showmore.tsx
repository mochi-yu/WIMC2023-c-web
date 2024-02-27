'use client';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RecordContent  from "./content";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion sx={{margin: 'auto', marginTop: 8}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Show More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <RecordContent />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}