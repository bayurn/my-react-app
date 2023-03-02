import { Navbar } from "../components/index";
import { Banner } from "../views/src/index";
import { StyledSection } from "./App-style";

const Home = () => {
  return (
    <StyledSection>
      <Navbar />
      <div className="container">
        <Banner />
      </div>
    </StyledSection>
  );
};

export default Home;
