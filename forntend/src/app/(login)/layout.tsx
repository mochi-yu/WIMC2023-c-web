import { Footer } from "@/component/layout/footer";
import { Header } from "@/component/layout/header";

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