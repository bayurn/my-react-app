import { StyledSection } from "./style";
import { Banner } from "../../../components";

const SectionBanner = (props) => {
  const { image } = props;

  return (
    <StyledSection>
      <div className="container">
        <Banner image={image} />
      </div>
    </StyledSection>
  );
};

export default SectionBanner;
