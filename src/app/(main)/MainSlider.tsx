"use client";
import Image from "next/image";
import { useState } from "react";
//GLOBAL
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { COPY } from "@/lib/copy";

const sliderThumbShapeExact = `h-[74px] w-28 bg-white
    [clip-path:path('M0_74V12C0_8.309_2.898_5.268_6.584_5.09L100.014_0.579C106.538_0.264_112_5.468_112_12V74H0Z')]`;

const heroTabs = COPY.heroTabs;
export const MainSlider = () => {
  const [activeId, setActiveId] = useState("car");
  const active = heroTabs.find((t) => t.id === activeId) ?? heroTabs[0];

  return (
    <section className="mt-12 bg-linear-to-b from-[#FFFFFF] to-[#DFF3FF] relative">
      <Container>
        <div className="flex justify-between">
          {/* right */}
          <div className="flex-1">
            <div>
              <p className="text-[#F0A510] font-bold text-xl">
                {active.subtitle}
              </p>
              <div>
                <Image
                  key={active.id}
                  className="hero__img"
                  src={"/images/slider/vector.png"}
                  alt="hero"
                  width={103.79}
                  height={13.05}
                />
              </div>
              <h1 className="text-5xl text-[#016596] font-bold mt-3 max-w-[470.4px]">
                {active.title.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
              <ul className="flex gap-2">
                {active.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <p className="text-xs text-[#64748B] mt-3 mb-6">
                {active.description}
              </p>
              <Button>مشاهده خدمات</Button>
            </div>

            <div className="flex gap-1 absolute -bottom-6">
              {heroTabs.map((t, i) => {
                const selected = t.id === activeId;
                return (
                  <div
                    key={t.id}
                    onClick={() => setActiveId(t.id)}
                    className={cn(
                      sliderThumbShapeExact,
                      "cursor-pointer transition-all duration-200 text-[#64748B]",
                      selected &&
                        "bg-(--action-primary-solid-bg) text-[#B7E8FF] -mt-6",
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
            <Image
              key={active.id}
              src={active.image}
              alt="hero"
              width={761.6}
              height={504}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
