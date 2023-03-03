import { Card } from "../../../components";
import { StyledSection, WrapperCard } from "./style";

const data = [
  {
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "featured-1",
    },
    title: "Pemandangan Indah",
    description:
      "Maecenas nisl dolor, condimentum quis ligula id, aliquet hendrerit enim. Aliquam mollis lacus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut elementum hendrerit aliquet.",
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "featured-1",
    },
    title: "Makanan Enak",
    description:
      "Sed malesuada neque sed augue fermentum, pharetra volutpat turpis rutrum. Integer lobortis faucibus nulla, vitae fermentum mauris convallis eget. Fusce id justo dignissim, rhoncus mi sed, interdum mauris.",
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2057&q=80",
      title: "featured-1",
    },
    title: "Hotel Mewah",
    description:
      "Donec sapien eros, cursus id scelerisque in, venenatis quis tortor. Praesent tristique malesuada consequat. Duis porttitor hendrerit finibus. Proin eget libero sit amet magna vehicula placerat sed eget eros.",
  },
];
const SectionFeatured = () => {
  return (
    <StyledSection className="container">
      {data.map((content) => {
        const { image, title, description } = content;
        return (
          <WrapperCard>
            <Card image={image} title={title} description={description} />
          </WrapperCard>
        );
      })}
    </StyledSection>
  );
};

export default SectionFeatured;
