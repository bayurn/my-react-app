import { Navbar } from "../components/index";
import { Banner, Caption, Featured, Highlight } from "../views/src/index";
import data from "./data-featured.json";
import { StyledSection } from "./App-style";

const Home = () => {
  const { featured, banner, highlight } = data.data;
  return (
    <StyledSection>
      <Navbar />
      <Banner data={banner} />
      <Caption />
      <Featured data={featured} />
      <Highlight data={highlight} />
    </StyledSection>
  );
};

export default Home;
