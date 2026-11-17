import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const peydaFont = localFont({
  src: [
    {
      path: "../../public/fonts/Peyda-Regular[@fontbazi].ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Peyda-Bold[@fontbazi].ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
