import type { Metadata } from "next";

import "./globals.css";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

// Font files can be colocated inside of `pages`
const nasa = localFont({ src: "../public/nasa.otf" });

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
      <body className={`${nasa.className} ${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
