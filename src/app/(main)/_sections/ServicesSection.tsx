//Global Imports
import { ServiceCard } from "@/components/ServiceCard";
import { TitleWithDesc } from "@/components/TitleWithDesc";
import { Container } from "@/components/ui/Container";
import { COPY } from "@/lib/copy";

const { services, serviceCards } = COPY;

export const ServicesSection = () => {
  return (
    <div className="mt-10">
      <Container>
        <TitleWithDesc
          alignItems="items-center"
          title={services.title}
          desc={services.description}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {serviceCards.map((card) => (
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
