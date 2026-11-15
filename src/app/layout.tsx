import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const peydaFont = localFont({
  src: [
    {
      path: "../../public/fonts/Peyda-Regular[@fontbazi].ttf",
      weight: "400",
      style: "normal", //✉️: font-normal
    },
    {
      path: "../../public/fonts/Peyda-Bold[@fontbazi].ttf",
      weight: "700",
      style: "normal", //✉️: font-bold
    },
  ],
});

export const metadata: Metadata = {
  title: "بازرگانی اصولی شجاعی",
  description: "بازرگانی اصولی شجاعی،صفر تا صد تجارت",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn("h-full", "antialiased", "font-sans", peydaFont.className)}
      suppressHydrationWarning
    >
      {/*✉️: the browser use the default font weight of 400 */}
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
