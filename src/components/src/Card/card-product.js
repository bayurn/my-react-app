import { StyledSection, StyledButton } from "./style-card-prouduct";

const CardProduct = (props) => {
  const { imgSrc, title, price } = props;

  return (
    <StyledSection>
      <img src={imgSrc} alt={title} width="100%" height="100%" />
      <h2>{title}</h2>
      <span>{price}</span>
      <StyledButton>Book Now</StyledButton>
    </StyledSection>
  );
};

export default CardProduct;
