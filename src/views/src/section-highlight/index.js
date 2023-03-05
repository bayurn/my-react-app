import { StyledSection, StyledWrapper, StyledItems } from "./style";

const SectionHighlight = (props) => {
  const { data } = props;

  return (
    <StyledSection>
      <StyledWrapper className="container">
        <StyledItems>
          <img src={data.image} alt="Highligt" width="100%" height="100%" />
        </StyledItems>
        <StyledItems>
          <h1>Hotel Van Java</h1>
          <span>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </span>
        </StyledItems>
      </StyledWrapper>
    </StyledSection>
  );
};

export default SectionHighlight;
