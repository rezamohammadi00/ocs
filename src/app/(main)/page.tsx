//Local Imports
import { MainSlider } from "./MainSlider";
import { StoriesContainer } from "./StoriesContainer";
import { Services } from "./Services";

export default function HomePage() {
  return (
    <>
      <StoriesContainer />
      <MainSlider />
      <Services />
    </>
  );
}
