//Global Imports
import { ServiceCard } from "@/components/ServiceCard";
import { Container } from "@/components/ui/Container";
import { COPY } from "@/lib/copy";

export const Services = () => {
  return (
    <div className="mt-10">
      <Container>
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-2xl font-bold text-(--action-primary-light-text)">
            خدمات ما
          </p>
          <span className="block h-1 w-6 rounded-full bg-linear-to-r from-[#F0A510]/0 to-[#F0A510]"></span>
          <p className="text-center text-base text-(--landing-section-little-text)">
            راهکارهای تخصصی برای بازرگانان، شرکت‌ها و صاحبان کالا؛ برآورد اولیه
            همان لحظه
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {COPY.serviceCards.map((card) => (
            <ServiceCard
              key={card.id}
              title={card.title}
              description={card.features.join(" • ")}
              linkInfo={{
                text: card.cta,
                href: card.href,
              }}
              imageSrc={card.image}
              bgText={card.bgText}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
