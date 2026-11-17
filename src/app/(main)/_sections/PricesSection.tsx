//Global Imports
import { CarCard } from "@/components/CarCard";
import { PriceCard } from "@/components/PriceCard";
import { TitleWithDesc } from "@/components/TitleWithDesc";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { COPY } from "@/lib/copy";
import { Scroller } from "@/components/Scroller";

const shadowShape = `relative isolate h-8 w-[1280px] overflow-hidden
    before:absolute before:inset-x-0 before:top-[-10.4px] before:-z-10 before:h-8
    before:rounded-b-xl before:bg-(--bahama-blue-50) before:content-['']
    before:-skew-y-[0.93deg]`;

export const PricesSection = () => {
  const { title, description, groups } = COPY.prices;

  return (
    <div className="mt-10">
      <Container>
        <div className={cn(shadowShape, "rotate-180")} />
        <div className="bg-(--bahama-blue-50) p-10">
          <TitleWithDesc
            title={title}
            desc={description}
            alignItems="items-start"
          />
          <div className="flex flex-col gap-6 mt-6">
            {groups.map((group) => (
              <div key={group.id} className="flex flex-col gap-4">
                <div className="flex gap-6 items-center">
                  <CarCard
                    color={group.card.color}
                    title={group.card.title}
                    subtitle={group.card.subtitle}
                    carImage={group.card.carImage}
                    bgTextUrl={group.card.bgTextUrl}
                    arrowImage={group.card.arrowImage}
                  />

                  <Scroller>
                    {group.items.map((item) => (
                      <PriceCard
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        imageSrc={item.imageSrc}
                        hrefLink={item.href}
                      />
                    ))}
                  </Scroller>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={shadowShape} />
      </Container>
    </div>
  );
};
