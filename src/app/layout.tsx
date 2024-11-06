import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";

import AppNavBar from "@/components/app-navbar";
import { cn } from "@/lib/utils";

import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="AI Healthcare Hub" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={cn(
          `${inter.variable} ${bricolage.variable} h-full antialiased`
        )}>
        <AppNavBar />
        {children}
      </body>
    </html>
  );
}
