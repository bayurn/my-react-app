import { StyledSection, StyledWrapper, StyledItems } from "./style";

const SectionEvent = (props) => {
  const { title, description } = props;

  return (
    <StyledSection>
      <StyledWrapper>
        <StyledItems>
          <h1>{title}</h1>
          <span>{description}</span>
        </StyledItems>
      </StyledWrapper>
    </StyledSection>
  );
};
