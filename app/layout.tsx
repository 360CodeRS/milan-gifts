import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Milan Gifts",
  description:
    "Milan Gifts - Your one-stop shop for unique and thoughtful gifts",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" as="image" href="/assets/hero.jpg" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
