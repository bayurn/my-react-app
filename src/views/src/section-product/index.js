import { CardProduct } from "../../../components";
import { StyledSection, StyledWrapperCard, StyledWrapper } from "./style";

const Products = (props) => {
  const { data } = props;

  return (
    <div>
      <StyledSection>
        <StyledWrapperCard>
          {data.map((item, key) => {
            return (
              <StyledWrapper key={key}>
                <CardProduct
                  imgSrc={item.image.url}
                  title={item.title}
                  price={item.formatted.price}
                />
              </StyledWrapper>
            );
          })}
        </StyledWrapperCard>
      </StyledSection>
    </div>
  );
};

export default Products;
