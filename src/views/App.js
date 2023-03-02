import { StyledSection } from "./App-style";
import { Navbar, Banner } from "../components/index";

function App() {
  return (
    <StyledSection>
      <Navbar />
      <div className="container">
        <Banner />
      </div>
    </StyledSection>
  );
}

export default App;
