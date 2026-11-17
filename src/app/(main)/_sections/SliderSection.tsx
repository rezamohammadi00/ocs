"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
//GLOBAL
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { COPY } from "@/lib/copy";
import Tag from "@/components/ui/Tag";

const sliderThumbShapeExact = `h-[74px] w-28 bg-white
    [clip-path:path('M0_74V12C0_8.309_2.898_5.268_6.584_5.09L100.014_0.579C106.538_0.264_112_5.468_112_12V74H0Z')]`;

const { heroTabs, mainSlider } = COPY;

export const SliderSection = () => {
  const [activeId, setActiveId] = useState<string>(mainSlider.defaultTabId);

  return (
    <section className="mt-12 bg-linear-to-b from-white to-(--action-primary-light-bg) relative">
      <Container>
        <div className="flex justify-between">
          {/* right */}
          <div className="flex-1">
            {/* All tabs share one grid cell, so height = tallest tab */}
            <div className="grid">
              {heroTabs.map((t) => {
                const selected = t.id === activeId;
                return (
                  <div
                    key={t.id}
                    aria-hidden={!selected}
                    className={cn(
                      "col-start-1 row-start-1",
                      !selected && "invisible pointer-events-none",
                    )}
                  >
                    <p className="text-(--saffron-500) font-bold text-xl">
                      {t.subtitle}
                    </p>
                    <div>
                      <Image
                        src={mainSlider.decorationImage}
                        alt={mainSlider.heroAlt}
                        width={103.79}
                        height={13.05}
                      />
                    </div>
                    <h1 className="text-5xl text-(--border-info) font-bold mt-3 max-w-[470.4px]">
                      {t.title.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </h1>
                    <ul className="flex gap-2 mt-6">
                      {t.tags.map((tag) => (
                        <li key={tag}>
                          <Tag color="neutral">{tag}</Tag>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-(--landing-section-little-text) mt-3 mb-6">
                      {t.description}
                    </p>
                    <Button>
                      <Link href={t.href} tabIndex={selected ? 0 : -1}>
                        {mainSlider.cta}
                      </Link>
                    </Button>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-1 absolute -bottom-6">
              {heroTabs.map((t) => {
                const selected = t.id === activeId;
                return (
                  <div
                    key={t.id}
                    onClick={() => setActiveId(t.id)}
                    className={cn(
                      sliderThumbShapeExact,
                      "cursor-pointer transition-all duration-200 text-(--landing-section-little-text)",
                      selected &&
                        "bg-(--action-primary-solid-bg) text-(--action-primary-outline-light-border) -mt-6",
                    )}
                  >
                    <div className="text-center text-sm mt-4">{t.tab}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* left */}
          <div className="flex-1">
            {/* Fixed-ratio box, so different image sizes can't change the height */}
            <div className="relative w-full max-w-[761.6px] aspect-[761.6/504]">
              {heroTabs.map((t) => (
                <Image
                  key={t.id}
                  src={t.image}
                  alt={t.tab}
                  fill
                  sizes="761px"
                  priority={t.id === mainSlider.defaultTabId}
                  className={cn(
                    "object-contain transition-opacity duration-200",
                    t.id === activeId ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
