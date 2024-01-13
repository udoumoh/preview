// app/fonts.ts
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export const fonts = {
  poppins,
};
