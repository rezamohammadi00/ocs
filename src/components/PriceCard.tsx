import Image from "next/image";
import Link from "next/link";
import { ArrowLeft2 } from "iconsax-reactjs";
//Global Imports
import { Button } from "@/components/ui/Button";

export type IPriceCardProps = {
  title: string;
  price: string;
  hrefLink?: string;
  imageSrc: string;
};

export const PriceCard = ({
  title,
  price,
  imageSrc,
  hrefLink = "#",
}: IPriceCardProps) => {
  return (
    <section className="min-w-54">
      <div className="bg-(--action-primary-light-bg) mr-2 pr-3 pl-3 pt-2 pb-8 -mb-8 rounded-xl">
        <p className="font-bold text-sm text-(--neutral-app-950)">{title}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.75">
            <p className="text-(--action-white-solid-text) text-sm">{price}</p>
            <Image
              src="/images/toman.svg"
              alt="Service Image"
              className="object-cover"
              width={22}
              height={10}
            />
          </div>
          <Link href={hrefLink}>
            <Button variant="secondary" appearance="outlined" size="icon-xs">
              <ArrowLeft2 />
            </Button>
          </Link>
        </div>
      </div>
      <Image
        src={imageSrc}
        alt="Service Image"
        className="object-cover"
        width={216}
        height={137.93}
      />
    </section>
  );
};
