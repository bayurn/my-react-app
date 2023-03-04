import { Card } from "../../../components";
import { StyledSection, WrapperCard } from "./style";

const SectionFeatured = (props) => {
  const { data } = props;

  return (
    <StyledSection className="container">
      {data.map((content, key) => {
        const { image, title, description } = content;
        return (
          <WrapperCard key={key}>
            <Card image={image} title={title} description={description} />
          </WrapperCard>
        );
      })}
    </StyledSection>
  );
};

export default SectionFeatured;
