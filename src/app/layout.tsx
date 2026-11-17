import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { peydaFont, poppinsFont } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "بازرگانی اصولی شجاعی",
  description: "بازرگانی اصولی شجاعی،صفر تا صد تجارت",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        peydaFont.className,
        poppinsFont.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
