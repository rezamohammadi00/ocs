//Local Imports
import { SliderSection } from "./_sections/SliderSection";
import { StoriesSection } from "./_sections/StoriesSection";
import { ServicesSection } from "./_sections/ServicesSection";
import { PricesSection } from "./_sections/PricesSection";
import { CtaSection } from "./_sections/CtaSection";

export default function HomePage() {
  return (
    <main>
      <StoriesSection />
      <SliderSection />
      <ServicesSection />
      <PricesSection />
      <CtaSection />
    </main>
  );
}
