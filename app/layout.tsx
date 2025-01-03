import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

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
      <GoogleTagManager gtmId="GTM-56KMRTSP" />
      <body className={`${nasa.className} ${roboto.className} antialiased`}>
        {children}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-56KMRTSP" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        <Analytics />
      </body>
    </html>
  );
}
