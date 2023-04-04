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
  Products,
} from "../views/src/index";
import data from "./data-featured.json";
import { StyledSection } from "./App-style";

const Home = () => {
  const { featured, banner, highlight, gallery, event, promoBanner, products } =
    data.data;

  return (
    <StyledSection>
      <Navbar />
      <div className="container">
        <Banner data={banner} />
        <Caption />
        <Recommendation />
        <Featured data={featured} />
        <Highlight data={highlight} />
        <Gallery data={gallery} />
        <Event data={event} />
        <PromoBanner data={promoBanner} />
        <Products data={products} />
        <Footer />
      </div>
    </StyledSection>
  );
};

export default Home;
