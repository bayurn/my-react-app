import { StyledSection, StyledWrapper, StyledImg } from "./style";

const SectionRecommend = () => {
  const Main = () => {
    return (
      <StyledSection>
        <StyledWrapper>
          <StyledImg
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Beach"
            width="100%"
            height="100%"
          />
        </StyledWrapper>
        <StyledWrapper>
          <StyledImg
            src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt="Mountain"
            width="100%"
            height="100%"
          />
        </StyledWrapper>
      </StyledSection>
    );
  };

  return (
    <div className="container">
      <h1>Recommendation</h1>
      <Main />
    </div>
  );
};

export default SectionRecommend;
