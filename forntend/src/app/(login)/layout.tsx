import { Footer } from "@/app//layout/footer";
import { Header } from "@/app/layout/header";

interface Props {
  children: React.ReactNode
}

export default function LoginLayout({children}: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}