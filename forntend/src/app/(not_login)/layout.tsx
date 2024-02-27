import CheckLogin from "@/components/auth/check_login";

interface Props {
  children: React.ReactNode;
}

export default function NotLoginLayout({ children }: Props) {
  return <CheckLogin>{children}</CheckLogin>;
}
