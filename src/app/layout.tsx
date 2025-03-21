import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { metadata as siteMetadata } from "./metadata";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
