import type {Metadata} from "next";
import {Fira_Code} from "next/font/google";
import "./globals.css";
import {Header} from "@/app/_components/header";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Akmal Muhammad Pridianto",
  description: "Akmal's Portfolio",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firaCode.className}>
    <body
      className={`antialiased bg-background`}
    >
    <Header/>
    {children}
    </body>
    </html>
  );
}
