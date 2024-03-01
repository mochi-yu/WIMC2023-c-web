import CheckNotLogin from "@/components/auth/check_not_login";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

interface Props {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: Props) {
  return (
    <>
      <CheckNotLogin>
        <Header />
        {children}
        <Footer />
      </CheckNotLogin>
    </>
  );
}
