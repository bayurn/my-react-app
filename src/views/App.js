import { Navbar } from "../components/index";
import { Banner, Caption } from "../views/src/index";
import { StyledSection } from "./App-style";

const Home = () => {
  return (
    <StyledSection>
      <Navbar />
      <Banner />
      <Caption />
    </StyledSection>
  );
};

export default Home;
