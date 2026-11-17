import Image from "next/image";
import { ArrowLeft2 } from "iconsax-reactjs";
//GLobal Imports
import { COPY } from "@/lib/copy";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const verticalShape = `relative isolate h-[212px] w-5 overflow-hidden
    before:absolute before:inset-y-0 before:-left-4 before:right-[6.5px] before:-z-10
    before:rounded-tr-xl before:rounded-br-[7px] before:bg-(--border-info) before:content-['']
    before:-skew-x-[3.52deg]`;

export const CtaSection = () => {
  const { cta } = COPY;

  return (
    <Container>
      <section className="flex items-center my-[61.55px]">
        <div className={verticalShape} />
        <div className="w-176.5 h-53 bg-(--border-info) -ml-8 pr-8 pt-8">
          <p className="font-bold text-4xl text-(--neutral-app-50)">
            {cta.title}
          </p>
          <p className="text-xs text-(--neutral-app-300) mt-2">
            {cta.description}
          </p>
          <Button
            variant="white"
            appearance="solid"
            className="mt-6"
            endIcon={<ArrowLeft2 />}
          >
            {cta.button}
          </Button>
        </div>
        <div>
          <Image src={cta.image} alt={cta.imageAlt} width={642} height={20} />
        </div>
      </section>
    </Container>
  );
};
