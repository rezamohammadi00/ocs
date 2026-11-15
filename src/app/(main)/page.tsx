import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold text-primary">بازرگانی اصولی شجاعی</h1>
      <p className="mt-4 text-muted-foreground">
        قیمت نمونه: {"formatPrice(9500000000)"}
      </p>
      <div className={cn("ms-4 mt-6 rounded-lg bg-secondary p-4")}>
        تست راست‌چین و توکن‌ها
      </div>
    </main>
  );
}
