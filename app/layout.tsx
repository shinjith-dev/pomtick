import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pomtick",
  description: "The timer that makes you tick.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="default">
      <body
        className={`${inter.className} flex h-screen w-screen flex-col bg-base`}
      >
        {children}
      </body>
    </html>
  );
}
