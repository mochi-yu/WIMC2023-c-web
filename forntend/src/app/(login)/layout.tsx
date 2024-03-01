import CheckNotLogin from "@/components/auth/check_not_login";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: Props) {
  return (
    <>
      <CheckNotLogin>
        <Box sx={{ backgroundColor: "#fff9f4" }}>
          <Header />
          {children}
          <Footer />
        </Box>
      </CheckNotLogin>
    </>
  );
}
