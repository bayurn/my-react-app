import {
  StyledSection,
  StyledWrapper,
  StyledImg,
  StyledTextContent,
} from "./style";

const SectionRecommend = () => {
  const Main = () => {
    return (
      <StyledSection>
        <StyledWrapper>
          <StyledTextContent>
            <h2>Beautiful Beach</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vestibulum sed sem ut malesuada. Mauris ut lacinia lorem.
            </span>
          </StyledTextContent>
          <StyledImg
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Beach"
            width="100%"
            height="100%"
          />
        </StyledWrapper>
        <StyledWrapper>
          <StyledTextContent>
            <h2>Amazing Mountain</h2>
            <span>
              Nunc ut rhoncus ligula, eget finibus tellus. Donec vestibulum urna
              massa, vel cursus lacus hendrerit a.
            </span>
          </StyledTextContent>
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
