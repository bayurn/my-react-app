import { Card } from "../../../components";
import { StyledSection, WrapperCard } from "./style";

const SectionFeatured = (props) => {
  const { data } = props;

  return (
    <div>
      <h1>Our Offers</h1>
      <StyledSection>
        {data.map((content, key) => {
          const { image, title, description } = content;
          return (
            <WrapperCard key={key}>
              <Card
                key={key}
                image={image}
                title={title}
                description={description}
              />
            </WrapperCard>
          );
        })}
      </StyledSection>
    </div>
  );
};

export default SectionFeatured;
