import { Roboto } from "next/font/google";
import localFont from "next/font/local";

export const nasa = localFont({
  src: "../../public/Nasalization.woff",
  variable: "--font-nasa",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
