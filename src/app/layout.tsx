import "@/styles/globals.css";
import { peydaFont, poppinsFont } from "@/lib/fonts";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

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
