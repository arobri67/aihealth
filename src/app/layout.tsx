import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "starter - change me",
  description: "starter - change me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="favicon/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="favicon/favicon.svg" />
        <link rel="shortcut icon" href="favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}
