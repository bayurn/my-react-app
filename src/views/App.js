import { Navbar } from "../components/index";
import { Banner, Caption, Featured, Highlight } from "../views/src/index";
import data from "./data-featured.json";
import { StyledSection } from "./App-style";

const imgBanner =
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80";

const imgHighlight =
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

const Home = () => {
  return (
    <StyledSection>
      <Navbar />
      <Banner image={imgBanner} />
      <Caption />
      <Featured data={data.data} />
      <Highlight image={imgHighlight} />
    </StyledSection>
  );
};

export default Home;
