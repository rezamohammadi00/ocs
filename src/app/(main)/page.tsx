//Local Imports
import { MainSlider } from "./MainSlider";
import { StoriesContainer } from "./StoriesContainer";
import { Services } from "./Services";
import { PricesSection } from "./PricesSection";

export default function HomePage() {
  return (
    <main>
      <StoriesContainer />
      <MainSlider />
      <Services />
      <PricesSection />
    </main>
  );
}
