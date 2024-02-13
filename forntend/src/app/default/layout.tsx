import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import { Box, Container, Paper } from '@mui/material';
import { Header } from '@/component/layout/header';
import { Footer } from '@/component/layout/footer';
import Theme from '../theme';

export const metadata: Metadata = {
  title: 'スキー記録',
  description: 'スキーの記録を取るアプリです。',
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* PWAの設定 */}
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#b8e986" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <Theme options={{ key: 'mui' }}>
          <Box sx={{ bgcolor: '#F4F4F4', minHeight: '100vh' }}>
            <Container maxWidth="xs" sx={{ padding: 0 }}>
              <Paper sx={{ px: 0, bgcolor: 'white', minHeight: '100vh' }}>
                <Header />
                {children}
                <Footer />
              </Paper>
            </Container>
          </Box>
        </Theme>
      </body>
    </html>
  );
}
