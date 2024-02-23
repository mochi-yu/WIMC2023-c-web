import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

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