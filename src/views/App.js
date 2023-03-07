import { Navbar } from "../components/index";
import {
  Banner,
  Caption,
  Featured,
  Highlight,
  Gallery,
  Event,
  PromoBanner,
} from "../views/src/index";
import data from "./data-featured.json";
import { StyledSection } from "./App-style";

const Home = () => {
  const { featured, banner, highlight, gallery, event, promoBanner } =
    data.data;

  return (
    <StyledSection>
      <Navbar />
      <Banner data={banner} />
      <Caption />
      <Featured data={featured} />
      <Highlight data={highlight} />
      <Gallery data={gallery} />
      <Event data={event} />
      <PromoBanner data={promoBanner} />
    </StyledSection>
  );
};

export default Home;
