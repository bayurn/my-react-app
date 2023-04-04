import { StyledSection, StyledWrapperImg } from "./style";

const SectionPromoBanner = (props) => {
  const { data } = props;

  return (
    <StyledSection>
      <StyledWrapperImg>
        <img
          src={data.image.url}
          alt={data.image.title}
          width="100%"
          height="100%"
        />
      </StyledWrapperImg>
    </StyledSection>
  );
};

export default SectionPromoBanner;
