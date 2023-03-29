import { StyledSection, StyledButton } from "./style-card-prouduct";

const CardProduct = (props) => {
  const { data } = props;

  return (
    <StyledSection>
      <img src={data.imgSrc} alt={data.title} width="100%" height="100%" />
      <h2>{data.title}</h2>
      <span>{data.price}</span>
      <StyledButton>Book Now</StyledButton>
    </StyledSection>
  );
};

export default CardProduct;
