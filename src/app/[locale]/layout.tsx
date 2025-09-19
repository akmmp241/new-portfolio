import type {Metadata} from "next";
import {Fira_Code} from "next/font/google";
import "../globals.css"
import {Header} from "@/app/[locale]/_components/header";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Akmal Muhammad Pridianto",
  description: "Akmal's Portfolio",
  openGraph: {
    type: 'website',
    url: 'https://akmalmp.my.id',
    title: 'AkmalMP | Software Engineer',
    description: 'He builds reliable backend systems where performance meets scalability.',
    siteName: 'AkmalMP - Portfolio',
    images: [
      {
        url: '/akm-2.png',
        width: 1200,
        height: 1200,
        alt: 'AkmalMP',
      },
      {
        url: '/akm-2.png',
        width: 1200,
        height: 630,
        alt: 'AkmalMP',
      },
      {
        url: '/akm-2.png',
        width: 630,
        height: 630,
        alt: 'AkmalMP',
      }
    ]
  }
};

export default async function RootLayout({
                                           children,
                                           params
                                         }: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}>) {

  const {locale} = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={firaCode.className}>
    <body
      className={`antialiased bg-background`}
    >
    <NextIntlClientProvider>
      <Header/>
      {children}
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
