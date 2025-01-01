import type { Metadata } from "next";
import { nasa, roboto } from "./components/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "RLink",
  description: "My projects and case studies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/rm-icon.png" type="rm-icon" sizes="16x16" />
      <body className={`${nasa.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
