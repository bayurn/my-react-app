import { StyledSection, StyledContainer, StyledWrapperImg } from "./style";

const SectionGallery = (props) => {
  const { data } = props;

  return (
    <StyledSection className="container">
      <h1>{data.title}</h1>
      <StyledContainer>
        {data.image.map((img, key) => {
          return (
            <StyledWrapperImg key={key}>
              <img src={img.imgUrl} alt={img.title} />
            </StyledWrapperImg>
          );
        })}
      </StyledContainer>
    </StyledSection>
  );
};

export default SectionGallery;
