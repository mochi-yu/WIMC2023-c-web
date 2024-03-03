import { Button, Stack } from "@mui/material";
import Link from "next/link";

export default function AdminPage() {
  return (
    <Stack
      sx={{ m: "30px", minHeight: "80vh" }}
      spacing={2}
      justifyContent='center'
      alignItems='center'
    >
      <Link href='/admin/place'>
        <Button variant='contained'>場所の追加</Button>
      </Link>
      <Link href='/admin/record'>
        <Button variant='contained'>記録の追加</Button>
      </Link>
    </Stack>
  );
}
