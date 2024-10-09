import "./globals.css";
import type { Metadata } from "next";
import { noto_sans_kr } from "@/_fonts/fonts";

export const metadata: Metadata = {
  title: "김태형의 포트폴리오",
  description: "김태형의 프론트엔드 개발자 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${noto_sans_kr.className} text-apple-black tracking-tighter`}
      >
        {children}
      </body>
    </html>
  );
}
