import { StyledBanner, StyledImg } from "./style";

const Banner = (props) => {
  const { image } = props;

  return (
    <StyledBanner>
      <StyledImg src={image} alt="Banner" />
    </StyledBanner>
  );
};

export default Banner;
