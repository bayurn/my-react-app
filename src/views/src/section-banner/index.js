import { StyledSection } from "./style";
import { Banner } from "../../../components";

const SectionBanner = (props) => {
  const { data } = props;

  return (
    <StyledSection>
      <div>
        <Banner image={data.image} />
      </div>
    </StyledSection>
  );
};

export default SectionBanner;
