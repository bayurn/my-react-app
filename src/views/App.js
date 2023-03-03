import { Navbar } from "../components/index";
import { Banner, Caption, Featured } from "../views/src/index";
import { StyledSection } from "./App-style";

const Home = () => {
  return (
    <StyledSection>
      <Navbar />
      <Banner />
      <Caption />
      <Featured />
    </StyledSection>
  );
};

export default Home;
