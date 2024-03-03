import { Divider, Stack } from "@mui/material";
import { PlaceList } from "./_components/place_list";
import { AddPlace } from "./_components/add_place";

export default function AdminPlacePage() {
  return (
    <Stack sx={{ minHeight: "80vh" }}>
      <AddPlace />
      <Divider sx={{ height: "5px" }} />
      <PlaceList />
    </Stack>
  );
}
