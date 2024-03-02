import { Stack } from "@mui/material";
import { RecordList } from "./_components/record_list";
import { AddRecord } from "./_components/add_record";

export default function AdminRecordPage() {
  return (
    <Stack sx={{ minHeight: "80vh", m: "30px" }}>
      <AddRecord />
      <RecordList />
    </Stack>
  );
}
