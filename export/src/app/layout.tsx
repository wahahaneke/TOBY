import type { Metadata } from "next";
import { Archivo_Black, Montserrat } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { metadata as siteMetadata } from "./metadata";

const archivoblack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo-black",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivoblack.variable} ${montserrat.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
