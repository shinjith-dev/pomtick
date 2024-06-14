import type { Metadata } from "next";
import "./globals.css";
import { nunito } from "@/lib/fonts";

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
        className={`${nunito.className} flex h-screen w-screen flex-col bg-base max-h-screen overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
