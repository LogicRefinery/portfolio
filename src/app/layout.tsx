import "./globals.css";
import type { Metadata } from "next";
// import { Noto_Sans_KR } from "next/font/google";

// const noto_sans_kr = Noto_Sans_KR({
//   subsets: ["latin"],
//   display: "swap", // 폰트 스왑 사용
// });

export const metadata: Metadata = {
  title: "김태형의 포트폴리오",
  description: "김태형의 프론트엔드 개발자 포트폴리오",
  openGraph: {
    images: ["/profile.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={` text-apple-black tracking-tighter`}>{children}</body>
    </html>
  );
}
