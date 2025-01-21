import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";

import AddCompany from "@/components/app-add-company";
import { AppFooter } from "@/components/app-footer";
import AppNavBar from "@/components/app-navbar";
import NewsletterSection from "@/components/app-newsletter/newsletter-section";
import { Toaster } from "@/components/ui/sonner";
import { env } from "@/env/client";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(`${env.NEXT_PUBLIC_BASE_URL}`),
  openGraph: {
    siteName: "AI for Healthcare Hub",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  applicationName: "AI for Healthcare Hub",
  appleWebApp: {
    title: "AI for Healthcare Hub",
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
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
        {/* <script
          src="https://www.websense.online/cdn/websense.js"
          defer></script>
        <script data-collect-dnt="true" async src="https://scripts.simpleanalyticscdn.com/latest.js"></script> */}
        <script defer data-domain="aiforhealthcarehub.com" src="https://plausible.irbo.dev/js/script.outbound-links.tagged-events.js"></script>
      </head>
      <body
        className={cn(
          `${inter.variable} ${bricolage.variable} h-full antialiased`
        )}>
        <AppNavBar />
        <main className="min-h-screen">
          {children}
          <Toaster />
          <AddCompany />
          <NewsletterSection />
        </main>
        <AppFooter />
      </body>
    </html>
  );
}
