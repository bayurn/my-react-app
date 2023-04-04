import { StyledSection, StyledWrapper, StyledItems } from "./style";

const SectionEvent = (props) => {
  const { data } = props;

  return (
    <StyledSection>
      <StyledWrapper>
        <StyledItems>
          <h1>{data.title}</h1>
          <span>{data.description}</span>
        </StyledItems>
        <StyledItems>
          <img src={data.image} alt="Event" width="100%" height="100%" />
        </StyledItems>
      </StyledWrapper>
    </StyledSection>
  );
};

export default SectionEvent;
