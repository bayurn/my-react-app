import { StyledSection, StyledWrapper } from "./style";

const SectionRecommend = () => {
  return (
    <StyledSection className="container">
      <StyledWrapper>
        <img
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Beach"
          width="100%"
          height="100%"
        />
      </StyledWrapper>
      <StyledWrapper>
        <img
          src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="Mountain"
          width="100%"
          height="100%"
        />
      </StyledWrapper>
    </StyledSection>
  );
};

export default SectionRecommend;
