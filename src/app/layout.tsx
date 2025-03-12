import type { Metadata } from 'next';
import { Noto_Sans_KR, Poppins } from 'next/font/google';
import './globals.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'ToKyun',
  description: '2025년, 프론트엔드 개발자 김도균의 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${notoSansKr.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
