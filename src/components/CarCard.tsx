import Image from "next/image";
//Global Imports
import { cn } from "@/lib/utils";

export type ICarCardProps = {
  title: string;
  subtitle: string;
  carImage: string;
  bgTextUrl: string;
  color: string;
  arrowImage: string;
};

const shadowShape = `relative isolate h-8 w-40 overflow-hidden
    before:absolute before:inset-x-0 before:top-[-10.4px] before:-z-10 before:h-8
    before:rounded-b-xl before:bg-(--card-color) before:content-['']
    before:-skew-y-[2.91deg]`;

export const CarCard = ({
  title,
  subtitle,
  carImage,
  bgTextUrl,
  color,
  arrowImage,
}: ICarCardProps) => {
  return (
    <section
      className="flex flex-col relative"
      style={{ "--card-color": `var(${color})` } as React.CSSProperties}
    >
      <div className={cn(shadowShape, "rotate-180")} />
      <div
        className={cn(
          "pr-3 pt-2 w-40 h-45.75 flex flex-col text-(--text-inverse) bg-(--card-color)",
        )}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-xs">{subtitle}</p>
      </div>
      <div className={shadowShape} />

      <div className="absolute bottom-13 left-2">
        <Image
          src={carImage}
          alt="قیمت روز"
          className="object-cover"
          width={115}
          height={60}
        />
        <Image
          src={arrowImage}
          alt="قیمت روز"
          className="object-cover mt-2"
          width={115}
          height={45}
        />
      </div>

      <div className="absolute -bottom-7 -right-7">
        <Image
          src={bgTextUrl}
          alt="قیمت روز"
          className="object-cover z-50"
          width={164}
          height={123}
        />
      </div>
    </section>
  );
};
