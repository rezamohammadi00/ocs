"use client";
import { useRef, useState, useEffect, useCallback, ReactNode } from "react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";
//Global Imports
import { Button } from "@/components/ui/Button";

type IScrollerProps = {
  children: ReactNode;
  scrollAmount?: number;
};

export const Scroller = ({ children, scrollAmount = 300 }: IScrollerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canGoNext, setCanGoNext] = useState(true);
  const [canGoPrev, setCanGoPrev] = useState(false);

  const updateButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const pos = Math.abs(el.scrollLeft);
    const max = el.scrollWidth - el.clientWidth;

    setCanGoPrev(pos > 1);
    setCanGoNext(pos < max - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });

    const ro = new ResizeObserver(updateButtons);
    ro.observe(el);
    Array.from(el.children).forEach((c) => ro.observe(c));

    return () => {
      el.removeEventListener("scroll", updateButtons);
      ro.disconnect();
    };
  }, [updateButtons]);

  const scrollNext = () =>
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  const scrollPrev = () =>
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });

  return (
    <div className="relative min-w-0 flex-1">
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden *:shrink-0"
      >
        {children}
      </div>

      {canGoPrev && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20">
          <Button
            variant="white"
            appearance="solid"
            size="icon-xs"
            onClick={scrollPrev}
          >
            <ArrowRight2 />
          </Button>
        </div>
      )}

      {canGoNext && (
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20">
          <Button
            variant="white"
            appearance="solid"
            size="icon-xs"
            onClick={scrollNext}
          >
            <ArrowLeft2 />
          </Button>
        </div>
      )}
    </div>
  );
};
