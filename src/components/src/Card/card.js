import { StyledSection, StyledMiniCard, StyledWrapper } from "./style";

const Card = (props) => {
  const { image, title, description } = props;

  return (
    <StyledSection>
      <StyledWrapper>
        <img src={image.url} alt={image.title} height="100%" width="100%" />
        <StyledMiniCard>
          <h2>{title}</h2>
          <span>{description}</span>
        </StyledMiniCard>
      </StyledWrapper>
    </StyledSection>
  );
};

export default Card;
