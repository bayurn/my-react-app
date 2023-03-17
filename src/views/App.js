import { Navbar, Footer } from "../components/index";
import {
  Banner,
  Caption,
  Featured,
  Highlight,
  Gallery,
  Event,
  PromoBanner,
  Recommendation,
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
      <Recommendation />
      <Featured data={featured} />
      <Highlight data={highlight} />
      <Gallery data={gallery} />
      <Event data={event} />
      <PromoBanner data={promoBanner} />
      <Footer />
    </StyledSection>
  );
};

export default Home;
