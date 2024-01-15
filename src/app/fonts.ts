// app/fonts.ts
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-Poppins",
  display: "swap",
});

export const fonts = {
  poppins,
};
