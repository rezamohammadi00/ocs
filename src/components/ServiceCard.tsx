import Link from "next/link";
import { ArrowLeft2 } from "iconsax-reactjs";
//Global Imports
import { Button } from "@/components/ui/Button";

type IServiceCardProps = {
  title: string;
  description: string;
  linkInfo: {
    text: string;
    href: string;
  };
  imageSrc: string;
  bgText: string;
};

const shadowShape = `relative isolate h-8 w-[411px] overflow-hidden
    before:absolute before:inset-x-0 before:top-[-10.4px] before:-z-10 before:h-8
    before:rounded-b-xl before:bg-(--action-secondary-light-bg) before:content-['']
    before:-skew-y-[2.91deg]`;

export const ServiceCard = ({
  title,
  description,
  linkInfo,
  imageSrc,
  bgText,
}: IServiceCardProps) => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center -mb-7">
        <p className="-mb-12 text-[54px] font-poppins font-medium bg-linear-to-b from-neutral-300 from-0% to-neutral-50 to-80% bg-clip-text text-transparent">
          {bgText}
        </p>
        <img
          src={imageSrc}
          alt="Service Image"
          className="object-cover w-full"
        />
      </div>
      <div className="flex flex-col gap-4 p-4 bg-(--action-secondary-light-bg) items-center">
        <h2 className="text-2xl text-(--action-secondary-light-text) font-bold mx-auto z-30">
          {title}
        </h2>
        <p className="text-sm text-(--action-secondary-light-text) mx-auto text-center">
          {description}
        </p>
        <Link href={linkInfo.href}>
          <Button
            variant="secondary"
            light
            appearance="text"
            endIcon={<ArrowLeft2 size="16" />}
          >
            {linkInfo.text}
          </Button>
        </Link>
      </div>
      <div className={shadowShape}></div>
    </section>
  );
};
