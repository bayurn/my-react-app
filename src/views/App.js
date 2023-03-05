import { Navbar } from "../components/index";
import {
  Banner,
  Caption,
  Featured,
  Highlight,
  Gallery,
} from "../views/src/index";
import data from "./data-featured.json";
import { StyledSection } from "./App-style";

const Home = () => {
  const { featured, banner, highlight, gallery } = data.data;
  return (
    <StyledSection>
      <Navbar />
      <Banner data={banner} />
      <Caption />
      <Featured data={featured} />
      <Highlight data={highlight} />
      <Gallery data={gallery} />
    </StyledSection>
  );
};

export default Home;
